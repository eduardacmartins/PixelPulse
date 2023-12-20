import React from 'react';
import {DrawerItem, createDrawerNavigator} from "@react-navigation/drawer";
import Home from "../screens/home";
import Profile from "../screens/profile";
import {IAPPRoute} from "./RoutesType";
import { Button, useTheme, Image} from 'native-base';
import Menu from '../assets/MenuIcon.png';

const {Navigator, Screen} = createDrawerNavigator<IAPPRoute>()

function AppRoutes(){

    const theme = useTheme()
    
    return (
        <Navigator screenOptions={({navigation}) => {
            return{
                headerShown: true,
                drawerStyle: {
                    backgroundColor: theme.colors['gray']['700']
                },
                drawerLabelStyle: {
                    color: 'white'
                },
                drawerActiveTintColor: theme.colors['gray']['700'],
                headerTransparent: true,
                headerTitle: "",
                headerLeft: () => {
                    return(
                        <Button variant={'unstyled'} onPress={() => navigation.toggleDrawer()}>
                            <Image alt={"Menu Icon"} source={Menu}/>
                        </Button>
                    )
                }
            }
        }}>
            <Screen name={'Home'} component={Home}/>
            <Screen name={'Profile'} component={Profile}/>
        </Navigator>
    );
}

export default AppRoutes;
