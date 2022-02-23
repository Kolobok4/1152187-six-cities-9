import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting: {
  RENT_COUNT: number,
  isLoggedIn: boolean,
  isFavorites: boolean
} = {
  RENT_COUNT: 10,
  isLoggedIn: false,
  isFavorites: true,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentCount = {Setting.RENT_COUNT}
      isLoggedIn = {Setting.isLoggedIn}
      isFavorites = {Setting.isFavorites}
    />
  </React.StrictMode>,
  document.getElementById('root'));
