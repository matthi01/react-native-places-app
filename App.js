import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetai/PlaceDetai";
import configureStore from "./src/store/configureStore";

const store = configureStore();

//Register Screens
Navigation.registerComponent(
    "awesomeplaces.AuthScreen",
    () => AuthScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "awesomeplaces.SharePlaceScreen",
    () => SharePlaceScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "awesomeplaces.FindPlaceScreen",
    () => FindPlaceScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "awesomeplaces.PlaceDetailScreen",
    () => PlaceDetailScreen
);

//Start App (navigation)
Navigation.startSingleScreenApp({
    screen: {
        screen: "awesomeplaces.AuthScreen",
        title: "Login"
    }
});
