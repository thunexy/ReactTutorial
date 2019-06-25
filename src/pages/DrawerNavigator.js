import React, {Component} from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import {NavigationActions} from "react-navigation";


export default class DrawerNavigator extends Component{
    navigateToScreen = (routeName) => (()=>{
        const navigationAction = NavigationActions.navigate({routeName});
        this.props.navigation.dispatch(navigationAction);
    });

    render(){
        return (
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.navView}>
                    <Text style={[styles.navText, (this.props.activeItemKey === 'Home')? styles.activeLink: null]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.navigateToScreen('Estimate')} style={styles.navView}>
                    <Text style={[styles.navText, (this.props.activeItemKey === 'Estimate')? styles.activeLink: null]}>Estimate</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.navigateToScreen('Signup')} style={styles.navView}>
                    <Text style={[styles.navText, (this.props.activeItemKey === 'Signup')? styles.activeLink: null]}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.navigateToScreen('Login')} style={styles.navView}>
                    <Text style={[styles.navText, (this.props.activeItemKey === 'Login')? styles.activeLink: null]}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    navView: {
        height: 50, paddingHorizontal: 24, marginTop: 2, flexDirection: "row", alignItems: 'center', width: "100%"
    },
    navText: {
        fontSize: 20, color: "#000",
    },
    activeLink:{
        fontWeight: 'bold'
    }
});