import { createStackNavigator, createAppContainer } from 'react-navigation';
import {LoginScreen} from "../views/LoginScreen";
import MainStack from "../navigators/Main"

const LoginStack = createStackNavigator(
    {
        Login: { screen: LoginScreen },
        Main: { screen: Main },
    },
);

export default LoginStack;