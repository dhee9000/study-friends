import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 8.0,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%",
    },
    logo: {
        height: 100.0,
        width: 100.0,
    },
    button:{
        width: "80%",
    },
    h1: {
        fontSize: 48.0,
        color: "#000",
        fontWeight: '900',
    },
    h2: {
        fontSize: 32.0,
        color: "#000",
        fontWeight: '300',
    },
    textInput: {
        margin: 16.0,
        backgroundColor: "#FAFAFA",
        fontSize: 16.0,
        width: "90%",
        borderRadius: 8.0,
        fontSize: 24.0,
        height: 48.0,
        elevation: 1.0,
        color: "#000000",
    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    normalText: {
        color: '#FF0000',
    },
})

export default styles;
