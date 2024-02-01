import React, { useState } from "react";
import SearchList from "./search-list";
import { PokemonItem } from "../hooks/use-fetch-pokemon-list";

type SearchBarProps = {
  pokelist: PokemonItem[];
  setId: (id: number) => void;
};
const SearchBar: React.FC<SearchBarProps> = ({ pokelist, setId }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterTerm = pokelist.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleSelect = (id: number) => {
    setSearchTerm("");
    setId(id)
  }
  return (
      <div className="relative  w-full">
        <input
          className="w-full bg-[#A1C79A] rounded-[4px] px-4 py-2 text-xl font-semibold font-['Klee_One'] text-[#3f6636] placeholder-[#3f6636] shadow-md shadow-[#759171]"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Pokemon"
        />
        {searchTerm.length > 0 && (
          <div className="absolute bottom-[-350px] left-[8px] w-[calc(100%_-_16px)] h-[300px] overflow-scroll scrollbar-hide z-10">
            <SearchList setId={handleSelect} list={filterTerm} />
          </div>
        )}
      </div>
  );
};

export default SearchBar;
