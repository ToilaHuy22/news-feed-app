/**
 * @format
 */

import { AppRegistry, LogBox } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import "intl";
import "intl/locale-data/jsonp/en";

if (__DEV__) {
	import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

LogBox.ignoreLogs(["Require cycle: node_modules/victory"]);
LogBox.ignoreLogs(["Require cycle: node_modules/rn-fetch-blob"]);
AppRegistry.registerComponent(appName, () => App);
