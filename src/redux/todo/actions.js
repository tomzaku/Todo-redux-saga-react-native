export function addNewTask(newTask) {
  return{
    type: "ADD_TASK",
    newTask,
  }
}
