import { GetPokemonResponse } from "../../models";

export type PokemonProps = {
  pokemon: GetPokemonResponse;
  loading?: boolean;
};
