import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={80} color="#fff" />
        <Text style={styles.text}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.condition}>
          <Text style={styles.high}>High: 8</Text>
          <Text style={styles.low}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.description}>It's Sunny</Text>
        <Text style={styles.message}>It's Perfect T-shit weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#7CB9E8'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 35
  },
  feels: {
    color: '#fff',
    fontSize: 30
  },
  condition: {
    flexDirection: 'row'
  },
  high: {
    color: '#fff',
    fontSize: 30
  },
  low: {
    color: '#fff',
    fontSize: 30
  },
  bottom: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    marginBottom: 40
  },
  description: {
    fontSize: 30,
    color: '#fff'
  },
  message: {
    fontSize: 15,
    color: '#fff'
  }
})
