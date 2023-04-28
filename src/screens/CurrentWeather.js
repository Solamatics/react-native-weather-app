import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

export default function CurrentWeather({ weatherData }) {
  const {
    wrapper,
    container,
    condition,
    feels,
    high,
    low,
    bottom,
    description,
    message,
    tempStyle
  } = styles

  const {
    main: { temp, feels_like, temp_min, temp_max },
    weather
  } = weatherData

  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={80}
          color="#fff"
        />
        <Text style={tempStyle}>{temp}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          containerStyles={condition}
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          messageOneStyles={high}
          messageTwoStyles={low}
        />
      </View>
      <RowText
        containerStyles={bottom}
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyle: {
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
