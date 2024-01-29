import React from 'react'

const Wrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full  rounded-lg mx-auto p-[8px] bg-gray-800 shadow-lg'>
        {children}
    </div>
  )
}

export default Wrapper