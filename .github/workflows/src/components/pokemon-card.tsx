import React from "react";
import PokemonAvatar from "./pokemon-avatar";
import PokemonInfo from "./pokemon-info";
import TextToSpeech from "./text-to-speech";
import { Pokemon } from "../api/util";
import Wrapper from "./ui/wrapper";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <Wrapper>
      <div className="  mx-auto rounded-[4px] bg-white aspect-[4/5] w-full flex flex-col justify-around items-center p-8 text-center">
        <PokemonAvatar front={pokemon.frontImg} back={pokemon.backImg} />
        <PokemonInfo pokemon={pokemon} desc={pokemon.description} />
        <TextToSpeech pokemon={pokemon} />
      </div>
    </Wrapper>
  );
};

export default PokemonCard;
