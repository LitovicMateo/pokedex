import React from "react";
import PokemonStatItem from "./PokemonStatItem";

type PokemonCardStatsProps = {
  stats: {
    stat: string;
    value: number;
    shortStat: string;
    statGrade: string
  }[];
};

const PokemonCardStats: React.FC<PokemonCardStatsProps> = ({ stats }) => {

  return (
    <div className="flex flex-col gap-2 w-full">
        {stats.map((s) => <PokemonStatItem key={s.shortStat} stats={s} />)}
    </div>
  );
};

export default PokemonCardStats;
