import React from "react";
import { capitalizeString } from "../api/helpers";
import { PokemonItem } from "../hooks/use-fetch-pokemon-list";

type PokemonOptionSelectProps = {
    pokemon: PokemonItem,
    index: number
}

const PokemonOptionSelect: React.FC<PokemonOptionSelectProps> = ({pokemon, index}) => {
  return (
    <option
      className="text-xl text-gray-800 font-semibold"
      key={pokemon.name}
      value={index + 1}
      data-icon={pokemon.img}
    >
      <img src={pokemon.img} />
      <span>{capitalizeString(pokemon.name)}</span>
    </option>
  );
};

export default PokemonOptionSelect;
