export type PokemonDetailsAPI = {
  name: string;
  weight: number;
  types: PokemonDetailsTypeAPI[];
  stats: PokemonDetailsStatsAPI[];
};

type PokemonDetailsTypeAPI = {
  type: {
    name: string;
  };
};

type PokemonDetailsStatsAPI = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type PokemonDescriptionAPI = {
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
    };
  }[];
};

export type PokemonDetails = {
  name: string;
  description: string;
  backImg: string;
  frontImg: string;
  type: string;
  stats: {
    shortStat: string;
    stat: string;
    value: number;
    statGrade: number
  }
}
