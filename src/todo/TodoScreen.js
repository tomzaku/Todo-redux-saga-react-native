/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import { connect } from 'react-redux'
import {addNewTask} from '../redux/todo/actions'
import {
  Button, FormLabel, FormInput
} from 'react-native-elements'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class TodoScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      dataTask:"",
      dataSource:ds.cloneWithRows(this.props.todo.listTodo),
    }
  }
  componentWillReceiveProps({todo}){
    this.setState({
      dataSource:ds.cloneWithRows(todo.listTodo)
    })
  }
  _onSubmitNewTask=()=>{
    // alert("Hello")
    // console.log(this.props.addNewTask,addNewTask)
    this.props.addNewTask(this.state.dataTask)
  }
  _onChangeNewTask=(data)=>{
    this.setState({
      dataTask:data
    })
  }
  _renderRow=(data)=>{
    return(
      <View>
        <Text>
          {data}
        </Text>
      </View>
    )
  }
  render() {
    return (
      <View
        style={styles.container}
        >
        <FormLabel>New Task</FormLabel>
        <FormInput
          onChangeText={this._onChangeNewTask}/>
        <Button
          raised
          backgroundColor={'#004ee7'}
          icon={{name: 'playlist-add'}}
          buttonStyle={{marginTop:6}}
          title='ADD NEW TASK'
          onPress={this._onSubmitNewTask}
        />
      {this.props.todo.isFetching?<Text>isFeteching</Text>:null}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,

  },
});

const mapStateToProps = (state)=>{
  return{
    todo:state.todo
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    addNewTask:(newTask)=>dispatch(addNewTask(newTask))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoScreen)
