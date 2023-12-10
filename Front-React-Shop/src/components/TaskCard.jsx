// TaskCard.js
import { useTasks } from '../context/TasksContext';
import { Link } from 'react-router-dom';

function TaskCard({ task }) {
    const { deleteTask } = useTasks()
  return (
    <div className="w-full md:w-1/2 lg:w-1/5 p-2">
      <div className="dark:bg-gray-600 dark:text-white border rounded-xl p-4 h-56">
       <header className='flex justify-between'> 
        <h1 className="text-xl font-bold mb-2 truncate">{task.title}</h1>
        <div className='flex gap-x-2 items-center'>
           <Link to={`/tasks/${task._id}`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
            
           </Link>
           <button
            onClick={() => {
              deleteTask(task._id)
            }}
           >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
           </button>
        </div>
       </header>
        <p className="text-sm overflow-auto max-h-24">{task.description}</p>
        <footer className=''>
          <p className=''>{new Date(task.date).toLocaleString()}</p>
        </footer>
      </div>
    </div>
  );
}

export default TaskCard;