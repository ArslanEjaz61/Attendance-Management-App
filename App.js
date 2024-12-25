import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import SplashScreen from './screens/SplashScreen'; // Splash Screen
import AddStudents from './screens/AddStudents'; // Add Students Screen
import AddSubjects from './screens/AddSubjects'; // Add Subjects Screen
import Timetable from './screens/Timetable'; // Timetable Screen
import HomeScreen from './screens/HomeScreen'; // Home Screen (Ensure this file exists and is correctly implemented)

// Create Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Splash Screen */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} // Hide the header for Splash
        />

        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Hide the header for Home
        />

        {/* Add Students Screen */}
        <Stack.Screen name="AddStudents" component={AddStudents} />

        {/* Add Subjects Screen */}
        <Stack.Screen name="AddSubjects" component={AddSubjects} />

        {/* Timetable Screen */}
        <Stack.Screen name="Timetable" component={Timetable} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
