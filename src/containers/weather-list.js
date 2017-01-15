import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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

    so we can get the temperatures with a map function that looks into this particular property:
    */
    const temps = cityData.list.map(weather => weather.main.temp);

    return (
      /* add a key to the top-level element in a React list */
      <tr key={id}>
        <td>{name}</td>
        <td>
          <Sparklines height={100} width={180} data={temps}>
            <SparklinesLine color="#003459" />
          </Sparklines>
        </td>
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
