

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { IoMdCloudy, IoMdSunny, IoMdRainy, IoMdSnow, IoMdThunderstorm, IoMdSearch } from 'react-icons/io'

export default function Weather() {
  const [weather, setWeather] = useState<any>(null)
  const [error, setError] = useState('')
  const [city, setCity] = useState('Mumbai')
  const [searchCity, setSearchCity] = useState('')

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
         `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.WEATHER}&q=${city}`
)
      setWeather(response.data)
      setError('')
    } catch (error) {
      setError('Failed to fetch weather data. Please try again.')
      setWeather(null)
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [city])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchCity.trim()) {
      setCity(searchCity)
      setSearchCity('')
    }
  }

  const renderWeatherIcon = (condition: string) => {
    const iconClass = "text-5xl"
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <IoMdSunny className={`${iconClass} text-yellow-400`} />
      case 'partly cloudy':
      case 'cloudy':
      case 'overcast':
        return <IoMdCloudy className={`${iconClass} text-gray-400`} />
      case 'rain':
      case 'light rain':
      case 'moderate rain':
        return <IoMdRainy className={`${iconClass} text-blue-400`} />
      case 'snow':
      case 'light snow':
      case 'moderate snow':
        return <IoMdSnow className={`${iconClass} text-white`} />
      case 'thunderstorm':
        return <IoMdThunderstorm className={`${iconClass} text-yellow-600`} />
      default:
        return <IoMdCloudy className={`${iconClass} text-gray-400`} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-violet-600">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              className="flex-1 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="Enter city"
            />
            <button type="submit" className="bg-violet-700 text-white p-2 rounded hover:bg-violet-800 transition-colors duration-200">
              <IoMdSearch className="text-xl" />
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>

        {error && <p className="text-red-500 p-4">{error}</p>}

        {weather && (
          <div className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">{weather.location.name}</h2>
                <p className="text-gray-400">{weather.location.region}, {weather.location.country}</p>
              </div>
              <div className="flex items-center">
                {renderWeatherIcon(weather.current.condition.text)}
                <p className="ml-2 text-5xl font-bold">{weather.current.temp_c}°C</p>
              </div>
            </div>
            
            <p className="mt-4 text-xl">{weather.current.condition.text}</p>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400">Feels Like</p>
                <p className="text-2xl">{weather.current.feelslike_c}°C</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400">Humidity</p>
                <p className="text-2xl">{weather.current.humidity}%</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400">Wind</p>
                <p className="text-2xl">{weather.current.wind_kph} km/h</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400">Pressure</p>
                <p className="text-2xl">{weather.current.pressure_mb} mb</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400">UV Index</p>
                <p className="text-2xl">{weather.current.uv}</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400">Visibility</p>
                <p className="text-2xl">{weather.current.vis_km} km</p>
              </div>
            </div>

            <div className="mt-6 text-center text-gray-400">
              <p>Last updated: {new Date(weather.current.last_updated).toLocaleString()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
