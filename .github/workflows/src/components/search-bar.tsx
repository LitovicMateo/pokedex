import React, { useState } from "react";
import Wrapper from "./ui/wrapper";
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
    <Wrapper>
      <div className="relative">
        <input
          className="w-full rounded-[4px] px-4 py-2 text-xl font-semibold text-gray-800"
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
    </Wrapper>
  );
};

export default SearchBar;
