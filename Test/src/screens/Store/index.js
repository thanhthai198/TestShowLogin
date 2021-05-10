import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';

const Store = ({navigation}) => {
  return (
    <SafeAreaView style={styles.root}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.root}
        initialRegion={{
          latitude: 21.0227788,
          longitude: 105.8194541,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View
        style={{
          height: 210,
          backgroundColor: '#32cd32',
          width: '100%',
          alignItems: 'center',
          position: 'absolute',
        }}>
        <View style={[styles.form, {marginTop: 40}]}>
          <View style={styles.ballNumber}>
            <Text style={{fontSize: 16, color: '#fff'}}>1</Text>
          </View>
          <TextInput style={styles.textInput} placeholder="Form" />
          <Icon name="reorder-three-outline" size={30} color="#808080" />
        </View>
        <View style={[styles.form, {marginTop: 10}]}>
          <View style={styles.ballNumber}>
            <Text style={{fontSize: 16, color: '#fff'}}>2</Text>
          </View>
          <TextInput style={styles.textInput} placeholder="To" />
          <Icon name="reorder-three-outline" size={30} color="#808080" />
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            marginTop: 10,
            backgroundColor: '#fff',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon
              name="logo-apple"
              size={30}
              color="#808080"
              style={{marginHorizontal: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon
              name="logo-firefox"
              size={30}
              color="#808080"
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="logo-github" size={30} color="#808080" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 80,
          backgroundColor: '#fff',
          marginBottom: 0,
          position: 'absolute',
          bottom: 0,
          opacity: 0.6,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Icon
          name="search-outline"
          size={35}
          color="#808080"
          style={{marginLeft: 15}}
        />
        <Icon name="navigate-outline" size={35} color="#808080" />
        <Icon name="star-outline" size={35} color="#808080" />
        <Icon
          name="reorder-four-outline"
          size={35}
          color="#808080"
          style={{marginRight: 15}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Store;
