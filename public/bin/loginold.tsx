'use strict'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import {BsGithub} from 'react-icons/bs'
type Props = {}

const page = (props: Props) => {
  return (
    <div className='px-10  pt-16 h-full grid grid-flow-col  md:flex md:flex-row '>
        <div className='w-1/2 px-12'>
            <h1 className='text-4xl antialiased font-bold'>Welcom to Rflections</h1>
            <div className='pt-4'>
                <p className='text-gray-500 '>Please Login to use the platform</p>
            </div>
            <div className='mt-6'>
            <div className=''>
                    <p>Email</p>
                </div>
                <input type='text' placeholder='Enter Email' className='border-1 border-gray-300 rounded-2xl w-full p-2' />
            </div>
            <div className='mt-6 '>
                <div className=''>
                    <p>Password</p>
                </div>
                <input type='password' placeholder='Enter Password' className='border-1 border-gray-300 rounded-2xl w-full p-2' />
            </div>
            <div className='mt-10 '>
                
        <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
            </div>

            {/* login with Github */}
            <div className=''>
            <div className='mt-10 p-2 justify-center'>
                <button className='border-2 rounded p-2 w-full rounded-2xl flex items-center content-center rounded-2xl'><p className='text-4xl items-center'><BsGithub/></p>Github Login</button>
            </div>
                
                {/* login with google */}
            <div className=' p-2'>
                <button className=' border-2  rounded p-2 w-full rounded-2xl flex items-center '><p className='text-4xl'><FcGoogle/></p>Google Login</button>
            </div>
            </div>



            <div className='mt-6'>
                <p>Don't have an account? <a href='/register'>Register</a></p>
            </div>
        </div>
        <div className='w-1/2 border border-2'>
        <img src='https://wallpapercave.com/dwp2x/wp3979803.jpg' alt='gg' className='w-full h-full object-cover shadow shadow-orange-50	'  />
            
        </div>
    </div>
  )
}

export default page