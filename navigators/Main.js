import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {HomePage} from "../views/HomePage";
import {StudyPage} from "../views/StudyPage";
import {ChatPage} from "../views/ChatPage";
import {Profile as ProfilePage} from "../views/Profile";



const MainStack = createMaterialBottomTabNavigator({
    Home: {screen: HomePage},
    Study: {screen: StudyPage},
    Chat: { screen: ChatPage },
    Profile: { screen: ProfilePage },
    },
);

export default MainStack;