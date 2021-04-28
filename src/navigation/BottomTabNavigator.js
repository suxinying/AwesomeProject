import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ThemeContext} from '../theme';
import {Category_SCREEN, HOME_SCREEN, MY_SCREEN, TOPIC_SCREEN} from './routes';
import {HomeScreen} from '../screens';
import Icon from "../components/Icon";
import CategoryScreen from "../screens/CategoryScreen";
import MyScreen from "../screens/MyScreen";
import TopicScreen from "../screens/TopicScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <Tab.Navigator lazy tabBarOptions={theme.bottomBar}>
            <Tab.Screen
                name={HOME_SCREEN}
                component={HomeScreen}
                options={{
                    tabBarLabel: "主页",
                    tabBarIcon: ({color, focused}) => (
                        <Icon type="ionicon"
                              name={focused ? 'home' : 'home-outline'}
                              color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={Category_SCREEN}
                component={CategoryScreen}
                options={{
                    tabBarLabel: "分类",
                    tabBarIcon: ({color, focused}) => (
                        <Icon
                            type="antdesign"
                            name={focused ? 'appstore1' : 'appstore-o'}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={TOPIC_SCREEN}
                component={TopicScreen}
                options={{
                    tabBarLabel: "专题",
                    tabBarIcon: ({color, focused}) => (
                        <Icon
                            type="feather"
                            name={focused ? 'cast' : 'cast'}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={MY_SCREEN}
                component={MyScreen}
                options={{
                    tabBarLabel: "我的",
                    tabBarIcon: ({color, focused}) => (
                        <Icon
                            type="FontAwesome"
                            name={focused ? 'user' : 'user-o'}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
