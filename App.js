import React, {Component} from "react";
import { SafeAreaView, StyleSheet, Image} from "react-native";

export default class App extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Image style={styles.img} source={require('./src/img/3.jpg')}/>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 350,
        height: 450,
        borderRadius: 250,
    }
});