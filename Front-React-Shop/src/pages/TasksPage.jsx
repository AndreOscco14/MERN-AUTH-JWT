import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
// import { useTasks } from '../context/TasksContext';

function TasksPage() {
    // const { getTasks } = useTasks()
    // useEffect(() => {
    //   getTasks()
    // }, [])

    const {user} = useAuth()
    console.log("Usuario:", user);

      return (
        <div>TasksPage</div>
      )
    }

export default TasksPage