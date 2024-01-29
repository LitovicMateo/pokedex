import { Pokemon, fetchPokemonById, fetchPokemonDescription, fetchPokemonSprite, } from "../api/util"

export const useFetchPokemon = async(id: number): Promise<Pokemon> => {
    const pokemon = await fetchPokemonById(id)
    const [front, back] = fetchPokemonSprite(id)
    const description = await fetchPokemonDescription(id)
    
    const pokemonObj: Pokemon = {
        name: pokemon.name,
        description: description,
        type: pokemon.types[0].type.name,
        backImg: back,
        frontImg: front
    }

    return pokemonObj
}