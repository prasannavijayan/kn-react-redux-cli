import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <div className="app">
        <h1>Hello World!!!</h1>
      </div>
    )
      
  }
}