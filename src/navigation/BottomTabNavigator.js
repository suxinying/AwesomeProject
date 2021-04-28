import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ThemeContext} from '../theme';
import {HOME_SCREEN} from './routes';
import {HomeScreen} from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <Tab.Navigator lazy tabBarOptions={theme.bottomBar}>
      <Tab.Screen name={HOME_SCREEN} component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
