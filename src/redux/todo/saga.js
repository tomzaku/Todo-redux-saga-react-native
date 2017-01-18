import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {delay} from 'redux-saga'

export function* addNewTask(action, do_smth1, do_smth2) {
  console.log(">>>From Saga");
  console.log(action);
  yield put({type:'ADD_TASK_PROCESS'})
  yield call(delay, 3000)
  yield put({type: 'ADD_TASK_SUCCESS',newTask:action.newTask})
}
export default function* watchNewTask() {
  yield takeEvery('ADD_TASK', addNewTask)
}
