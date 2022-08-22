import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function ScreenA({navigation}) {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>ScreenA</Text>
      <Pressable 
        onPress={() => navigation.navigate("ScreenB")}
        style={({pressed}) => ({backgroundColor: pressed ? "#ddd" : "#0fa"})}
      >
          <Text style={styles.text}>Go to ScreenB</Text>
      </Pressable>
    </View>
  );
}
function ScreenB({navigation}) {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>ScreenB</Text>
      <Pressable
        // onPress={() => navigation.navigate("ScreenA")}
        // onPress={() => navigation.goBack()}
        onPress={() => navigation.replace("ScreenA")}
        // onPress={() => navigation.openDrawer()}
        // onPress={() => navigation.closeDrawer()}
        // onPress={() => navigation.toggleDrawer()}
        // onPress={() => navigation.setParams({ itemId: 14})}
        style={({pressed}) => ({backgroundColor: pressed ? "#ddd" : "#0fa"})}
        >
        <Text style={styles.text}>Go Back ScreenA</Text>
      </Pressable>
    </View>
  );
}

export default function Navigation() {
  return (
    //--------------------------------------------------------
    //screenOptions={{headerShown: false}}
    //screenOptions={{header: () => null}}
    //--------------------------------------------------------
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="ScreenA" component={ScreenA} />
    //     <Stack.Screen name="ScreenB" component={ScreenB} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //--------------------------------------------------------
    //options={{header: () => null}}
    //--------------------------------------------------------
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA} options={{header: () => null}}/>
        <Stack.Screen name="ScreenB" component={ScreenB} options={{header: () => null}}/>
      </Stack.Navigator>
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