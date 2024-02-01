import React from 'react'
import Button from './ui/button';

type ChangePokemonProps = {
    id: number;
    changeId: (id: number) => void;
    nextPokemon?: string;
    prevPokemon?: string
}

const ChangePokemon: React.FC<ChangePokemonProps> = ({changeId, id, nextPokemon, prevPokemon}) => {

    const handleClick = (action: string) => {
        if (action === 'increment') {
            id++
            changeId(id)
        } else if (action === "decrement") {
            id--
            changeId(id)
        }

    }
  return (
    <div className='flex justify-around gap-8 w-full'>
        <Button action='decrement' label={prevPokemon || ''} onClick={handleClick} />
        <Button action='increment' label={nextPokemon || ''} onClick={handleClick} />
    </div>
  )
}

export default ChangePokemon