import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "../screens/login";
import Signup from "../screens/signup";
import { IAuthRoute } from "./RoutesType";

const {Navigator, Screen} = createNativeStackNavigator<IAuthRoute>()

function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false}}>

            <Screen name={'login'}
                    component={Login}

            />

            <Screen name={'signup'}
                    component={Signup}
            />

        </Navigator>

    );
}

export default AuthRoutes