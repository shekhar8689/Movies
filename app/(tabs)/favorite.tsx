import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const favorite = () => {
  return (
    <View style={styles.container}>
      <Text>favorite</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default favorite