import React from 'react'
import Input from '../../ui/input'
import { NavLink } from 'react-router'
import Btn from '../../ui/btn'
const LeftSide = () => {
    return (
        <div className='py-7'> 
            <img 
                className='
                    border border-[#ccc] mb-7 mx-auto
                    rounded-full h-[200px] w-[200px]
                ' 
                src={`/logo.png`}
            />
            <div className='mb-10 text-center'>
                <h1 className='mb-2 font-semibold text-[30px] text-gray-800'>
                    welcome back in your place to productivity and effectiveness.
                </h1>
                <p className='text-gray-400'>
                    you don't have an account? 
                    <NavLink to={'/register'} className='ml-2 text-[#3b5a3a]'>register</NavLink>
                </p>
            </div>

            <Input
                inputFocusColor='#589e0e'
                name='email'
                label='your email'
                placeholder='Enter You  Email'

            />
            
            <Input
                inputFocusColor='#589e0e'

                name='password'
                label='your password'
                placeholder='Enter Your Password'
                marginTop={true}
            />

            <Btn
                text='login'
                btnClasses={`
                        mt-7 text-center w-full bg-black text-white p-2 
                        transition-all hover:shadow-[8px_8px_#3b5a3a]
                        hover:bg-gray-400 font-bold
                `}
            />
        </div>
    )
}

export default LeftSide