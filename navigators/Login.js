import { createStackNavigator, createAppContainer } from 'react-navigation';
import {LoginScreen} from "../views/LoginScreen";
import MainStack from "../navigators/Main";

const AppNavigator = createStackNavigator({
    Login: {
      screen: LoginScreen
    },
    Main: {
        screen: MainStack,
        navigationOptions:  {
            title: 'Study Friends',
            headerLeft: null
        }
    }
  });
  
  const AppContainer = createAppContainer(AppNavigator);

  export default AppContainer;