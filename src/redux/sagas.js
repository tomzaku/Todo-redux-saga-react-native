import watchTodo from './todo/saga'
export default function* rootSaga(){
    yield [
      watchTodo(),
    ]
}
