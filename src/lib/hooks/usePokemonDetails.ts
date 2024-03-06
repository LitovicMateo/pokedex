/*

Custom Hook that makes a call to PokeAPI, fetches Pokemon Bio and his Description,
transforms the data, and returns it along with 'loading' and 'error' state.

*/


import { POKEAPI_URI, fetchPokemonSprite } from "../../api/util";
import { PokemonDetails, PokemonDetailsAPI } from "../types/PokemonAPI";
import { normalizeDescription } from "../util/normalizeDescription";
import { useEffect, useState } from "react";

const statAcronyms = ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"];
const maxStats = [255, 180, 200, 180, 200, 200];

export const useFetchPokemon = (id: number): {pokemon: PokemonDetails | null, isLoading: boolean, error: string | undefined} => {
  const [details, setDetails] = useState<PokemonDetailsAPI>();
  const [description, setDescription] = useState<string>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [frontImage, backImage] = fetchPokemonSprite(id);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const detailsUrl = `${POKEAPI_URI}/pokemon/${id}/`;
      const descriptionUrl = `${POKEAPI_URI}/pokemon-species/${id}/`;

      try {
        fetch(detailsUrl)
          .then((res) => res.json())
          .then((data) => setDetails(data));

        fetch(descriptionUrl)
          .then((res) => res.json())
          .then((data) => normalizeDescription(data))
          .then((nData) => setDescription(nData));

      } catch (err) {
        setError("Fetching pokemon details failed");

      } finally {
        setIsLoading(false);

      }
    };

    fetchData();
  }, [id]);


  let pokemon: PokemonDetails | null = null;

  if (details && description) {
    pokemon = {
      name: details.name,
      description,
      backImg: backImage,
      frontImg: frontImage,
      type: details.types[0].type.name,
      stats: details.stats.map((s, i) => {
        return {
          shortStat: statAcronyms[i],
          stat: s.stat.name,
          value: s.base_stat,
          statGrade:
            Math.round((s.base_stat / maxStats[i]) * 100).toString() + "%",
        };
      }),
    };
  }


  return {
    pokemon,
    isLoading,
    error,
  };
};
