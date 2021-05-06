import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    viewInput: {
        width: 350,
        height: 70,
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'row',
        borderColor: '#080808',
        borderWidth: 0.6,
        alignItems: 'center',
        borderRadius: 10
    },
    textInput: {
        backgroundColor: '#fff',
        textAlign: 'center',
        height: 65
    },
    button: {
        width: 300,
        height: 52,
        alignItems: 'center',
        backgroundColor: '#ff6a83',
        borderRadius: 26,
        justifyContent: 'center',
        margin: 10
    }
});
