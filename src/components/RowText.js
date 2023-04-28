import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RowText = (props) => {

    const {messageOne, messageTwo, containerStyles, messageOneStyles, messageTwoStyles} = props

    const {} = styles;

  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{},
    high:{},
    low: {}
})

export default RowText
