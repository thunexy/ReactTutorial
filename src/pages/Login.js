import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Button, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from './../components/Sections/footer';
import Header from './../components/Sections/header';


const {width, height} = Dimensions.get("window");

class Login extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: <View style={{flex: 1, flexDirection: "row", justifyContent: "center"}}>
            <Image style={{width: 200}} resizeMode="contain" source={require('../assets/logo.png')}/></View>,
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.openDrawer()}><Icon color="#000" name="md-menu" size={30}
                                                                            style={{marginLeft: 24, marginRight: 24}}/></TouchableOpacity>
        ),
        headerRight: (
            <View color="#000" name="md-menu" size={30} style={{marginLeft: 24, marginRight: 24}}/>
        )
    });

    render() {


        return (
            <View style={styles.container}>
                <Header icon="md-lock" headerText="Log In" riderText="Login to send money and manage account"/>


                <TextInput style={styles.inputField} placeholder="Email Address"/>
                <TextInput style={styles.inputField} secureTextEntry={true} placeholder="Password"/>
                <TouchableOpacity style={{alignSelf: "flex-start"}}>
                    <Text style={styles.passcodeText}>Login with passcode</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate("Home")}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate("PasswordRecovery")}
                                  style={{alignSelf: "center", marginBottom: 12}}>
                    <Text style={styles.passcodeText}>Forgot Password?</Text>
                </TouchableOpacity>


                <View style={styles.rider}>
                    <Text style={styles.riderText}>Don't have an account? You can create one.</Text>
                </View>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => this.props.navigation.navigate("Signup")}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>


                <View style={styles.footer}>
                    <Footer/>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "flex-start"
    },
    footer: {
        position: "absolute",
        top: height - 100,
    },
    inputField: {
        width: "100%",
        height: 42,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 2,
        paddingLeft: 24,
        paddingRight: 24,
        fontSize: 16
    },
    passcodeText: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        fontSize: 16,
        color: "#49add3",
    },
    buttonContainer: {
        width: 240,
        backgroundColor: "#49add3",
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 4,
        justifyContent: "center",
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 24,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16
    }

});

export default Login;
