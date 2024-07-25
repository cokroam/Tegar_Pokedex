import { PokemonDetailProps } from "./PokemonDetail.def";
import classes from "./PokemonDetail.module.scss";

export const PokemonDetail = ({ label }: PokemonDetailProps) => {
  return <span className={classes["pokemon-detail"]}>{label}</span>;
};
