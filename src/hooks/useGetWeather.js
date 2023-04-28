import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  const [weather, setWeather] = useState([])

  // console.log('WEATHER')

  //get weather data
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      )
      const data = await response.json()
      setWeather(data)
      setLoading(false)
    } catch (err) {
      setErrorMsg('Could not fetch data')
    } finally {
      setLoading(false)
    }
  }

  //get user location
  // const getCurrentLocation = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync()
  //   if (status !== 'granted') {
  //     setErrorMsg('Permission to access location was denied')
  //     return
  //   }

  //   let location = await Location.getCurrentPositionAsync({})
  //   setLat(location.coords.latitude)
  //   setLon(location.coords.longitude)
  //   await fetchWeatherData()
  // }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setErrorMsg('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, lon])
  return [loading, errorMsg, weather]
}
