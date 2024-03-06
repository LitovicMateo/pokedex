import { Suspense, useEffect, useState } from "react";
import Wrapper from "../components/ui/wrapper";
import PokemonAvatarHidden from "../components/pokemon-guess/PokemonAvatarHidden";
import Name from "../components/pokemon-guess/Name";
import HealthBar from "../components/pokemon-guess/HealthBar";
import { getUniqueChars } from "../lib/util/getUniqueChars";
import PokemonGuessIntro from "./PokemonGuessIntro";
import { useFetchPokemonList } from "../lib/hooks/usePokemonList";
import { useFetchPokemon } from "../lib/hooks/usePokemonDetails";
import { AnimatePresence, motion } from "framer-motion";
import { keydownValidator } from "../lib/util/keydownValidator";

const PokemonGuess = () => {
    const [gameStart, setGameStart] = useState<boolean>(false);
    const [gameStatus, setGameStatus] = useState<"Running" | "Finished">("Running");
    const [id, setId] = useState<number>(Math.floor(Math.random() * 700));
    const [guesses, setGuesses] = useState<string[]>([]);
    const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
    const [hiddenPokemon, setHiddenPokemon] = useState<string[]>([]);
    const [message, setMessage] = useState<string>("");
    const { pokemonList } = useFetchPokemonList();
    const { pokemon } = useFetchPokemon(id);
    const misses = guesses.length - correctGuesses.length;
    const missesArr = guesses.filter((l) => !correctGuesses.includes(l))

    const gameStartHandler = () => {
        if (!pokemonList) {
            setTimeout(() => {}, 1000);
        }
        const name = getUniqueChars(pokemonList[id - 1].name);
        setHiddenPokemon(name);
        setGameStart(true);
    };

    const restartGame = () => {
        const num = Math.floor(Math.random() * 700);
        const newPoke = pokemonList[num - 1];
        const name = getUniqueChars(newPoke.name);
        setHiddenPokemon(name);
        setId(num);
        setGuesses([]);
        setCorrectGuesses([]);
        setGameStatus("Running");
        setMessage("");
    };

    const keydownHandler = (e: KeyboardEvent) => {
        // Check if the game is over
        if (message !== "") {
            return;
        }

        const keyIsValid = keydownValidator(e)
        if (!keyIsValid) {
            return;
        }

        // check if the key is already in the arr
        const key = e.key;
        const isAlreadyPressed = guesses.includes(key);
        const correct = hiddenPokemon.includes(key);

        if (isAlreadyPressed) {
            return;
        } else {
            if (correct) {
                if (hiddenPokemon.length === correctGuesses.length + 1) {
                    setGameStatus("Finished");
                    setMessage("YOU WON!");
                }
                setCorrectGuesses((prev) => [...prev, key]);
            }

            if (misses === 5 && !correct) {
                setGameStatus("Finished");
                setMessage("YOU LOST!");
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
        return <PokemonGuessIntro startGame={gameStartHandler} />;
    }

    return (
        <>
            <HealthBar misses={missesArr} />
            <Suspense fallback={<p>Loading...</p>}>
                {pokemonList && (
                    <>
                        <Wrapper>
                            <PokemonAvatarHidden id={id} gameStatus={gameStatus} front={pokemonList[id - 1].img} />
                            <AnimatePresence>
                                {message !== "" && (
                                    <motion.p
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
                                        className="text-lg font-semibold w-[90%] text-justify mx-auto"
                                    >
                                        {pokemon!.description}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </Wrapper>

                        <Name name={pokemonList[id - 1].name} correct={correctGuesses} gameStatus={!!message} />
                    </>
                )}
                <button onClick={restartGame}>Re-roll Pokemon</button>
                <h2>{message}</h2>
            </Suspense>
        </>
    );
};

export default PokemonGuess;
