import { fetchAllPokemons, fetchPokemonSprite } from "../api/util"

export type PokemonItem = {
    id: number,
    name: string;
    img: string
}

export const useFetchPokemonList = async(): Promise<PokemonItem[]> => {
    const data = await fetchAllPokemons()
    const arr: PokemonItem[] = [];

    for (let i = 0; i < data.length; i++) {
        const [front] = fetchPokemonSprite(i+1)
        const obj = {
            id: i+1,
            name: data[i].name,
            img: front
        }

        arr.push(obj)
    }

    return arr
}