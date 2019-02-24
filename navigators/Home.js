import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {HomePage} from "../views/HomePage";
import {ProfilePage} from "../views/ProfilePage";



const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomePage },
    Profile: { screen: ProfilePage },
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;