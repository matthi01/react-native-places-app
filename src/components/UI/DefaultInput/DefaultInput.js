import React from "react";
import { TextInput, StyleSheet } from "react-native";

const defaultInput = props => (
    <TextInput
        underlineColorAndroid="transparent"
        {...props}
        // in case overriding styles are added into props make sure they are added to the stylesheet
        style={[styles.input, props.style]}
    />
);

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        marginTop: 5,
        marginBottom: 5
    }
});

export default defaultInput;
