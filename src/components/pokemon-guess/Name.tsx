import React from 'react'
import Wrapper from '../ui/wrapper'

type NameProps = {
    name: string,
}

const Name: React.FC<NameProps> = ({ name }) => {
  return (
    <Wrapper>
        {name.split(" ").map((l, i) => <div className='text-xl' key={i}>{l}</div>)}
    </Wrapper>
  )
}

export default Name