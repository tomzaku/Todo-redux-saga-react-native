/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import configureStore from './redux/configureStore'

import {Provider} from 'react-redux';
import { connect } from 'react-redux'
import {addNewTask} from './redux/todo/saga'
import TodoScreen from './todo/TodoScreen'
import CheckBoxScreen from './checkbox/CheckBoxScreen'
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      store:configureStore(()=>this.setState({isLoading:false}))
    }
  }
  render() {
    return (
      <Provider
        store={this.state.store}
        >
        <TodoScreen/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
  },
});
