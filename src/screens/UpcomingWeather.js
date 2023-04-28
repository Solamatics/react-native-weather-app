import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

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

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        condition={item?.weather[0]?.main}
        dt={item.dt}
        max={item.main.temp_max}
        min={item.main.temp_min}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/upcoming-weather.jpg')}
        style={styles.image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  image: {
    flex: 1
  },
  text: {
    color: 'white'
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20
  }
})

export default UpcomingWeather
