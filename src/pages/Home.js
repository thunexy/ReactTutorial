import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import Logo from "./../assets/logo.png";
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from './../components/Sections/footer';


class Home extends Component {


    render() {
        return (

            <View style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.screenLogo}/>
                </View>
                <View style={styles.rateContainer}>
                    <Text style={styles.rateText}>Today's Rate: $1 = 0.00 NGN</Text>
                </View>

                <View style={styles.actionButtonsContainer}>
                    <View style={styles.actionButtonView}>
                        <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>

                            <TouchableOpacity style={styles.actionButton} onPress={()=>{this.props.navigation.navigate("Estimate")}}>
                                <Icon color="#1f6a7a" size={30} name="md-calculator"/>
                                <Text>Estimate Fees</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton} onPress={()=>this.props.navigation.navigate("Login")}>
                                    <Icon color="#1f6a7a" size={30} name="md-lock"/>
                                    <Text>Log In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                            <TouchableOpacity style={styles.actionButton} onPress={()=>{Linking.openURL("http://www.tranzfar.com/faqs")}}>
                                <Icon color="#1f6a7a" size={30} name="md-information-circle"/>
                                <Text>FAQ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton} onPress={()=>{this.props.navigation.navigate("Signup")}}>
                                <Icon color="#1f6a7a" size={30} name="md-contact"/>
                                <Text>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Footer />

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
        justifyContent: "flex-start"
    },
    screenLogo: {
        width: 300,
        height: 55,
        resizeMode: "contain"
    },
    logoContainer: {
        flex: 3,
        justifyContent: "center"
    },
    rateContainer: {
        flex: 2,
        justifyContent: "center",
    },
    rateText: {
        color: "#000",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30,
        borderColor: "#4da652",
        borderWidth: 1.5,
        borderRadius: 20,
        fontSize: 20
    },
    actionButtonsContainer: {
        flex: 6,
        justifyContent: "flex-end"
    },

    actionButtonView: {
        flexDirection: "column",
        marginBottom: 20,
    },
    actionButton: {
        color: "#000",
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 15,
        width: "48%",
        paddingRight: 15,
        borderColor: "#4da652",
        borderWidth: 1.5,
        borderRadius: 20,
        fontSize: 16,
        marginBottom: 10,
        alignItems: "center"
    },
});

export default Home;
