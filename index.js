import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import React from 'react';
import configureStore from "./src/store/configureStore";

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent('Tranzfar', () => RNRedux);
