import { Loader } from "../loader";
import { Paragraph } from "../paragraph";
import { PokemonCard } from "../pokemon-card/PokemonCard";
import { ReturnPokemonMapper } from "../../models";
import classes from "./PokemonCardList.module.scss";
import { useAppSelector } from "../../hooks";

export const PokemonCardList = () => {
  const { filteredPokemon, isLoading, status } = useAppSelector(
    (state) => state.pokemon
  );

  if (isLoading) return <Loader />;

  if (!isLoading && filteredPokemon.length === 0) {
    return <Paragraph text="Tidak ada Pokemon yang ditemukan"/>;
  }

  return (
    <div className={classes["pokemon-list"]}>
      {status === "failed" && <p>Error al obtener los datos</p>}

      {filteredPokemon.length > 0 &&
        filteredPokemon.map((pokemon: ReturnPokemonMapper) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
    </div>
  );
};
