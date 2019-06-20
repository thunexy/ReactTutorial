import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import {HomeScreen, OtherScreen} from "./src/pages/index";
export default class App extends Component {

    goToPage = () => {

        this.props.navigation.navigate("Other");
    };



    render() {
        return <AppContainer />;
    }

}
const RootStack = createStackNavigator({
    Home: {screen: HomeScreen, navigationOptions: {header: null}},
    Other: {screen: OtherScreen},
},
    {
        initialRouteName: 'Home',
    });

const AppContainer = createAppContainer(RootStack);