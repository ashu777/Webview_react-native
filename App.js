/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/ashu777'}}
        style={{marginTop: 20}}
      />
    );
  }
}