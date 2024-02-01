import React from "react";
import TextToSpeech from "./text-to-speech";

type PokemonInfoProps = {
  pokemon: any;
  desc: string;
};
const PokemonInfo: React.FC<PokemonInfoProps> = ({ pokemon, desc }) => {
  return (
    <>
      <p className="text-lg font-semibold">{desc.replace("\n", " ")}</p>
      <TextToSpeech pokemon={pokemon} />
    </>
  );
};

export default PokemonInfo;
