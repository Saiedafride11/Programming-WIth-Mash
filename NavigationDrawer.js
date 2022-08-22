import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenA from './screen/ScreenA';
import ScreenB from './screen/ScreenB';
import { AntDesign } from '@expo/vector-icons'; 

const Drawer = createDrawerNavigator();


export default function NavigationDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ 
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#0080ff"
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}

        initialRouteName='ScreenB'
        drawerPosition="right"
        drawerType="back"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor="#000000"
        drawerStyle={{
          backgroundColor: "#00f",
          width: 350,
        }}
      >
        <Drawer.Screen name="ScreenA" component={ScreenA} options={{title: "Screen A Title", drawerIcon: (focused) => (<AntDesign name="minuscircle" size={focused ? 24 : 20} color="black" />)}}/>
        {/* <Drawer.Screen name="ScreenA" component={ScreenA} options={{title: "Screen A Title", drawerIcon: (focused) => (<AntDesign name="minuscircle" size={focused ? 24 : 20} color="black" />)}} initialParams={{ id: 12}}/> */}
        <Drawer.Screen name="ScreenB" component={ScreenB} options={{title: "Screen B Title", drawerIcon: (focused) => (<AntDesign name="pluscircle" size={focused ? 24 : 20} color="black" />)}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
