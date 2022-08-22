import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { AntDesign } from '@expo/vector-icons'; 

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // screenOptions={{headerShown: false}}
        screenOptions={({route}) => ({
          tabBarIcon: ( {focused, size, color}) => {
            let iconName;
            if(route.name === 'ScreenA'){
              iconName = "star";
              size = focused ? 25 : 20;
              color: focused ? "#f0f" : "#555";
            }
            else if(route.name === 'ScreenB'){
              iconName = "shoppingcart";
              size = focused ? 25 : 20;
              color: focused ? "#f0f" : "#555";
            }
            return(
              <AntDesign name={iconName} size={size} color={color} />
            )
          }
        })}
        //-------------------------------------------
        // Tab navigation
        // tabBarOptions={{
        //   activeTinColor: '#f0f',
        //   inactiveTinactive: "#555",
        //   activeBackgroundColor: "#fff",
        //   inactiveBackgroundColor: "#999",
        //   showLabel: true,
        //   labelStyle: { fontSize: 14 },
        //   showIcon: true
        // }}

        //-------------------------------------------
        // Material Navigation
        // activeColor="#f0edf6"
        // inactiveColor="#3e2465"
        // barStyle={{backgroundColor: '#694fad'}}

      >
        <Tab.Screen name="ScreenA" component={ScreenA} />
        <Tab.Screen name="ScreenB" component={ScreenB} />
        {/* <Tab.Screen name="ScreenB" component={ScreenB} options={{tabBarBadge: 3}}/> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 0
  }
})