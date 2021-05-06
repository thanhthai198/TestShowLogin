import React, {useEffect} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigation from "./HomeNavigation"
import {View, ActivityIndicator, AsyncStorage} from 'react-native';
import UserNavigation from "./UserNavigation";
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from "../components/context";

const Stack = createStackNavigator();



const Router = () => {

    const [isLoadings, setIsLoadings] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    useEffect(() => {
        fetchUserData();
    }, [])

    const fetchUserData = async ()  => {
        // B2: moi khi vao app thi se lay gia tri tu bo nho may
        try {
            const isLogin = await AsyncStorage.getItem('isLogin');
            console.log(isLogin)
            // neu co gia tri true se set setUserToken bang true de cho user vao man home
            if (isLogin == 'true') {
                setUserToken('fgkj');
                setIsLoadings(false);
            }
          } catch (error) {
            // Error retrieving data
          }
    }

    const authContext = React.useMemo(() => ({
        signIn: () => {
            setUserToken('fgkj');
            setIsLoadings(false);
            // B1: Luu vao bo nho may bang asyncstorage
            try {
                AsyncStorage.setItem(
                  'isLogin',
                  'true'
                );
              } catch (error) {
                // Error saving data
              }
              // end B1
            
        },
        signUp: () => {
            setUserToken('fgkj');
            setIsLoadings(false);
        },
        signOut: () => {
            setUserToken(null);
            setIsLoadings(false);
             try {
                AsyncStorage.setItem(
                  'isLogin',
                  'null'
                );
              } catch (error) {
                // Error saving data
              }
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