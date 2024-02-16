import React from 'react'

type PokemonTypeBadgeProps = {
    type: string
}

const PokemonTypeBadge: React.FC<PokemonTypeBadgeProps> = ({ type }) => {
  return (
    <div>
        {type}
    </div>
  )
}

export default PokemonTypeBadge