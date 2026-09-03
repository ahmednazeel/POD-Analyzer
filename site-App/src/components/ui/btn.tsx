import React from 'react'
import type { BtnProp } from '../types/ui'

const Btn = ({text, btnClasses} :BtnProp) => {
    return (
        <button className={btnClasses}>
            {text}
        </button>
    )
}

export default Btn