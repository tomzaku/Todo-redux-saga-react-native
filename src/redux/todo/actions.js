export function addNewTask(newTask) {
  return{
    type: "ADD_TASK",
    newTask,
  }
}
export function loadTask(){
  return{
    type: "LOAD_TASK",
  }
}
