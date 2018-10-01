import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    ImageBackground,
    Dimensions
} from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import backgroundImage from "../../assets/background.jpg";

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    };

    render() {
        let headerText = null;
        if (Dimensions.get("window").height > 500) {
            headerText = (
                <MainText>
                    <HeadingText>Please Log In</HeadingText>
                </MainText>
            );
        }

        return (
            <ImageBackground
                source={backgroundImage}
                style={styles.backgroundImage}
            >
                <View style={styles.container}>
                    {headerText}
                    <ButtonWithBackground color="#29aaf4">
                        Switch to Login
                    </ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput
                            placeholder="Email Address"
                            style={styles.input}
                        />
                        <View style={styles.passwordContainer}>
                            <View style={styles.passwordWrapper}>
                                <DefaultInput
                                    placeholder="Password"
                                    style={styles.input}
                                />
                            </View>
                            <View style={styles.passwordWrapper}>
                                <DefaultInput
                                    placeholder="Confirm Password"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                    </View>
                    <ButtonWithBackground
                        color="#29aaf4"
                        onPress={this.loginHandler}
                    >
                        Submit
                    </ButtonWithBackground>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    passwordContainer: {
        flexDirection: Dimensions.get("window").height > 500 ? "column" : "row",
        justifyContent: "space-between"
    },
    passwordWrapper: {
        width: Dimensions.get("window").height > 500 ? "100%" : "45%"
    }
});

export default AuthScreen;
