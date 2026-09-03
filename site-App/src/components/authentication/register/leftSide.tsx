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
                    let's start to poos  in your place to productivity and desicion making.
                </h1>
                <p className='text-gray-400'>
                    you have an account? 
                    <NavLink to={'/login'} className='ml-2 text-[#d64a2d]'>login</NavLink>
                </p>
            </div>

            <Input
                inputFocusColor='#d64a2d'
                name='name'
                label='your name'
                placeholder='Enter You  name'

            />
            <Input
                inputFocusColor='#d64a2d'
                marginTop={true}
                name='email'
                label='your email'
                placeholder='Enter You  Email'

            />
            
            <Input
                inputFocusColor='#d64a2d'
                name='password'
                label='your password'
                placeholder='Enter Your Password'
                marginTop={true}
            />

            <Btn
                text='register'
                btnClasses={`
                    mt-7 text-center w-full bg-black text-white p-2 
                    transition-all hover:shadow-[8px_8px_#d64a2d]
                    hover:bg-gray-400 font-bold
                `}
            />
        </div>
    )
}

export default LeftSide