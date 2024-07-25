export interface PokemonSliceState {
  allPokemon: ReturnPokemonMapper[];
  filteredPokemon: ReturnPokemonMapper[];
  error: string | null;
  isLoading: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
}

export interface CombatState {
  combatList: ReturnPokemonMapper[];
}

export interface ReturnPokemonMapper {
  id: number;
  name: string;
  image: string;
  url?: string;
}
