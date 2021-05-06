import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "../screens/Profile"
import Setting from "../screens/Setting"
import Store from "../screens/Store"
import HomeScreen from "../screens/Home"

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Store" component={Store} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    )
}

export default HomeNavigation;