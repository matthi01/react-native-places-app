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
    state = {
        viewMode:
            Dimensions.get("window").height > 500 ? "portrait" : "landscape",
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                }
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                }
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: "password"
                }
            }
        }
    };

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles);
    }

    updateStyles = dims => {
        this.setState({
            viewMode:
                Dimensions.get("window").height > 500 ? "portrait" : "landscape"
        });
    };

    loginHandler = () => {
        startMainTabs();
    };

    updateInputHandler = (key, value) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState,
                    [key]: {
                        ...prevState.controls[key],
                        value: value
                    }
                }
            };
        });
    };

    render() {
        let headerText = null;
        if (this.state.viewMode === "portrait") {
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
                            value={this.state.controls.email.value}
                            onChangeText={val =>
                                this.udateInputHandler("email", val)
                            }
                        />
                        <View
                            style={
                                this.state.viewMode === "portrait"
                                    ? styles.portraitPasswordContainer
                                    : styles.landscapePasswordContainer
                            }
                        >
                            <View
                                style={
                                    this.state.viewMode === "portrait"
                                        ? styles.portraitPasswordWrapper
                                        : styles.landscapePasswordWrapper
                                }
                            >
                                <DefaultInput
                                    placeholder="Password"
                                    style={styles.input}
                                    value={this.state.controls.password.value}
                                />
                            </View>
                            <View
                                style={
                                    this.state.viewMode === "portrait"
                                        ? styles.portraitPasswordWrapper
                                        : styles.landscapePasswordWrapper
                                }
                            >
                                <DefaultInput
                                    placeholder="Confirm Password"
                                    style={styles.input}
                                    value={
                                        this.state.controls.confirmPassword
                                            .value
                                    }
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
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }
});

export default AuthScreen;
