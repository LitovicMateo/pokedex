import React from 'react'

const Wrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="p-4 mx-auto pb-6 h-fit max-h-[600px] w-full rounded-lg shadow-lg shadow-[#759171] flex-col justify-ce items-center gap-6 inline-flex bg-gradient-to-br from-[#A5CD9E] to-[#9EC598]">
        {children}
    </div>
  )
}

export default Wrapper