import { createContext, useState } from "react";
import { useFetchPokemon } from "../lib/hooks/usePokemonDetails";

type PokemonQuizContextType = {
    gameStatus: GameStatus;
    guesses: string[];
    correctGuesses: string[];
    wrongGuesses: string[];
    name: string;
};

type GameStatus = "Won" | "Loss" | "Ongoing";

export const PokemonQuizContext = createContext<PokemonQuizContextType>({
    gameStatus: "Ongoing",
    guesses: [],
    correctGuesses: [],
    wrongGuesses: [],
    name: '',
});

export const PokemonQuizContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [gameStatus, setGameStatus] = useState<GameStatus>("Ongoing");
  const [pokemonId, setPokemonId] = useState<number>(1)
  const [guesses, setGuesses] = useState<string[]>([]);
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState<string[]>([]);

  const { pokemon } = useFetchPokemon(pokemonId);



  const valueObj = {
    gameStatus,
    guesses,
    correctGuesses,
    wrongGuesses,
    name: pokemon ? pokemon.name : ''
  };

  return (
    <PokemonQuizContext.Provider value={valueObj}>
      {children}
    </PokemonQuizContext.Provider>
  );
};
