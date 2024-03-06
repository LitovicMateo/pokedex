import React from "react";
import TextToSpeech from "../text-to-speech";
import { PokemonDetails } from "../../lib/types/PokemonAPI";

type PokemonInfoProps = {
  pokemon: PokemonDetails;
};
const PokemonInfo: React.FC<PokemonInfoProps> = ({ pokemon }) => {
  


  return (
    <>
      <p className="text-lg font-semibold">{pokemon.description}</p>
      <TextToSpeech pokemon={pokemon} />
    </>
  );
};

export default React.memo(PokemonInfo);
