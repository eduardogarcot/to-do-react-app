import mocks from "utils/mocks";

const getTasks = () => {
  const tasks = mocks.TASKS;
  const tasksCards = {
    TO_DO : [],
    IN_PROGRESS : [],
    DONE: [],
  };
  tasks.forEach((task)=>{
    if(tasksCards[task.status]) tasksCards[task.status].push(task);
  })
  return tasksCards;
}


const exportCollection = {
  getTasks,

}




export default exportCollection;