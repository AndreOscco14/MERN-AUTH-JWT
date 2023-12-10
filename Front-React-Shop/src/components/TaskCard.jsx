// TaskCard.js
import { useTasks } from '../context/TasksContext';
import { Link } from 'react-router-dom';
import { Button, Card } from 'flowbite-react';

function TaskCard({ task }) {
    const { deleteTask } = useTasks()
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-2 " >
      <div className=" border-2 border-gray-400 rounded-md p-4 ">
       <header className='flex justify-between h-11'> 
        <h5 className="text-2xl font-bold mb-2 tracking-tight dark:text-white">{task.title} </h5>
        <div className='flex gap-x-2 items-center'>
           <Link to={`/tasks/${task._id}`} className='dark:text-white '>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
           </Link>
           <button
            onClick={() => {
              deleteTask(task._id)
            }}
            className='dark:text-white '
           >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
           </button>
        </div>
       </header>

        <div className="font-normal dark:text-gray-300 h-40 overflow-auto">
          <p className="">{task.description}</p>
        </div>

 
      </div>

      <footer className='h-20 overflow-auto dark:text-white'>
        <div className='text-right'> 
          <p className=''>{new Date(task.date).toLocaleString()}</p>
        </div>
      </footer>
    </div>


    // <Card className="w-full md:w-1/2 lg:w-1/4 p-2 dark:bg-zinc-800 m-1">
    //   <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //     Noteworthy technology acquisitions 2021
    //   </h5>
    //   <p className="font-normal text-gray-700 h-40 dark:text-gray-400 overflow-auto">
    //     Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    //     Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    //     Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    //     Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    //     Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    //     Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    //   </p>
    //   <Button>
    //     Read more
    //     <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //       <path
    //         fillRule="evenodd"
    //         d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   </Button>
    // </Card>
  );
}

export default TaskCard;
