import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScreenA({navigation}) {
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