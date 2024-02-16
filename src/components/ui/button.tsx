import React from 'react'
import { capitalizeString } from '../../lib/util/capitalizeString'

type ButtonProps = {
    label: string;
    action: string;
    onClick: (action: string) => void
}

const Button: React.FC<ButtonProps> = ({action, label, onClick}) => {
    
    const handleClick = () => {
        onClick(action)
    }
  return (
    <button onClick={handleClick} className='w-[100%] h-[60px] text-center bg-[#A1C79A] shadow-md shadow-[#759171] text-gray-800 font font-extrabold text-xl py-1 rounded-md'>{capitalizeString(label)}</button>
    )
}

export default Button