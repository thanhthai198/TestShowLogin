import React, {useEffect} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

import {useSelector, useDispatch} from 'react-redux';
import {addtion, subtractions} from '../../redux/store/actions';

const Profile = () => {
  const data = useSelector(state => state.counter);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.root}>
      <Button title="Add" onPress={() => dispatch(addtion())} />
      <Text>{data}</Text>
      <Button title="Subtract" onPress={() => dispatch(subtractions())} />
    </SafeAreaView>
  );
};

export default Profile;
