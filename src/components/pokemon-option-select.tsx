import React from "react";
import { capitalizeString } from "../lib/util/capitalizeString";
import { PokemonItem } from "../lib/hooks/usePokemonList";

type PokemonOptionSelectProps = {
  pokemon: PokemonItem;
  index: number;
};

const PokemonOptionSelect: React.FC<PokemonOptionSelectProps> = ({
  pokemon,
  index,
}) => {
  return (
    <option
      className="text-xl text-gray-800 font-semibold"
      key={pokemon.name}
      value={index + 1}
      data-icon={pokemon.img}
    >
      {capitalizeString(pokemon.name)}  
    </option>
  );
};

export default PokemonOptionSelect;
