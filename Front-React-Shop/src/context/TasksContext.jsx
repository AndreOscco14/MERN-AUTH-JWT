import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/tasks";

const TaskContext = createContext();


export const useTasks = () => {
    const context = useContext(TaskContext);

    if(!context){
        throw new Error("useTasks must be used within a TaskProvider");
    }
    return context;
}

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        const resp = await getTasksRequest()
        console.log(resp)
    }

    const createTask = async (task) => {
        try {
          const res = await createTaskRequest(task);
          console.log(res);
        } catch (error) {
          console.log("ERRORRR",error);
        }
      };
    //   3:47:17

    return(
        <TaskContext.Provider value=
        {{ tasks, 
           createTask,
           getTasks
           }}>
             {children}
        </TaskContext.Provider>
    )
}