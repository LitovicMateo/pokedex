import { useState } from "react";
import PokemonSelect from "./components/pokemon-select";
import PokemonCard from "./components/pokemon-card";
import ChangePokemon from "./components/change-pokemon-controls";
import { useFetchPokemonList } from "./hooks/use-fetch-pokemon-list";
import SearchBar from "./components/search-bar";

function App() {
  const [id, setId] = useState(1);
  const { pokemonList} = useFetchPokemonList();

  const pokemonSelectHandler = (id: number) => {
    setId(id);
  };


  return (
    <div className="h-[100vh] bg-[#B1D2AC] px-[10%]">
      <div className="mx-auto max-w-[450px] flex flex-col justify-center items-center gap-4 pt-8">
        <SearchBar setId={pokemonSelectHandler} pokelist={pokemonList} />
        <PokemonSelect
          id={id}
          pokelist={pokemonList}
          handleId={pokemonSelectHandler}
        />
        {pokemonList.length > 0 && (
          <>
            <PokemonCard id={id} />

            <ChangePokemon
              id={id}
              changeId={pokemonSelectHandler}
              nextPokemon={pokemonList[id].name}
              prevPokemon={id === 1 ? "" : pokemonList[id - 2].name}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
