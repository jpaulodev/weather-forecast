import React, { Component } from 'react';
import Header from './header/header';
import SearchBar from '../containers/search_bar/search_bar';
import WeatherList from '../containers/weather_list/weather_list';

import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    );
  }
}
