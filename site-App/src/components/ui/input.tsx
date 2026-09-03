import React from 'react'
import type { InputProps } from '../types/ui'


const Input = ({type='text',inputFocusColor, name, label, placeholder, value, onChange, marginTop=false}:InputProps) => {
    return (
        <div className={`${marginTop?"mt-4":""} px-1`}>
            <label 
                htmlFor={name} 
                className='text-gray-400 text-[15px] block mb-1.5'
            >
                {label}
            </label>
            <input 
                style={{
                    outlineColor:inputFocusColor?inputFocusColor: "#6366f1"
                }}
                className={`
                        border-[#eee] border rounded-[5px] p-2 text-gray-800
                        w-full focus:outline-2 focus:outline-solid
                        placeholder:text-gray-800 placeholder:text-[14px] placeholder:font-medium placeholder:italic
                    `}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                id={name}
                onChange={onChange}
            />
        </div>
    )
}
 
export default Input