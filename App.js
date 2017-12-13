import React, { Component } from 'react';
import setupApp from './setupApp';
import { AppNavigationComponent } from './Navigation';

setupApp();

export default class App extends Component {
  render() {
    return (
      <AppNavigationComponent />
    );
  }
}
