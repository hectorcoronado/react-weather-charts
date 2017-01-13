import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  // Initialize component state:
  constructor(props) {
    super(props);

    this.state = { term: '' };

    /*
    If a callback in our component makes reference to 'this', it's likely necessary to bind it.

    We need to bind the correct 'this' environment to our onInputChange function. We're declaring
    the context of 'this' as the SearchBar component:
    */
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Use ActionCreator made available from mapDispatchToProps:
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        {/* Make this a controlled component with a value & onChange's function */}
        <input
          placeholder="Get a city's 5-day forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // returns action creators and makes them available to our component as:
  // this.props.someActionCreator
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
