import React from 'react'
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar
} from 'react-native'
import IconText from '../components/IconText'
import moment from 'moment'

const City = ({ weatherData }) => {
  const {
    container,
    image,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles

  const { country, name, population, sunrise, sunset, timezone, id } =
    weatherData

  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../assets/city.jpg')} style={image}>
        <Text style={[cityText, cityName]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'white'}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />

          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
        </View>
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
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    color: 'white',
    fontSize: 25,
    marginLeft: 4.5,
    fontWeight: 'bold'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default City
