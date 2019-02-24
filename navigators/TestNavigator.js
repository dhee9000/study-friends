import { createStackNavigator, createAppContainer } from 'react-navigation';
import {LoginScreen} from "../views/LoginScreen";
import {ProfilePage} from "../views/ProfilePage";

const AppNavigator = createStackNavigator({
    Login: {
      screen: LoginScreen
    },
    Main: {
        screen: ProfilePage
    }
  });
  
  const AppContainer = createAppContainer(AppNavigator);

  export default AppContainer;