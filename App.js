import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationTab from './NavigationTab'
import Navigation from './Navigation'
// import NavigationDrawer from './NavigationDrawer'

export default function App() {
  return (
    <View>
      {/* <Navigation/> */}
      <NavigationTab/>
      {/* <NavigationDrawer/> */}
    </View>
  )
}

const styles = StyleSheet.create({})