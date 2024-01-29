import React from "react";
import { capitalizeString } from "../api/helpers";

type PokemonInfoProps = {
  pokemon: any;
  desc: string
};
const PokemonInfo: React.FC<PokemonInfoProps> = ({ pokemon, desc }) => {
  return (
    <>
      <h2 className="font-extrabold text-4xl text-gray-800 ">
        {capitalizeString(pokemon ? pokemon.name : "Bulbasaur")}
      </h2>
      <p>{desc.replace("\n", " ")}</p>
    </>
  );
};

export default PokemonInfo;
