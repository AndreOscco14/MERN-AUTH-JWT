import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'



function RegisterPage() {

    const {register, handleSubmit, formState: {errors }} = useForm()

    const {signup, user, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        // Navigate -> dirige a la página
        if(isAuthenticated)  navigate('/tasks')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
            signup(values)
        });

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center mx-7'>
        <div className='dark:bg-neutral-900 max-w-md p-10 rounded-md border-2 dark:border-none shadow-2xl'>
        { registerErrors.map((error,i) => (
                <div className='bg-red-500 p-2 text-white' key={i}>
                    {error}
                </div>
        ))}
            <form onSubmit={ onSubmit}>
            <h1 className='text-2xl font-bold text-center mb-5 dark:text-white'>Register</h1>
                <input type='text' {...register("username", {required: true})}
                    className='w-full dark:bg-neutral-900 dark:text-white px-4 py-2 rounded-md my-2'
                    placeholder='Username'
                />
                {errors.username && <p className='text-red-500'>Username is required</p>}

                <input type='email' {...register("email", {required: true})}
                      className='w-full dark:bg-neutral-900 dark:text-white px-4 py-2 rounded-md my-2'
                      placeholder='Email'
                />
                {errors.email && <p className='text-red-500'>Email is required</p>}

                <input type='password' {...register("password", {required: true})}
                      className='w-full dark:bg-neutral-900 dark:text-white px-4 py-2 rounded-md my-2'
                      placeholder='password'  
                />
                {errors.password && <p className='text-red-500'>Password is required</p>}

                <button type='submit' className='my-3 border-2 text-black p-2 rounded-md hover:border-gray-500  dark:text-white dark:border-2 '>
                    Register
                </button>
            </form>
            <p className='flex gap-x-2 justify-between dark:text-white '>
              Already have an account? <Link to="/login" className='text-sky-500'>Login</Link>
            </p>
        </div>
        </div>
      );
    }

export default RegisterPage