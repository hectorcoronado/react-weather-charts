import { FETCH_WEATHER } from '../actions/types';

/*
As with React's component state, we cannot overwrite State in Redux, we must always create a new
version of our State every time we modify it. 

action.payload.data is the relevant data we need that gets sent back from OWM's API. We want users
to be able to search for more than one city (add on to State, not replace it with every city).
*/

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
  }
  return state;
}
