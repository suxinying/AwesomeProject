import React,{useContext} from 'react';
import {ThemeContext} from "../theme";
import {createStackNavigator} from "@react-navigation/stack";
import {HOME_SCREEN, SEARCH_SCREEN} from "./routes";
import BottomTabNavigator from "./BottomTabNavigator";
import HeaderButtons from "../components/HeaderButtons";
import SearchScreen from "../screens/SearchScreen";
const Stack = createStackNavigator();


const StackNavigator = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <Stack.Navigator screenOptions={{
            headerBackTitleVisible: false,
        }}>
            <Stack.Screen name={HOME_SCREEN}
                          options={({navigation}) => ({
                              title: "Mall商城",
                              headerTitleStyle: {
                                  fontWeight: 'bold',
                                  alignSelf: 'center'
                              },
                              headerLeft: () => (
                                  <HeaderButtons>
                                      <HeaderButtons.Item
                                          title={"Main Menu"}
                                          iconName="menu"
                                          onPress={() => navigation.toggleDrawer()}
                                      />
                                  </HeaderButtons>
                              ),
                              headerRight: () => (
                                  <HeaderButtons>
                                      <HeaderButtons.Item
                                          iconName="search"
                                          onPress={() => navigation.navigate(SEARCH_SCREEN)}
                                      />
                                      <HeaderButtons.Item
                                          iconName="add-shopping-cart"
                                          onPress={() => navigation.navigate(SEARCH_SCREEN)}
                                      />
                                  </HeaderButtons>
                              ),
                          })}
                          component={BottomTabNavigator}
            ></Stack.Screen>
            <Stack.Screen name={SEARCH_SCREEN} component={SearchScreen} options={{header: () => null}} />
        </Stack.Navigator>
    )
}
export default StackNavigator;
