import React from 'react'

const Main = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="mx-auto md:px-[4em] max-w-[550px] w-[90%] flex flex-col justify-center items-center gap-4 pt-8">
        {children}
    </main>
    )
}

export default Main