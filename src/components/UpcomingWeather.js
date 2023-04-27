import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  View,
  StatusBar
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const DATA = [
  {
    dt: 1661878800,
    main: {
      temp_min: 296.2,
      temp_max: 296.31
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  },
  {
    dt: 1661882400,
    main: {
      temp_min: 292.84,
      temp_max: 294.94
    },
    weather: [
      {
        main: 'Sunny'
      }
    ]
  },
  {
    dt: 1662217200,
    main: {
      temp_min: 294.14,
      temp_max: 294.14
    },
    weather: [
      {
        main: 'Clouds'
      }
    ]
  }
]

const Item = (props) => {
  const { dt, min, max, condition } = props

  return (
    <View style={styles.item}>
      <Feather name={'sun'} color={'white'} size={30} />
      <Text style={styles.date}>{dt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => {
    return (
      <Item
        condition={item.weather[0].main}
        dt={item.dt}
        max={item.main.temp_max}
        min={item.main.temp_min}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'brown'
  },
  item: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'white'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  }
})

export default UpcomingWeather
