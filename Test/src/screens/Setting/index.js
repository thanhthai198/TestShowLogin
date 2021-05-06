import React from "react";
import {TouchableOpacity, Text, View} from "react-native"
import styles from "./styles"

import { AuthContext } from "../../components/context"

const Setting = ({navigation}) => {
    
    const {signOut} = React.useContext(AuthContext) 

    return(
        <View style={styles.root}>
            <Text style={{color: '#000000', marginBottom: 40}}> Setting </Text>
        <TouchableOpacity
            onPress={() => (signOut())}
        >
            <Text style={{color: '#000000', fontSize: 14}}>LogOut</Text>
        </TouchableOpacity>
        </View>
    )
}

export default Setting;