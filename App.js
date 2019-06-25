import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems, SafeAreaView} from "react-navigation";
import {ScrollView, Text, View} from "react-native";
import {Home, Login, Signup, PasswordRecovery, Estimate, Melissa} from "./src/pages/index";
import DrawerNavigator from "./src/pages/DrawerNavigator";

export default class App extends Component {
    render() {
        return (
            <AppContainer/>
        )
    }

}




// const RootStack = createDrawerNavigator({
//         Login: {screen: createStackNavigator(DrawerStack, {initialRouteName: "Login"}), navigationOptions: {header: null}},
//         Signup: {screen: createStackNavigator(DrawerStack, {initialRouteName: "Signup"})},
//     },
//     {
//         initialRouteName: 'Login',
//     });



const DrawerStack = createDrawerNavigator({
    Home: {screen: Home},
    Estimate: {screen: createStackNavigator({Estimate})},
    Signup: {screen: createStackNavigator({Signup, Login, PasswordRecovery})},
    Login: {screen: createStackNavigator({Login, Signup, PasswordRecovery})},

}, {initialRouteName: "Home", contentComponent: DrawerNavigator});

const RootStack = createStackNavigator({
        DrawerStack: {screen: DrawerStack},
        PasswordRecovery: {screen: PasswordRecovery},
        Melissa: {screen: Melissa},
        },
    {
        initialRouteName: 'DrawerStack',
        headerMode: "none"
    });



const AppContainer = createAppContainer(RootStack);