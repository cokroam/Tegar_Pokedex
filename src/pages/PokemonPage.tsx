import { useParams } from "react-router-dom";
import { useGetPokemonByIdQuery } from "../services";
import { Loader, Pokemon, WrapperDivide } from "../components";
import { ActionBar } from "../components/action-bar";

export const PokemonPage = () => {
  const { id } = useParams();
  const { data: pokemon, isLoading } = useGetPokemonByIdQuery(id ?? "");

  return (
    <WrapperDivide>
      {isLoading && <Loader />}

      {!isLoading && pokemon && (
        <>
          <ActionBar
            pokemon={{
              id: pokemon.id,
              name: pokemon.name,
              image: pokemon.sprites.other?.dream_world.front_default ?? "",
            }}
          />

          <Pokemon pokemon={pokemon} loading={isLoading} />
        </>
      )}
    </WrapperDivide>
  );
};
