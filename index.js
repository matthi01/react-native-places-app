import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./src/store/configureStore";

const store = configureStore();

// registerComponent expects a component.. or a function returning jsx
const reactNativeRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("awesomeplaces", () => reactNativeRedux);
