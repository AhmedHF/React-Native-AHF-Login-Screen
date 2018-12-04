import { createStackNavigator,createAppContainer } from "react-navigation";

import Login from '../src/screen/Login';
import Details from '../src/screen/Details';
import Home from '../src/screen/Home';

const RootNavigator = createStackNavigator(
    {
        login: {
            screen: Login,
            navigationOptions:{
                header:null,
            }
        }, home: {
            screen: Home
        }, details: {
            screen: Details
        },
    },
    {
        initialRouteName: "login",
    }
);

export default createAppContainer(RootNavigator);