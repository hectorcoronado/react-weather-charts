import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
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
