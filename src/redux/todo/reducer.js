import initialState from './initialState'

const reducer=(state=initialState,action)=>{
  switch(action.type){
    case 'ADD_TASK_SUCCESSED':
      return {
        ...state,
        listTodo:[...state.listTodo,action.newTask],
        isFetching:false
      }
    case 'IS_FETCHING':
      return {
        ...state,
        isFetching:true
      }
    case 'LOAD_SUCCESSED':
      return{
        ...state,
        listTodo:action.listTodo.reverse(),
        isFetching:false,
      }
    case 'LOAD_FAIL':
      return{
        ...state,
        message:action.message
      }
    default:
      return state;
  }
}
export default reducer
