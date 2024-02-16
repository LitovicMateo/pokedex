import React, { useState } from 'react'
import SearchBar from '../components/search-bar'
import PokemonSelect from '../components/pokemon-select'
import PokemonCard from '../components/pokedex/Card'
import ChangePokemon from '../components/change-pokemon-controls'
import { useFetchPokemonList } from '../lib/hooks/usePokemonList'

const Pokedex: React.FC = () => {

    const [id, setId] = useState(1);
    const { pokemonList } = useFetchPokemonList();

    const pokemonSelectHandler = (id: number) => {
        setId(id);
      };
    
  return (
    <>
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
    </>
)
}

export default Pokedex