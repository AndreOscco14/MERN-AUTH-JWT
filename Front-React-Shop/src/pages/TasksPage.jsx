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

      <div className='flex flex-wrap mx-4 dark:bg-neutral-900 p-5 rounded-xl'>
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