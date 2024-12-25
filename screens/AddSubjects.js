import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

export default function AddSubjects() {
  const [subjectName, setSubjectName] = useState(''); // Input for subject name
  const [subjectCode, setSubjectCode] = useState(''); // Input for subject code
  const [subjects, setSubjects] = useState([]);       // List of added subjects

  // Function to add a subject
  const addSubject = () => {
    if (subjectName.trim() === '' || subjectCode.trim() === '') {
      alert('Please enter both subject name and code!');
      return;
    }
    setSubjects([
      ...subjects,
      { name: subjectName.toString(), code: subjectCode.toString() } // Ensure string values
    ]);
    setSubjectName(''); // Clear the input
    setSubjectCode(''); // Clear the input
    alert('Subject Added!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Subject</Text>

      {/* Input for subject name */}
      <TextInput
        style={styles.input}
        placeholder="Subject Name"
        value={subjectName}
        onChangeText={(text) => setSubjectName(text)}
      />

      {/* Input for subject code */}
      <TextInput
        style={styles.input}
        placeholder="Subject Code"
        value={subjectCode}
        onChangeText={(text) => setSubjectCode(text)}
      />

      {/* Button to add subject */}
      <Button title="Add Subject" onPress={addSubject} />

      {/* Display the list of subjects */}
      <Text style={styles.listTitle}>Subjects List:</Text>
      <FlatList
        data={subjects}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text> - <Text>{item.code}</Text>
          </Text>
        )}
      />
    </View>
  );
}

// Styling for the screen
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
});
