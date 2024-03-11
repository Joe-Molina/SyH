'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from "next/navigation";

function RegisterPage() {
    const router = useRouter();

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit =  handleSubmit(async data => {


    if(data.password !== data.confirmPassword) {
        return alert('contraenas no coninciden')
    }

   
    const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
        

      if (res.ok) {
        router.push("/auth/login");
      }
    })

    console.log(errors)


  return (
    <div className='flex justify-center items-center h-[600px]'>
        <form action="" onSubmit={onSubmit} className='flex flex-col w-96 '>
            <h1 className='text-center'>Register:</h1>
            <label htmlFor="username" className='text-slate-500 mb-2 black text-sm'>username</label>
            <input type="text" className='p-3 black mb-2 bg-slate-200'
                {...register("username", {
                    required:{
                        value: true,
                        message: 'username es necesario'
                    }
                })}
            />

            {
                errors.username && (
                    <span className='p-2 bg-red-600 text-white rounded-md'>{errors.username.message}</span>
                )
            }

<label htmlFor="email" className='text-slate-500 mb-2 black text-sm'>email:</label>
            <input type="email" className='p-3 black mb-2 bg-slate-200'
                         {...register("email", {
                            required: {
                                value: true,
                                message: 'el email es necesario'
                            }
                        })}
            />

{
                errors.email && (
                    <span className='p-2 bg-red-600 text-white rounded-md'>{errors.email.message}</span>
                )
            }

<label htmlFor="contraseña" className='text-slate-500 mb-2 black text-sm'>contraseña:</label>
            <input type="password" className='p-3 black mb-2 bg-slate-200'
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'contraseña necesaria para registrar una cuenta'
                            }
                        })}
            />

{
                errors.password && (
                    <span className='p-2 bg-red-600 text-white rounded-md'>{errors.password.message}</span>
                )
            }

<label htmlFor="confirmar contraseña" className='text-slate-500 mb-2 black text-sm'>confirmar contraseña:</label>
            <input type="confirmPassword" className='p-3 black mb-2 bg-slate-200'
                        {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: 'debes confirmar tu contraseña'
                            }
                        })}
            />

{
                errors.confirmPassword && (
                    <span className='p-2 bg-red-600 text-white rounded-md'>{errors.confirmPassword.message}</span>
                )
            }

            <button
            className='w-full bg-blue-500 text-white rounded-sm p-3 mt-2'>register</button>

        </form>
    </div>
  )
}

export default RegisterPage