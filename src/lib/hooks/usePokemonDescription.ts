import { POKEAPI_URI } from "../../api/util";
import { PokemonDescriptionAPI } from "../types/PokemonAPI";
import { useFetch } from "./useFetch";

export const usePokemonDescription = (id: number) => {
  const { responseData } = useFetch<PokemonDescriptionAPI>(
    `${POKEAPI_URI}/pokemon-species/${id}/`
  );

  return {description: responseData};
};
