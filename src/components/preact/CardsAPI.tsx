
import {type Character } from "../../types/Character"
import type { Location } from "../../types/Location"
import type { Episode } from "../../types/Episode"
import type { API } from "./Searcher"

type Props = {
  character: Character | Location | Episode
  tipo: API
}

const statusColor = {
  Alive: {background: '#cff09e', text: '#507c5c'},
  Dead: {background: '#f4b2b0', text: '#b3404a'},
  Unknown: {background:'#cee8fa', text: '#2d527c'},
  unknown: {background:'#cee8fa', text: '#2d527c'}
}

export default function CardsAPI({character, tipo}: Props) {

  if(tipo === 'character'  && 'status' in character){
    return (
      <li class='w-full p-1 hover:text-text '>
      <a  href={`/characters/${character.id}`}
class={`relative block rounded-lg overflow-hidden shadow-sm border border-gray-700 hover:bg-fondo h-full`}>

  <picture  class="relative aspect-square w-full h-auto">
    <div style={`border:1px solid ${statusColor[character.status]['text']};background:${statusColor[character.status]['background']};color:${statusColor[character.status]['text']}`}
    class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold flex items-center justify-center border">
      <span>{character.status}</span>
    </div>
    <img id="character-picture" src={character.image} alt={character.name}/>
  </picture>

  <div class="p-2 flex flex-col gap-1">
    <time datetime={new Date(character.created).toLocaleDateString()} class="block text-xs text-gray-500">
      {new Date(character.created).toLocaleDateString()}
     </time>
     <h3 class="text-xs sm:text-base">{character.name}</h3>
  </div>

</a>
    </li>
    )
  }

  if(tipo === 'location' && 'type' in character && 'dimension' in character){
    return (
      <li id='locations' class='w-full border border-gray-700 p-2 rounded-md'>
       <a href={`/locations/${character.id}`} class=' rounded-lg overflow-hidden flex flex-col gap-1'>
          <span class='text-xs text-[#fbf976]'>{character.type}</span>
          <span title={character.name} id='name-locations' class='text-lg font-semibold group-hover:hover:text-text truncate'>{character.name}</span>
          <span class='text-xs'>{character.dimension}</span>
          <span class='text-xs'>Residents: {character.residents.length}</span>
       </a>
    </li>
    )
  }

  if(tipo === 'episode' && 'characters' in character){
    return (
      <li id='episodes' class='w-full border border-gray-700 p-2 rounded-md '>
        <a href={`/episodes/${character.id}`} class='rounded-lg overflow-hidden flex flex-col gap-1'>
          <span class='text-xs text-text'>{character.episode} - {character.air_date}</span>
          <span  title={character.name} id='name-episode' class='text-lg font-semibold truncate'>{character.name}</span>
          <time datetime={new Date(character.created).toLocaleDateString()} class="block text-xs text-gray-500">
            {new Date(character.created).toLocaleDateString()}
          </time>
          <span class='text-xs'>Characters: {character.characters.length}</span>
        </a>
      </li>
    )
  }

}
