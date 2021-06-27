import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/configs/router';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    )
  }
}


export default App