import React, { ChangeEvent } from "react";
import Wrapper from "./ui/wrapper";
import { PokemonItem } from "../hooks/use-fetch-pokemon-list";

import PokemonOptionSelect from "./pokemon-option-select";

type PokemonSelectProps = {
  id: number;
  pokelist: PokemonItem[];
  handleId: (id: number) => void;
};

const PokemonSelect: React.FC<PokemonSelectProps> = ({
  handleId,
  pokelist,
  id,
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {

    handleId(parseFloat(e.target.value));
  };

  console.log(pokelist);

  return (
    <Wrapper>
      <select
        className="w-full h-[60px] text-xl px-4 rounded-md text-gray-800 font-bold"
        onChange={handleChange}
        value={id}
      >
        {pokelist.map((p, i) => <PokemonOptionSelect index={i} pokemon={p} key={p.name} /> )}
      </select>
    </Wrapper>
  );
};

export default PokemonSelect;
