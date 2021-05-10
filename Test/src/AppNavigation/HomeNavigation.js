import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import Store from '../screens/Store';
import HomeScreen from '../screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="home-outline" color="#808080" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: () => (
            <Icon name="rocket-outline" color="#808080" size={20} />
          ),
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Icon name="aperture-outline" color="#808080" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: () => (
            <Icon name="settings-outline" color="#808080" size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
