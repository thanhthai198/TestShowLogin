import React from "react";
import {TouchableOpacity, Text, View} from "react-native"
import styles from "./styles"


const Home = ({navigation}) => {
    return (
        <View style={styles.root}>
            <Text style={{color: '#000000', marginBottom: 40}}> HOME </Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
        >
            <Text style={{color: '#000000', fontSize: 14}}>Go To Login</Text>
        </TouchableOpacity>
        </View>
    )
}

export default Home;