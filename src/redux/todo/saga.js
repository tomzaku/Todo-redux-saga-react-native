import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {delay} from 'redux-saga'
import axios from 'axios'
export function* addNewTask(action) {
  try{
    yield put({type:'IS_FETCHING'})
    const response = yield call(axios.post,'http://jsonplaceholder.typicode.com/todos/',{
      userId:7,
      title:action.newTask,
      completed:false,
    })
    yield put({type: 'ADD_TASK_SUCCESSED',newTask:action.newTask})
  }catch(err){
    yield put({type:'LOAD_FAIL'},message:err.message)
  }
}
export function* loadTask(action){
  console.log(">>>Load Task");
  try{
    yield put({type:'IS_FETCHING'})
    const response = yield call(axios.get,'http://jsonplaceholder.typicode.com/todos/')
    yield put({type:'LOAD_SUCCESSED',listTodo:response.data})
  }catch(err){
    yield put({type:'LOAD_FAIL'},message:err.message)
  }

}
export default function* watchNewTask() {
  yield [takeEvery('ADD_TASK', addNewTask),loadTask('LOAD_TASK',loadTask)]
}
