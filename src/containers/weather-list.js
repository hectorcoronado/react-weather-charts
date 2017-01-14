import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const id = shortid.generate();

    return (
      /* add a key to the top-level element in a React list */
      <tr key={id}>
        <td>{name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
