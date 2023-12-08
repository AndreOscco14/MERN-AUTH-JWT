import { useEffect } from 'react'
import { useTasks } from '../context/TasksContext';
import TaskCard from '../components/TaskCard';

function TasksPage() {
    const { getTasks, tasks } = useTasks()

    useEffect(() => {
      getTasks()
    }, [])

    if(tasks.length === 0) return (<h1>No Tasks</h1>)

    return (
    //   <div key={task._id}>
    //   <h1>{task.title}</h1>
    //   <h1>{task.description}</h1>
    // </div>

      <div className='flex flex-wrap mx-4 bg-gray-400 p-5 rounded-xl'>
        {
          tasks.map((task) => (
            <TaskCard 
              task={task} 
              key={task._id}
            />
          ))
        }
      </div>
    )
    }

export default TasksPage;