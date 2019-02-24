import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {ProfilePage} from "../views/ProfilePage";



const MainStack = createMaterialBottomTabNavigator({
    Profile: { screen: ProfilePage },
    },
);

export default MainStack;