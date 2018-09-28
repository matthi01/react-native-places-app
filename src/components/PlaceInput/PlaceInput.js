import React, { Component } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

import DefaultInput from "../UI/DefaultInput/DefaultInput";

const placeInput = props => {
    return (
        <DefaultInput
            placeholder="Place Name"
            value={props.placeName}
            onChangeText={props.onChangeText}
        />
    );
};

export default placeInput;
