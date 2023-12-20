import { StatusBar } from 'expo-status-bar';
import {NativeBaseProvider} from "native-base";
import {Theme} from "./src/style/theme";
import {NavigationContainer} from "@react-navigation/native";
// import AuthRoutes from "./src/routes/AuthRoutes";
import {LinearGradient} from "expo-linear-gradient";
import AppRoutes from "./src/route/AppRoutes";
import Login from './src/screens/login';
import Signup from './src/screens/signup';


const config = {
    dependencies: {
        'linear-gradient': LinearGradient
    }
};

export default function App() {
    return (
    <NativeBaseProvider config={config} theme={Theme}>
    <StatusBar/>
        <NavigationContainer>
            {/*<AuthRoutes/>*/}
            <AppRoutes/>
            <Signup/>
            {/* <Login/> */}
        </NavigationContainer>
    </NativeBaseProvider>
);
}