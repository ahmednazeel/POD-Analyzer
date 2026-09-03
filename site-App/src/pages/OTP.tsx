import React from 'react'
import Input from '../components/ui/input'
import Btn from '../components/ui/btn'
import NavigatorBtn from '../components/ui/navigatorBtn'

const OTP = () => {
    return (
        <div className='flex items-center justify-center h-[100vh] w-full relative'>
            <NavigatorBtn  />
            <div className='mx-auto  p-3 rounded-lg border border-[#eee]'>
                <img src="/logoSketelon.png" className='w-[150px] mb-9 rounded-full mx-auto border border-[#eee]' alt="" />

                <h1 className='text-3xl font-medium text-gray-800 text-center'>verification code</h1>
                <p className='text-gray-300  text-sm text-center mb-9'>we have sent the verification code to your email</p>

                <Input
                    name='otp'
                    placeholder='Please Paste Your Code Here'
                    marginTop={true}
                    label='Verification Code (OTP)'
                    inputFocusColor='#eee'
                />
                <Btn
                    text='Verify'
                    btnClasses='
                        mt-9 text-center w-full bg-black text-white p-2 
                        transition-all duration-700 hover:shadow-[8px_8px_#000]
                        hover:bg-gray-400 font-bold 
                    '
                />
            </div>
        </div>
    )
}

export default OTP