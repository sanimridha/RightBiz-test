import {
    Platform,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    View,
} from "react-native";
import Home from "./screens/Home";
const blue = "#174688";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Home />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        backgroundColor: blue,
    },
});
