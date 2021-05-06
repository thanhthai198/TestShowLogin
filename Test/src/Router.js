import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/Home";
import Login from "./screens/LoginScreen";


const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator headerMode={'none'} initialRouteName="Login" >
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}

export default Router;