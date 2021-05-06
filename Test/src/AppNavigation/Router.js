import React, {useEffect} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigation from "./HomeNavigation"
import {View, ActivityIndicator} from 'react-native';
import UserNavigation from "./UserNavigation";
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from "../components/context";

const Stack = createStackNavigator();



const Router = () => {

    const [isLoadings, setIsLoadings] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    const authContext = React.useMemo(() => ({
        signIn: () => {
            setUserToken('fgkj');
            setIsLoadings(false);
        },
        signUp: () => {
            setUserToken('fgkj');
            setIsLoadings(false);
        },
        signOut: () => {
            setUserToken(null);
            setIsLoadings(false);
        },
    }));

    useEffect(() => {
        setTimeout(() =>{
            setIsLoadings(false);
        }, 1000)
    },[]);

    if(isLoadings) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
    return(
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {userToken != null ? (
                    <HomeNavigation/>
                ):
                <UserNavigation/>
            }
                
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default Router;