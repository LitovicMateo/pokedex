import React from 'react'

type PokemonGuessIntroProps = {
    startGame: () => void;
}

const PokemonGuessIntro: React.FC<PokemonGuessIntroProps> = ({startGame}) => {
  return (
    <div>
        <h1>RULES</h1>
        <ol>
            <li>1. ...</li>
        </ol>
        <button onClick={() => startGame()}>Start Game</button>
    </div>
  )
}

export default PokemonGuessIntro