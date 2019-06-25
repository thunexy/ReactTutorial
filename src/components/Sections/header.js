import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const header = (props) => {
    return (
        <View style={{width: "100%"}}>
            <View style={styles.pageHeader}>
                <View style={styles.pageHeaderRow}>
                    <Icon size={30} style={styles.pageHeaderIcon} color="#1f6a7a" name={props.icon}/>
                    <Text style={styles.pageHeaderText}>{props.headerText}</Text>
                </View>
            </View>

            <View style={styles.rider}>
                <View style={{flexDirection: "row"}}><Text
                    style={styles.riderText}>{props.riderText}</Text>{props.extras}</View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    pageHeader: {
        height: 42,
        backgroundColor: "#e5e5e5",
        width: "100%",
    },
    pageHeaderRow: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center"
    },
    pageHeaderIcon: {
        marginLeft: 25,
        marginRight: 30
    },
    pageHeaderText: {
        color: "#000",
        fontSize: 21
    },
    rider: {
        backgroundColor: "#e5e5e5",
        width: "100%",
        marginTop: 2,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 10,
    },
    riderText: {
        color: "#000",
        fontSize: 16
    },
});

export default header;