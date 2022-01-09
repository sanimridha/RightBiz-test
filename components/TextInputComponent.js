import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const blue = "#174688";

const TextInputComponent = ({ props }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={{
                    fontSize: 16,
                    flex: 1,
                }}
                value={props?.value}
                onChangeText={props?.onChangeText}
                placeholder="Search"
                placeholderTextColor={blue}
            />
            <Entypo name="chevron-small-right" size={25} color={blue} />
        </View>
    );
};

export default TextInputComponent;

const styles = StyleSheet.create({
    container: {
        marginVertical: 25,
        height: 50,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        borderRadius: 25,
        alignItems: "center",
    },
});
