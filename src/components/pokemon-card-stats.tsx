import React from 'react'

type PokemonCardStatsProps = {

}

const PokemonCardStats: React.FC<PokemonCardStatsProps> = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
        <div className='flex gap-6'>
            <span>ATK</span>
            <div className='w-full bg-gray-800 p-1 h-20px rounded-full'>
                <div className='w-[70%] bg-yellow-500 h-full rounded-full'></div>
            </div>
        </div>
    </div>
  )
}

export default PokemonCardStats