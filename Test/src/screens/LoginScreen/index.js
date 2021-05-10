import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageConstants from "../../constants/ImageConstants";
import styles from './styles'

import { AuthContext } from "../../components/context";

const Login = ({navigation}) => {

    const {signIn} = React.useContext(AuthContext);

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

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
                <TextInput 
                placeholder={"Email Adress"} 
                style={styles.textInput} 
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
                onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
            </View>
            <View style={styles.viewInput}>
                <Image style={{width: 28, height: 32, marginHorizontal: 10}} source={ImageConstants.IconLock}/>
                <TextInput 
                placeholder={"Password"} 
                style={styles.textInput}
                secureTextEntry={data.secureTextEntry ? true : false}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
                />
            </View>
            <TouchableOpacity style={styles.button}
            onPress={() => {signIn()}}
            >
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