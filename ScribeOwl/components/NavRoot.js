import {createBottomTabNavigator,createAppContainer,createStackNavigator} from "react-navigation";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import LoginOrCreate from "./LoginOrCreate";
import SubmitJob from "./SubmitJob";


const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
});

const NavRoot = createStackNavigator({
    Login: {screen: LoginOrCreate, navigationOptions: {header:null}},
    Tabs : {screen: TabNavigator, navigationOptions: {header:null}},
    SubmitJob: {screen: SubmitJob},
});




export default createAppContainer(NavRoot);
