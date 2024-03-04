import { Suspense, useEffect, useState } from "react";
import Wrapper from "../components/ui/wrapper";
import PokemonAvatarHidden from "../components/pokemon-guess/pokemon-avatar-hidden";
import { useFetchPokemon } from "../lib/hooks/usePokemonDetails";
import Name from "../components/pokemon-guess/Name";
import HealthBar from "../components/pokemon-guess/HealthBar";
import { getUniqueChars } from "../lib/util/getUniqueChars";
import PokemonGuessIntro from "./PokemonGuessIntro";

const PokemonGuess = () => {
    const [gameStart, setGameStart] = useState<boolean>(false)
    const [id, setId] = useState<number>(Math.floor(Math.random() * 700));
    const [guesses, setGuesses] = useState<string[]>([]);
    const [correctGuesses, setCorrectGuesses] = useState<string[]>([])
    const [hiddenPokemon, setHiddenPokemon] = useState<string[]>([])
    const [message, setMessage] = useState<string>('')

    const { pokemon } = useFetchPokemon(id);
    console.log(message);
    

    const gameStartHandler = () => {
        if (!pokemon) {
            setTimeout(() => {}, 1000)
        }
        const name = getUniqueChars(pokemon!.name)
        setHiddenPokemon(name)
        setGameStart(true)
    }


    
    
    const misses = guesses.length - correctGuesses.length;

    console.log(correctGuesses);
    console.log(misses);
    
    


    console.log(pokemon);
    


    const keydownHandler = (e: KeyboardEvent) => {
        // check if the key is already in the arr
        const key = e.key;
        const isAlreadyPressed = guesses.includes(key);
        const correct = pokemon?.name.includes(key)
        console.log(isAlreadyPressed);
        console.log(key);
        
        

        if (isAlreadyPressed) {
            return
        } else {
            if (correct) {
                if (hiddenPokemon.length === correctGuesses.length + 1) {
                    setMessage("YOU WON!")
                }
                setCorrectGuesses(prev => [...prev, key])
            }
            setGuesses((prev) => [...prev, e.key]);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", keydownHandler);

        return () => {
            document.removeEventListener("keydown", keydownHandler);
        };
    }, [keydownHandler]);



    if (!gameStart) {
        return <PokemonGuessIntro startGame={gameStartHandler} />
    }


    return (
        <>
            <HealthBar misses={misses} />
            <Suspense fallback={<p>Loading...</p>}>
                {pokemon && (
                    <>
                        <Wrapper>
                            <PokemonAvatarHidden front={pokemon?.frontImg} />
                        </Wrapper>

                        <Name name={pokemon.name} />
                    </>
                )}
                <button
                    onClick={() => {
                        const num = Math.floor(Math.random() * 700);
                        setId(num);
                    }}
                >
                    Shuffle
                </button>
                <h2>{message}</h2>
            </Suspense>
        </>
    );
};

export default PokemonGuess;
