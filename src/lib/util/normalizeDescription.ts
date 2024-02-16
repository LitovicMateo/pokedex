import { PokemonDescriptionAPI } from "../types/PokemonAPI";

export const normalizeDescription = (data: PokemonDescriptionAPI) => {
  const english = data.flavor_text_entries.filter(
    (e: any) => e.language.name === "en"
  );

  const description = english[0].flavor_text.replace(/[\n\f]/g, " ");

  return description;
};
