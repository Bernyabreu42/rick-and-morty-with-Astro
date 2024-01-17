import type { Character } from "./Character"

export interface Episode {
  air_date: string
  characters: Character[]
  created: string
  episode: string
  id: number
  name: string
  url: string
}