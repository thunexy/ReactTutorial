import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Logo from "./../assets/logo.png";
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from './../components/Sections/footer';


class Melissa extends Component {


    render() {
        return (

            <View style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.screenLogo}/>
                </View>

                <View style={styles.logoContainer}>
                    <Text style={{fontSize: 18}}>Melissa Plugin here</Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
        alignItems: 'center',
        justifyContent: "center"
    },
});

export default Melissa;
