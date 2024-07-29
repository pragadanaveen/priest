import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Login from "./App/Components/usersignin";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./App/Components/usersignup";
import Country from "./App/Components/selectcountry";
import Terms from "./App/Components/terms";
import Privacy from "./App/Components/privacy";
import Forgot from "./App/Components/forgot";
import Home from './App/Components/home';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bookings from "./App/Components/bookings";
import Event from "./App/Components/events";
import Profile from "./App/Components/profile";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconsd from 'react-native-vector-icons/FontAwesome5';
import Person from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import Choice from "./App/Components/priest-user";
import Contact from "./App/Components/contact";
import FaqScreen from "./App/Components/faq";
import Change from "./App/Components/changepassword";
import About from "./App/Components/about";
import CustomAlert from "./App/Components/deleteaccount";
// import EditProfile from "./App/Components/editprofile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'black',
        tabBarActiveBackgroundColor: 'white',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          margin: 'auto',
          width: '96%',
          bottom: 20,
          borderRadius: 50,
          backgroundColor: '#38aef8',
          paddingTop: 8,
          paddingBottom: 8,
          height: 90,
          maxHeight: 150,
        },
        tabBarItemStyle: {
          padding: 10,
          borderRadius: 40,
          marginHorizontal: 10,
        },
      }}
    >
      <Tab.Screen name='home' component={Home} options={{
        tabBarLabel: 'Home',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Icon name='home' size={25} color={color} />
        ),
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '600',
        },
      }}
      />
      <Tab.Screen name='notevebt' component={Event}
        options={{
          headerShown: false,
          tabBarLabel: 'Events',
          tabBarIcon: ({ color }) => (
            <Iconsd name='fire-alt' size={25} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '600',
          },
        }
        }
      />
      <Tab.Screen name='bookings' component={Bookings}
        options={{
          headerShown: false,
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ color }) => (
            <Person name='calendar-clear' size={25} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '600',
          },
        }
        }
      />
      <Tab.Screen name='profile' component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Person name='person' size={25} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '600',
          },
        }
        }
      />
    </Tab.Navigator >

  );
};

const App = () => {
  const [initalroute, setInitalroute] = useState('main');
  return (
    <>
      <NavigationContainer >
        <Stack.Navigator initialRouteName={initalroute}>
          <Stack.Screen name='look' component={Main} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Login" component={Login} options={{
            headerShown: false
          }} />
          <Stack.Screen name='Signup' component={Signup} options={{
            headerShown: false
          }} />
          <Stack.Screen name="select" component={Country} options={{
            title: 'Select Country',
            headerStyle: {
              fontWeight: '900',
              fontSize: 25,
            }
          }
          } />
          <Stack.Screen name='terms' component={Terms} options={{
            headerShown: false
          }} />
          <Stack.Screen name='privacy' component={Privacy} options={{
            headerShown: false
          }} />
          <Stack.Screen name='forgot' component={Forgot} options={{
            headerShown: false
          }} />
          <Stack.Screen name='choice' component={Choice} options={{
            headerShown: false
          }} />
          <Stack.Screen name='contact' component={Contact} options={{
            headerShown: false
          }} />
          <Stack.Screen name='faq' component={FaqScreen} options={{
            headerShown: false
          }} />
          <Stack.Screen name='change' component={Change} options={{
            headerShown: false
          }} />
          <Stack.Screen name='about' component={About} options={{
            headerShown: false
          }} />
          {/* <Stack.Screen name='editprofile' component={EditProfile} options={{
            headerShown: false
          }} /> */}
          <Stack.Screen name='delete' component={CustomAlert} />
        </Stack.Navigator>
      </NavigationContainer >
    </>

  );
};
export default App;