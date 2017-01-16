import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import _ from 'lodash';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  // renderWeather function is to render a single city, single row:
  renderWeather(cityData) {
    const id = shortid.generate();
    const name = cityData.city.name;
    /*
    We need to get the numeric value of a city's temp. The object we get back from OWM (our
    cityData object) looks something like this:

    {
      city: {name: 'San Francisco'},
      list: [
        {main: {temp: 260, humidity: 40, pressure: 55} },
        {main: {temp: 270, humidity: 50, pressure: 65} }
      ]
    }

    so we can get the temperatures with a map function that looks into this particular property
    (same with pressure & humidity):

    We map over the returned array from cityData.list.map() to convert it from K to F
    */
    const temps = _.map(cityData.list.map(weather => weather.main.temp),
      (temp) => temp = Math.round( temp * (9 / 5) - 459.67) );
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      /* add a key to the top-level element in a React list */
      <tr key={id}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="#FF101F" units="°F" /></td>
        <td><Chart data={pressures} color="#2B9720" units="hPa" /></td>
        <td><Chart data={humidities} color="#2C497F" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {/* this.props.weather is available b/c we've mapped the application's state to our
          component's props */}
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


/*
reducer-weather is in charge of this piece of state, and we've assigned it to the 'weather' key
in our combineReducers function, so we make if available to this component with mapStateToProps:
function mapStateToProps(state) {
  return { weather: state.weather };
}
Which is identical to the following:
*/
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
