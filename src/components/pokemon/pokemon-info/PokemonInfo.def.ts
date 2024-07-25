export type PokemonInfoProps = {
  stats: PokemonInfoStats[];
  title?: string;
};

export interface PokemonInfoStats {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export interface Stat {
  name: string;
  url: string;
}
