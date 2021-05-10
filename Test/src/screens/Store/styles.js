import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  form: {
    width: 350,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ballNumber: {
    width: 35,
    height: 35,
    backgroundColor: '#6495ed',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textInput: {
    width: 220,
    height: 50,
  },
});
