import bgClearDay from '../assets/img/bg-clear-day.png'
import bgClearNight from '../assets/img/bg-clear-night.png'
import bgCloudyDay from '../assets/img/bg-cloudy-day.png'
import bgCloudyNight from '../assets/img/bg-cloudy-night.png'
import bgRainDay from '../assets/img/bg-rain-day.png'
import bgRainNight from '../assets/img/bg-rain-night.png'
import bgSnowDay from '../assets/img/bg-snow-day.png'
import bgSnowNight from '../assets/img/bg-snow-night.png'
import iconClearDay from '../assets/weather-icons/clear-day.png'
import iconClearNight from '../assets/weather-icons/clear-night.png'
import iconCloudyDay from '../assets/weather-icons/cloudy-day.png'
import iconCloudyNight from '../assets/weather-icons/cloudy-night.png'
import iconRainDay from '../assets/weather-icons/rain-moment-day.png'
import iconSnowDay from '../assets/weather-icons/snow-day.png'
import iconSnowNight from '../assets/weather-icons/snow-night.png'

export const weatherIcons = {
  Clouds: {
    name: 'Nuvens',
    bg_day: bgCloudyDay,
    bg_night: bgCloudyNight,
    icon_day: iconCloudyDay,
    icon_night: iconCloudyNight,
  },
  Rain: {
    name: 'Chuva',
    bg_day: bgRainDay,
    bg_night: bgRainNight,
    icon_day: iconRainDay,
    icon_night: iconRainDay,
  },
  Clear: {
    name: 'Limpo',
    bg_day: bgClearDay,
    bg_night: bgClearNight,
    icon_day: iconClearDay,
    icon_night: iconClearNight,
  },
  Snow: {
    name: 'Neve',
    bg_day: bgSnowDay,
    bg_night: bgSnowNight,
    icon_day: iconSnowDay,
    icon_night: iconSnowNight,
  },
}

export type WeatherIconsKeysProps = keyof typeof weatherIcons
