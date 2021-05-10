/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Router from "./src/AppNavigation/Router";

import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

const App: () => Node = () => {
  
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
};



export default App;
