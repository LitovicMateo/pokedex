import React, { useState } from "react";
import PokemonAvatar from "./pokemon-avatar";
import PokemonInfo from "./pokemon-info";
import PokemonCardTabs from "./pokemon-card-tabs";
import { capitalizeString } from "../api/helpers";
import PokemonCardStats from "./pokemon-card-stats";
import { useFetchPokemon } from "../hooks/use-fetch-pokemon";

type PokemonCardProps = {
  id: number;
};

export type ActiveTabs = "Info" | "Stats" | "Moves";

const PokemonCard: React.FC<PokemonCardProps> = ({ id }) => {
  const [activeTab, setActiveTab] = useState<ActiveTabs>("Info");

  const { pokemon, loading, error } = useFetchPokemon(id);

  const handleTabClick = (e: ActiveTabs) => {
    if (e) setActiveTab(e);
  };

  return (
    <div className=" p-4 mx-auto pb-6 h-[500px] w-full rounded-lg shadow-lg shadow-[#759171] flex-col justify-ce items-center gap-6 inline-flex bg-gradient-to-br from-[#A5CD9E] to-[#9EC598]">
      {loading && <p>Loading...</p>}
      {!loading && pokemon ? (
        <>
          <PokemonAvatar front={pokemon!.frontImg} back={pokemon!.backImg} />
          <h2 className="font-extrabold text-4xl text-gray-800 ">
            {capitalizeString(pokemon ? pokemon.name : "Bulbasaur")}
          </h2>

          <PokemonCardTabs active={activeTab} tabHandler={handleTabClick} />

          {activeTab === "Info" && (
            <PokemonInfo pokemon={pokemon} desc={pokemon.description} />
          )}
          {activeTab === "Stats" && <PokemonCardStats />}

        </>
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
};

export default PokemonCard;
