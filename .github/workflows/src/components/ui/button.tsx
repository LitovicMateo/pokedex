import React from 'react'
import { capitalizeString } from '../../api/helpers';

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
    <button onClick={handleClick} className='w-[40%] text-center bg-gray-800 text-gray-50 font font-semibold text-lg py-1 rounded-md'>{capitalizeString(label)}</button>
    )
}

export default Button