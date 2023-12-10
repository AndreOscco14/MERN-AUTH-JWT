import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function LoginPage() {

  const {register, handleSubmit, formState: {errors}} = useForm()
  const {signin, errors: signinErrors, isAuthenticated} = useAuth()
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    signin(data)
  })

  useEffect(() => {
    if(isAuthenticated) navigate("/tasks")
  }, [isAuthenticated]);

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
       <div className='dark:bg-neutral-900 border-2 dark:border-none shadow-2xl dark:text-white max-w-md w-full p-10 rounded-md'>
       { signinErrors.map((error,i) => (
                <div className='bg-red-500 p-2 text-white my-2'  key={i}>
                    {error}
                </div>
        ))}
       <form onSubmit={ onSubmit}>
              <h1 className='text-2xl font-bold text-center mb-5'>Login</h1>
                <input type='email' {...register("email", {required: true})}
                      className='w-full dark:bg-neutral-900 dark:text-white px-4 py-2 rounded-md my-2'
                      placeholder='Email'
                />
                {errors.email && <p className='text-red-500'>Email is required</p>}
                <input type='password' {...register("password", {required: true})}
                      className='w-full dark:bg-neutral-900 dark:text-white  px-4 py-2 rounded-md my-2'
                      placeholder='password'  
                />
                {errors.password && <p className='text-red-500'>Password is required</p>}
                {/* <button type='submit' className='my-3 dark:bg-neutral-700 dark:text-white px-4 py-1 mt-4 rounded-lg border-2 dark:hover:bg-neutral-800'>
                    Login
                </button> */}
                <button type='submit' className='my-3 border-2 text-black p-2 rounded-md hover:border-gray-500  dark:text-white dark:border-2 '>
                    Login
                </button>
            </form>
            <p className='flex gap-x-2 justify-between'>
              Don't have an account? <Link to="/register" className='text-sky-500'>Sign up</Link>
            </p>
       </div>
    </div>
  )
}

export default LoginPage