import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';


function RegisterPage() {

    const {register, handleSubmit} = useForm()
    const {signup, user, isAuthenticated} = useAuth();
    console.log("USER REGISTER",user)
     const navigate = useNavigate()

    useEffect(() => {
        // Navigate -> dirige a la página
        if(isAuthenticated)  navigate('/tasks')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
            signup(values)
        });

    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            <form onSubmit={ onSubmit}>

                <input type='text' {...register("username", {required: true})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Username'
                />
                <input type='email' {...register("email", {required: true})}
                      className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                      placeholder='Email'
                />
                <input type='password' {...register("password", {required: true})}
                      className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                      placeholder='password'  
                />
                <button type='submit'>
                    Register
                </button>
            </form>
        </div>
      );
    }

export default RegisterPage