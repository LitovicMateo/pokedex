import React from "react";
import { capitalizeString } from "../../lib/util/capitalizeString";
import { PokemonDetails } from "../../lib/types/PokemonAPI";

type QuizImagesProps = {
    pokemonA: PokemonDetails;
    pokemonB: PokemonDetails;
};

const QuizImages: React.FC<QuizImagesProps> = ({ pokemonA, pokemonB }) => {
    return (
        <div className="flex justify-around md:justify-between items-center w-full my-8">
            <div className="flex flex-col justify-center items-center text-xl font-semibold bg-white aspect-square w-[100px] md:w-[150px] rotate-45 rounded-xl border-black border-4 border-solid">
                <div className="-rotate-45 flex flex-col justify-center items-center relative">
                    <img src={pokemonA?.frontImg} alt={pokemonA?.name} className="-scale-x-100" />
                    <h2 className="absolute -bottom-5 md:-bottom-10 w-[100px] text-base md:w-[200px] text-center bg-gray-950 text-white px-2 py-1 rounded-md">{capitalizeString(pokemonA?.name)}</h2>
                </div>
                {/* <h2>{pokemonAstat}</h2> */}
            </div>
            <div className="flex flex-col justify-center items-center text-xl font-semibold bg-white aspect-square w-[100px] md:w-[150px] rotate-45 rounded-xl border-black border-4 border-solid">
                <div className="-rotate-45 flex flex-col justify-center items-center">
                <img src={pokemonB?.frontImg} alt={pokemonB?.name} />
                <h2 className="absolute -bottom-5 md:-bottom-10 w-[100px] text-base md:w-[200px] text-center bg-gray-950 text-white px-2 py-1 rounded-md truncate">{capitalizeString(pokemonB?.name)}</h2>
                {/* <h2>{pokemonBstat}</h2> */}
            </div>
            </div>
        </div>
    );
};

export default QuizImages;
