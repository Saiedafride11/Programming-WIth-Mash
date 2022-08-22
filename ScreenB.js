import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScreenB({navigation}) {
      return (
            <View style={styles.body}>
              <Text style={styles.text}>ScreenB</Text>
              <Pressable
                onPress={() => navigation.navigate("ScreenA")}
                style={({pressed}) => ({backgroundColor: pressed ? "#ddd" : "#0fa"})}
                >
                <Text style={styles.text}>Go Back ScreenA</Text>
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