import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Sorry, something went wrong</Text>
      <Feather name={'frown'} color={'white'} size={50} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
    textAlign: 'center'
  }
})

export default ErrorItem
