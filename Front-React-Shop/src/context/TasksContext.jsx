import { createContext, useContext, useState } from "react";
import {
   createTaskRequest, 
   getTasksRequest, 
   deleteTasksRequest,
   getTaskRequest,
   updateTasksRequest
  } from "../api/tasks";

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

    const getTasks = async() => {
      try {
        const res = await getTasksRequest();
        console.log("RES",res.data);
        setTasks(res.data)
      } catch (error) {
        console.error("ERROR GetTasks",error)
      }
    }

    const createTask = async (task) => {
        try {
          const res = await createTaskRequest(task);
          console.log(res);
        } catch (error) {
          console.log("ERRORRR",error);
        }
    };

    const deleteTask = async (id) => {
      try {
        const res = await deleteTasksRequest(id)
        if(res.status === 204) setTasks(tasks.filter(task => task._id != id))
      } catch (error) {
        console.log("ERROR DELETE", error);
      }
    }

    const getTask = async(id) => {
      try {
        const res = await getTaskRequest(id)
        return res.data
      } catch (error) {
        console.log("ERROR GETtask", error);
      }
    }

    const updateTask = async (id, task) => {
      try {
        await updateTasksRequest(id, task)
      } catch (error) {
        console.log("Error", error);
      }
    }

    return(
        <TaskContext.Provider 
        value = {{ 
            tasks, 
            createTask,
            getTasks,
            deleteTask,
            getTask,
            updateTask
           }}
        >
             {children}
        </TaskContext.Provider>
    )
}