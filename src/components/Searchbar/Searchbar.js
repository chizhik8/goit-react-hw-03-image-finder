import React, { Component } from 'react'
import '../../index.css'
// import PropTypes from 'prop-types'

export class Searchbar extends Component {
  // static propTypes = {}

  state = { query: ''}
  
  handleChange = e => { 
    this.setState({ query: e.target.value })
    
  }

  handleSubmit = e => { 
    e.preventDefault();
    this.props.onSubmit(this.state.query)
  }

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            value={this.state.query}
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }
}

export default Searchbar