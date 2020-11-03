import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Introduction, Jobs, SavedJobs} from './pages';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={Introduction}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="SavedJobs" component={SavedJobs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
