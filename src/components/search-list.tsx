import React from "react";
import Wrapper from "./ui/wrapper";
import { PokemonItem } from "../lib/hooks/usePokemonList";
import { capitalizeString } from "../lib/util/capitalizeString";

type SearchListProps = {
  list: PokemonItem[];
  setId: (id: number) => void
};

const SearchList: React.FC<SearchListProps> = ({ list, setId }) => {

    const handleClick = (id: number) => {
        setId(id)
    }
  return (
    <Wrapper>
      <ul className="bg-white px-4 py-2 overflow-scroll scrollbar-hide h-fit max-h-[200px]">
        {list.length > 0 ? (
          list.map((p) => {
            return (
              <li key={p.name}>
                <button onClick={handleClick.bind(null, p.id)} className="flex gap-4 justify-center items-center h-[40px] font-bold text-gray-800">
                  <img src={p.img} alt={p.name} className="h-full aspect-square" />
                  {capitalizeString(p.name)}
                </button>
              </li>
            );
          })
        ) : (
          <p>No pokemon matches the search term.</p>
        )}
      </ul>
    </Wrapper>
  );
};

export default SearchList;
