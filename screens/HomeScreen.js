import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo and Welcome Text */}
      <View style={styles.header}>
        <Image source={require('../assets/bzu_logo.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Welcome to BZU Attendance System</Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddStudents')}
        >
          <Text style={styles.buttonText}>Add Students</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddSubjects')}
        >
          <Text style={styles.buttonText}>Add Subjects</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Timetable')}
        >
          <Text style={styles.buttonText}>View Timetable</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by Bahauddin Zakariya University</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366', // BZU deep blue background
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 100, // Adjust logo size
    height: 100,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text for contrast
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFD700', // BZU golden yellow for buttons
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // For Android shadow
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366', // Deep blue text for buttons
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#FFFFFF', // White footer text
    textAlign: 'center',
  },
});
