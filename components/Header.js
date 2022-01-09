import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/logo.png")}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={styles.userAction}>
                <Feather name="align-right" size={27} color="white" />
                <Ionicons
                    name="ios-person-circle-sharp"
                    size={35}
                    color="white"
                />
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderColor: "#3268AB",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    image: { height: 26, width: 100 },
    userAction: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 70,
    },
});
