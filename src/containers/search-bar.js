import React, { Component } from 'react';

class SearchBar extends Component {
  // Initialize component state:
  constructor(props) {
    super(props);

    this.state = { term: '' };


    /*
    We need to bind the correct 'this' environment to our onInputChange function. We're declaring
    the context of 'this' as the SearchBar component:
    */
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);

    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <form className="input-group">
        {/* Make this a controlled component with a value & onChange's function */}
        <input
          placeholder="5-day city forecast"
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

export default SearchBar;
