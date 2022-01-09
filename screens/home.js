import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import TextInputComponent from "../components/TextInputComponent";

const blue = "#174688";

const Home = () => {
    const TitleSection = () => (
        <LinearGradient
            colors={[blue, "#2464B9"]}
            start={{ x: 0.5, y: 0.9 }}
            end={{ x: 1, y: 1 }}
            style={styles.background}
        >
            <Header />
            <View style={{ paddingHorizontal: 20 }}>
                <>
                    <Text style={styles.firstTitle}>
                        UK's No.1 Business Marketplace
                    </Text>
                    <Text style={styles.secondTitle}>
                        Find your business opportunity with right
                        <Text style={{ fontWeight: "bold" }}>Biz.</Text>
                    </Text>
                    <TextInputComponent />
                </>
            </View>
        </LinearGradient>
    );

    return (
        <View>
            <TitleSection />
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.ScrollViewContaier}
                contentContainerStyle={{
                    alignItems: "center",
                }}
            >
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <Image
                        key={index}
                        source={require("../assets/chrishart.png")}
                        style={styles.brandImage}
                        resizeMode="contain"
                    />
                ))}
            </ScrollView>
            <View style={styles.bodySection}>
                <View style={styles.featuredBusiness}>
                    <Text style={{ fontSize: 18 }}>Featured Business</Text>
                    <View style={styles.viewAllTextWrapper}>
                        <Text style={styles.viewAllText}>View all</Text>
                    </View>
                </View>
                <View style={styles.TopTabSeparator}>
                    <View style={styles.topTabOption}>
                        <Text style={styles.toptabText}>Business</Text>
                    </View>
                    <View style={styles.topTabOption}>
                        <Text style={styles.toptabText}>Franchise</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    background: {
        left: 0,
        right: 0,
        top: 0,
    },
    topTabOption: {
        borderBottomColor: blue,
        borderBottomWidth: 1,
        alignItems: "center",
        paddingHorizontal: 10,
    },
    toptabText: {
        fontSize: 18,
    },
    TopTabSeparator: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    viewAllText: {
        fontSize: 14,
        color: "#F57600",
        paddingHorizontal: 2,
    },
    viewAllTextWrapper: {
        borderBottomColor: "#F57600",
        borderBottomWidth: 1,
        alignItems: "center",
    },
    featuredBusiness: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
    },
    bodySection: {
        paddingHorizontal: 20,
        height: 370,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundColor: "#FFFFFF",
    },
    brandImage: {
        width: 110,
        marginHorizontal: 15,
    },
    ScrollViewContaier: {
        height: 80,
        backgroundColor: "#F0F0F0",
    },
    firstTitle: {
        fontSize: 18,
        color: "white",
        paddingTop: 20,
    },
    secondTitle: {
        fontSize: 24,
        color: "white",
        paddingTop: 10,
        lineHeight: 35,
    },
});
