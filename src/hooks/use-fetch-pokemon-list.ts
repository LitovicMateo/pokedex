import { useEffect, useState } from "react";
import { POKEAPI_URI, fetchPokemonSprite } from "../api/util";

/*
 * Fetch data pokemon list data
 * Exctract pokemon name from data
 * Turn into object with ID, name, and front image
 * Error and Loading state
 * Return the object
 */

export type PokemonItem = {
  id: number;
  name: string;
  img: string;
};

type ReturnType = {
  pokemonList: PokemonItem[];
  loading: boolean;
  error: any;
};

type ResponseData = {
  name: string;
  url: string;
};

export const useFetchPokemonList = (): ReturnType => {
  const [data, setData] = useState<ResponseData[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${POKEAPI_URI}/pokemon?limit=700`);
        const data = await res.json();
        setData(data.results);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (!data) {
      fetchData();
    }
  }, [data]);

  const arr: PokemonItem[] = [];

  if (data) {
    for (let i = 0; i < data.length; i++) {
      const [front] = fetchPokemonSprite(i + 1);
      const obj = {
        id: i + 1,
        name: data[i].name,
        img: front,
      };

      arr.push(obj);
    }
  }

  return {
    pokemonList: arr,
    error,
    loading,
  };
};
