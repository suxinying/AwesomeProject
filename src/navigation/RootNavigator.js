import {SafeAreaProvider} from 'react-native-safe-area-context';
import React, {useContext} from 'react';
import {ThemeContext} from '../theme';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from "./BottomTabNavigator";
import StackNavigator from "./StackNavigator";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="drawer"
                       component={StackNavigator}
                       options={{swipeEnabled: false}} />
    </Drawer.Navigator>
)
const RootNavigator = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <SafeAreaProvider>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={theme.appbar.statusBarColor}
            />
            <NavigationContainer theme={theme.navigation}>
                <Stack.Navigator
                    mode="modal"
                    headerMode="none"
                    screenOptions={{
                        cardStyle: {backgroundColor: 'transparent'},
                        cardOverlayEnabled: false,
                    }}>
                    <Stack.Screen name="modal" component={DrawerNavigator}/>
                    {/*<Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator}/>*/}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default RootNavigator;
