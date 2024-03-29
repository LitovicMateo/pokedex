import React from 'react'
import PokemonCardTabItem from './TabItem'
import { ActiveTabs } from './Card';

type PokemonCardTabsProps = {
  active: string;
  tabHandler: (e: ActiveTabs) => void
}

const PokemonCardTabs: React.FC<PokemonCardTabsProps> = ({active, tabHandler}) => {

  return (
    <div className='w-full flex justify-center gap-10  items-center'>
      <PokemonCardTabItem onClick={tabHandler} activeTab={active} item='Info' />
      <PokemonCardTabItem onClick={tabHandler} activeTab={active} item='Stats' />
      <PokemonCardTabItem onClick={tabHandler} activeTab={active} item='Moves' />
    </div>
  )
}

export default PokemonCardTabs