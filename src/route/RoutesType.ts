import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export type IAuthRoute = {
    login: undefined,
    signup: undefined,
}

export type TAuthRouteNavigatorProps = NativeStackNavigationProp<IAuthRoute>


import {DrawerNavigationProp} from "@react-navigation/drawer";

export type IAPPRoute = {
    Home: undefined,
    Profile: undefined
    signup: undefined
}

export type TAPPNavigatorProps = DrawerNavigationProp<IAPPRoute>