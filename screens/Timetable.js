import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Timetable() {
  // Timetable data
  const timetable = [
    {
      day: 'Monday',
      lectures: [
        { time: '8:30 AM - 10:00 AM', subject: 'Project Preparation', teacher: '' },
        { time: '10:00 AM - 11:30 AM', subject: 'Telecommunication System (IT-405)', teacher: 'Mr. Hammad Safdar' },
        { time: '11:30 AM - 1:00 PM', subject: 'Mobile App Dev (IT-403)', teacher: 'Mr. Muzamil Mehboob' },
        { time: '1:00 PM - 2:30 PM', subject: 'Pakistan Studies (PK-407)', teacher: 'Ms. Ayesha Niaz' },
      ],
    },
    {
      day: 'Tuesday',
      lectures: [
        { time: '8:30 AM - 10:00 AM', subject: 'Project Preparation', teacher: '' },
        { time: '10:00 AM - 11:30 AM', subject: 'Telecommunication System (IT-405)', teacher: 'Mr. Hammad Safdar' },
        { time: '11:30 AM - 1:00 PM', subject: 'Mobile App Dev (IT-403)', teacher: 'Mr. Muzamil Mehboob' },
        { time: '1:00 PM - 2:30 PM', subject: 'Financial Management (MG-409)', teacher: 'Dr. Shahid Yaqoob' },
      ],
    },
    {
      day: 'Wednesday',
      lectures: [
        { time: '8:30 AM - 10:00 AM', subject: 'Virtual Systems & Services (IT-401)', teacher: 'Dr. Jawad ul Hassan' },
        { time: '10:00 AM - 11:30 AM', subject: 'Virtual Systems Lab (IT-401)', teacher: 'Mr. Masood ul Rehman' },
        { time: '11:30 AM - 1:00 PM', subject: 'Project Preparation', teacher: '' },
      ],
    },
    {
      day: 'Thursday',
      lectures: [
        { time: '8:30 AM - 10:00 AM', subject: 'Virtual Systems & Services (IT-401)', teacher: 'Dr. Jawad ul Hassan' },
        { time: '10:00 AM - 11:30 AM', subject: 'Virtual Systems Lab (IT-401)', teacher: 'Mr. Masood ul Rehman' },
        { time: '11:30 AM - 1:00 PM', subject: 'Translation of Holy Quran (ARAB-351)', teacher: 'Ms. Shabana' },
        { time: '1:00 PM - 2:30 PM', subject: 'Financial Management (MG-409)', teacher: 'Dr. Shahid Yaqoob' },
      ],
    },
    {
      day: 'Friday',
      lectures: [
        { time: '8:30 AM - 10:00 AM', subject: 'Project Preparation', teacher: '' },
        { time: '10:00 AM - 11:30 AM', subject: 'Project Preparation', teacher: '' },
        { time: '11:30 AM - 1:00 PM', subject: 'Project Preparation', teacher: '' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {timetable.map((day, index) => (
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.dayTitle}>{day.day}</Text>
          {day.lectures.map((lecture, idx) => (
            <View key={idx} style={styles.lectureContainer}>
              <Text style={styles.time}>{lecture.time}</Text>
              <Text style={styles.subject}>
                {lecture.subject} {lecture.teacher ? `(${lecture.teacher})` : ''}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

// Styles for the timetable screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  lectureContainer: {
    marginBottom: 10,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  subject: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
});
