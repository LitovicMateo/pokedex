import React, { useState } from "react";
import { useFetchPokemon } from "../lib/hooks/usePokemonDetails";
import { capitalizeString } from "../lib/util/capitalizeString";
import Question from "../components/pokemon-quiz/Question";
import QuizImages from "../components/pokemon-quiz/QuizImages";
import Wrapper from "../components/ui/wrapper";

const PokemonQuiz: React.FC = () => {
    const [gameMessage, setGameMessage] = useState<string>("");
    const [pokemonIds, setPokemonIds] = useState<[number, number]>([
        Math.floor(Math.random() * 700),
        Math.floor(Math.random() * 700),
    ]);
    const [statIndex, setStatIndex] = useState<number>(Math.floor(Math.random() * 6));
    const [explanation, setExplanation] = useState<string>("");

    const { pokemon: pokemonA } = useFetchPokemon(pokemonIds[0]);
    const { pokemon: pokemonB } = useFetchPokemon(pokemonIds[1]);

    const statArr = ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"];
    const stat = statArr[statIndex];

    const pokemonAstat = pokemonA?.stats.filter((s) => s.shortStat === stat)[0].value;
    const pokemonBstat = pokemonB?.stats.filter((s) => s.shortStat === stat)[0].value;

    const statNames: any = {
        HP: "health points",
        ATK: "attack",
        DEF: "defense",
        SATK: "special attack",
        SDEF: "special defense",
        SPD: "speed",
    };

    const submitAnswer = (answer: string) => {
        if (answer === pokemonA!.name && pokemonAstat! > pokemonBstat!) {
            // set correct
            setGameMessage("Correct!");
        } else if (answer === pokemonB!.name && pokemonAstat! < pokemonBstat!) {
            // set wrong
            setGameMessage("Correct!");
        } else {
            setGameMessage("Wrong");
        }

        if (pokemonAstat! > pokemonBstat!) {
            const text =
                capitalizeString(pokemonA!.name) +
                "'s " +
                statNames[stat] +
                " is " +
                pokemonAstat +
                " which is higher than " +
                capitalizeString(pokemonB!.name) +
                "'s which is " +
                pokemonBstat;
            setExplanation(text);
        } else if (pokemonAstat! < pokemonBstat!) {
            const text =
                capitalizeString(pokemonB!.name) +
                "'s " +
                statNames[stat] +
                " is " +
                pokemonBstat +
                " which is higher than " +
                capitalizeString(pokemonA!.name) +
                "'s which is " +
                pokemonAstat;
            setExplanation(text);
        } else {
            const text =
                capitalizeString(pokemonA!.name) +
                "'s " +
                statNames[stat] +
                " is equal to " +
                capitalizeString(pokemonB!.name) +
                "'s " +
                statNames[stat] +
                " which is " +
                pokemonBstat;
            setExplanation(text);
        }
    };

    const playAgain = () => {
        setGameMessage("");
        setExplanation("");
        setPokemonIds([Math.floor(Math.random() * 700), Math.floor(Math.random() * 700)]);
        setStatIndex(Math.floor(Math.random() * 6));
    };

    return (
        <div>
            {pokemonA && pokemonB && (
                <div className="flex flex-col justify-center items-baseline gap-4">
                    <QuizImages pokemonA={pokemonA} pokemonB={pokemonB} />
                    <Question stat={statNames[stat]} />
                    <div className="flex justify-between items-center w-full text-xl font-semibold">
                        <button onClick={submitAnswer.bind(null, pokemonA.name)} className="uppercase">
                            {pokemonA.name}
                        </button>
                        <button onClick={submitAnswer.bind(null, "equal")} className="uppercase">
                            equal
                        </button>
                        <button onClick={submitAnswer.bind(null, pokemonB.name)} className="uppercase">
                            {pokemonB.name}
                        </button>
                    </div>
                    {gameMessage && (
                        <>
                            <Wrapper>
                                <p className="font-bold text-xl">{gameMessage}</p>
                                <p className="font-semibold text-xl text-center">{explanation}</p>
                                <button
                                    className="text-lg font-extrabold shadow-md px-2 py-1 rounded-md"
                                    onClick={playAgain}
                                >
                                    Play again?
                                </button>
                            </Wrapper>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default PokemonQuiz;

/*
  Two pokemon will be chosen.
  One stat will be randomly selected.
  User should guess which pokemon has the higher stat.
    - stats can be pokemon stats, height, weight, 
  Buttons for Pokemon A, Equal, Pokemon B
*/
