import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";

//Register Screens
Navigation.registerComponent("awesomeplaces.AuthScreen", () => AuthScreen);

//Start App (navigation)
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesomeplaces.AuthScreen",
    title: "Login"
  }
});
