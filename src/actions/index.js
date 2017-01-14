import axios from 'axios';

import { FETCH_WEATHER } from './types';
import { OPEN_WEATHER_MAPS_KEY } from '../../keys';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_MAPS_KEY}`;

/*
Axios (as employed here) is basically a way to make AJAX calls without the entire jQuery library.

The request's returned value is a Promise, and that will be our action's payload.

ReduxPromise (imported in our src/index file) checks to see if our action.payload is a promise.
If so:
1. it stops the action until after the promise resolves,
2. it creates a new action, and
3. it sends it to reducers.
*/
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
