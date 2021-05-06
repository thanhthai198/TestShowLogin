import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUp";
import ForgotScreen from "../screens/ForgotPass";

const Stack = createStackNavigator();

const UserNavigation = ({navigation}) => {
    
    return(
        <Stack.Navigator headerMode='none' initialRouteName='LoginScreen'>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="ForgotScreen" component={ForgotScreen}/>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        </Stack.Navigator>
    )
    
}

export default UserNavigation;