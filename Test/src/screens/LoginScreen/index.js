import React from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, Touchable} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageConstants from "../../constants/ImageConstants";
import styles from './styles'

const Login = () => {
    return(
        <SafeAreaView style={styles.root}>
            <Image style={{
                width: 95,
                height: 94,
            }} source={ImageConstants.Path}/>
            <Text style={{
                fontSize: 30,
                color: '#ff344c',
                fontWeight: 'bold',
                marginTop: 20,
            }}>
                PMPML
            </Text>
            <Text style={{
                fontSize: 60,
                color: '#1a1a1a',
                marginTop: 40,
                fontWeight: 'bold',
                textAlign: 'center',
            }}>
                Welcome
            </Text>
            <Text style={{
                fontWeight: 'normal',
                fontSize: 12,
                color: '#1a1a1a',
                marginTop: 15,
                textAlign: 'center',
                width: 284,
                height: 42,
                lineHeight: 17
            }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            </Text>
            <View style={styles.viewInput}>
                <Image style={{width: 32, height: 28, marginHorizontal: 10}} source={ImageConstants.IconMail}/>
                <TextInput placeholder={"Email Adress"} style={styles.textInput}/>
            </View>
            <View style={styles.viewInput}>
                <Image style={{width: 28, height: 32, marginHorizontal: 10}} source={ImageConstants.IconLock}/>
                <TextInput placeholder={"Password"} style={styles.textInput}/>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{fontSize: 17, color: '#ffffff', fontWeight: '700'}}>Login</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <View style={{width: 140, height: 52, backgroundColor: '#3b5998', borderRadius: 26, marginHorizontal: 5, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 30, color: '#fff'}}>F</Text>
                </View>
                <View style={{width: 140, height: 52, backgroundColor: '#00bf9e', borderRadius: 26, marginHorizontal: 5, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff'}}>Guest User</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Text style={{fontSize: 12, color: '#1a1a1a', fontWeight: '400'}}>By signing up, you agree with our </Text>
                <TouchableOpacity>
                    <Text style={{fontSize: 12, color: 'blue', fontWeight: '400'}}>Terms & Conditions</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}



export default Login;