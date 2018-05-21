import { Navigation } from "react-native-navigation";

const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: "awesomeplaces.FindPlaceScreen",
        label: "Find Place",
        title: "Find Place"
      },
      {
        screen: "awesomeplaces.SharePlaceScreen",
        label: "Share Place",
        title: "Share Place"
      }
    ]
  });
};

export default startTabs;
