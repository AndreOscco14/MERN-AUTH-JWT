import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TasksContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from 'flowbite-react';

function TasksFormPage() {
  const {register, handleSubmit, setValue } = useForm()
  const { createTask, getTask, updateTask } = useTasks()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function loadTask() {
      if(params.id) {
        const task = await getTask(params.id)
        setValue('title', task.title)
        setValue('description', task.description)
      }
    }
    loadTask()    
  }, [])


  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data)
    } else {
      createTask(data)
    }
    navigate('/tasks')
  })

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
          <div className='border-2 dark:bg-neutral-900 max-w-md w-full p-10 rounded-xl shadow-2xl'>
      <form onSubmit={onSubmit}>
        <label htmlFor='title' className='dark:text-white'>Title:</label>
        <input 
          type="text" 
          placeholder='Title' 
          {...register("title")} 
          className='w-full dark:bg-zinc-700 dark:text-white px-4 py-2 rounded-md my-2' 
          autoFocus
        />
        <label htmlFor='description' className='dark:text-white'>Description:</label>
        <textarea 
         rows='3'
         placeholder='Description' 
         {...register("description")}
         className='w-full dark:bg-zinc-700 dark:text-white px-4 py-2 rounded-md my-2'>
         </textarea>
         {/* <label htmlFor='date' className='mr-3'>Date:</label>
         <input type='date'
         className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
         {...register('date')}>
         </input> */}
         <div className='text-right'>
          <button className='dark:bg-neutral-700 dark:text-white px-4 py-1 mt-4 rounded-lg border-2 dark:hover:bg-neutral-800'>Save</button>
         </div>
         {/* <div className="flex flex-wrap gap-2">
          <Button color="gray">Gray</Button>
          </div> */}

      </form>
    </div>
    </div>

  )
}

export default TasksFormPage