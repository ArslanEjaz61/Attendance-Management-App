import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import axios from 'axios';

export default function AddStudents() {
  const [studentName, setStudentName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [students, setStudents] = useState([]);

  // Fetch students from the server
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/students'); // Replace with your backend URL
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  // Add a student
  const addStudent = async () => {
    if (studentName.trim() === '' || rollNumber.trim() === '') {
      ToastAndroid.show('Please enter both name and roll number!', ToastAndroid.SHORT);
      return;
    }

    try {
      const newStudent = { name: studentName, rollNumber: rollNumber };
      await axios.post('http://localhost:5000/students', newStudent); // Replace with your backend URL
      setStudentName('');
      setRollNumber('');
      ToastAndroid.show('Student Added!', ToastAndroid.SHORT);
      fetchStudents(); // Refresh the student list
    } catch (error) {
      console.error('Error adding student:', error);
      ToastAndroid.show('Failed to add student!', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Student</Text>

      <TextInput
        style={styles.input}
        placeholder="Student Name"
        value={studentName}
        onChangeText={(text) => setStudentName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Roll Number"
        value={rollNumber}
        onChangeText={(text) => setRollNumber(text)}
      />

      <Button title="Add Student" onPress={addStudent} />

      <Text style={styles.listTitle}>Students List:</Text>
      <ScrollView style={{ marginTop: 10 }}>
        {students.map((student, index) => (
          <View key={index} style={styles.studentItem}>
            <Text style={styles.studentText}>
              {index + 1}. {student.name} - {student.rollNumber}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  listTitle: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  studentItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  studentText: {
    fontSize: 16,
  },
});
