import initialState from './initialState'

const reducer=(state=initialState,action)=>{
  switch(action.type){
    case 'ADD_TASK_SUCCESS':
      console.log(">>>>ADD_TASK reducer",action);
      return {
        ...state,
        listTodo:[...state.listTodo,action.newTask],
        isFetching:false
      }
    case 'ADD_TASK_PROCESS':
      return {
        ...state,
        isFetching:true
      }
    default:
      return state;
  }
}
export default reducer
