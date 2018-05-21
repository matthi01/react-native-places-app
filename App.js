import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";

//Register Screens
Navigation.registerComponent("awesomeplaces.AuthScreen", () => AuthScreen);
Navigation.registerComponent(
  "awesomeplaces.SharePlaceScreen",
  () => SharePlaceScreen
);
Navigation.registerComponent(
  "awesomeplaces.FindPlaceScreen",
  () => FindPlaceScreen
);

//Start App (navigation)
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesomeplaces.AuthScreen",
    title: "Login"
  }
});
