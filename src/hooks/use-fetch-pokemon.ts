import { useEffect, useState } from "react";
import {
  POKEAPI_URI,
  fetchPokemonSprite,
} from "../api/util";

type PokemonData = {
  name: string;
  types: [
    {type :{
        name: string
    }}
  ];
};

export const useFetchPokemon = (id: number) => {
  // data, description, loading, error
  const [data, setData] = useState<PokemonData>();
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {

      try {
        setLoading(true);

        const [pokemon, desc] = await Promise.all([
          fetch(`${POKEAPI_URI}/pokemon/${id}/`),
          fetch(`${POKEAPI_URI}/pokemon-species/${id}/`),
        ]);

        const pData = await pokemon.json();
        const descData = await desc.json();

        const english = descData.flavor_text_entries.filter((e: any) => e.language.name === 'en')

        setData(pData);
        setDescription(english[0].flavor_text.replace(/[\n\f]/g, " "))

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const [front, back] = fetchPokemonSprite(id);
  let pokemon;
  if (data) {
    pokemon = {
      name: data.name,
      description,
      backImg: back,
      frontImg: front,
      type: data.types[0].type.name,
    };
  }

  return { pokemon, loading, error };
};
