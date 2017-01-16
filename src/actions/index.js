import axios from 'axios';

import { FETCH_WEATHER } from './types';
import { OPEN_WEATHER_MAPS_KEY } from '../../keys';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_MAPS_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
