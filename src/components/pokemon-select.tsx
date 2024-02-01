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
      <select
        className="w-full h-[50px] text-xl px-4 rounded-md text-[#3f6636] bg-[#A1C79A] font-semibold shadow-md shadow-[#759171]"
        onChange={handleChange}
        value={id}
      >
        {pokelist.map((p, i) => <PokemonOptionSelect index={i} pokemon={p} key={p.name} /> )}
      </select>
  );
};

export default PokemonSelect;
