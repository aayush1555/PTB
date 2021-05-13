// App.js

import * as React from 'react';
import {Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Faq from './components/faq';
import Symptoms from './components/symptoms';
import Chatbot from './components/chatbot';

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#4169E1',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={({ navigation, route }) => (
      
          { title: 'Dashboard' },
          {headerLeft: null} ,
          {headerRight: () => (
           <Button
           style={styles.demo}
             onPress={() => navigation.navigate('Faq')}
             title="      FAQ        "
             color="#000080"
           />
         ),
       })}
      />   
          
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={({ navigation, route }) => (
      
          { title: 'Dashboard' },
          {headerLeft: null} ,
          {headerRight: () => (
           <Button
           style={styles.demo}
             onPress={() => navigation.navigate('Faq')}
             title="      FAQ        "
             color="#000080"
           />
         ),
       })}
      />
      <Stack.Screen 
        name="Schedule" 
        component={Chatbot} 
        options={({ navigation, route }) => (
          {title: 'Symptoms'},
          {headerStyle: 'italic' },
          {headerLeft: null}
          
        )}
      />
       <Stack.Screen 
        name="Faq" 
        component={Faq} 
        options={({ navigation, route }) => (
          {title: 'Faq'},
          {headerLeft: null},
          {headerRight: () =>(
            <Button
            style={styles.demo}
            onPress ={() => navigation.navigate('Schedule')}
            title="BOOK APPOINTMENT"
            color= '#000080'/>
          ),}
        )}
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={({ navigation, route }) => (
      
         { title: 'Dashboard' },
         {headerLeft: null} ,
         {headerRight: () => (
          <Button
          style={styles.demo}
            onPress={() => navigation.navigate('Schedule')}
            title="BOOK APPOINTMENT"
            color="#000080"
          />
        ),
      })}
         
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      </NavigationContainer>
  );
}

const styles=StyleSheet.create({
  demo:{
    padding: 10,
    fontSize: 29,
    marginBottom: 20,
    color: 'black'
  }
})