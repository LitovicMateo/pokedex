import { useEffect, useState } from "react";
import { Pokemon } from "./api/util";
import PokemonSelect from "./components/pokemon-select";
import PokemonCard from "./components/pokemon-card";
import { useFetchPokemon } from "./hooks/use-fetch-pokemon";
import ChangePokemon from "./components/change-pokemon-controls";
import {
  PokemonItem,
  useFetchPokemonList,
} from "./hooks/use-fetch-pokemon-list";
import SearchBar from "./components/search-bar";

function App() {
  const [id, setId] = useState(1);
  const [pokelist, setPokelist] = useState<PokemonItem[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon>();

  //Initiral Load
  useEffect(() => {
    const getData = async () => {
      const listData = await useFetchPokemonList();
      const pData = await useFetchPokemon(id);
      setPokelist(listData);
      setPokemon(pData);
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data: Pokemon = await useFetchPokemon(id);
      setPokemon(data);
    };

    getData();
  }, [id]);

  const pokemonSelectHandler = (id: number) => {
    setId(id);
  };

  return (
    <div className="h-screen bg-blue-100  px-[10%]">
      <div className="mx-auto max-w-[500px] flex flex-col justify-center items-center gap-4 pt-8">
        <SearchBar setId={pokemonSelectHandler} pokelist={pokelist} />
        <PokemonSelect
          id={id}
          pokelist={pokelist}
          handleId={pokemonSelectHandler}
        />
        {pokelist.length > 0 && pokemon && (
          <>
            <PokemonCard pokemon={pokemon} />

            <ChangePokemon
              id={id}
              changeId={pokemonSelectHandler}
              nextPokemon={pokelist[id].name}
              prevPokemon={id === 1 ? "" : pokelist[id - 2].name}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
