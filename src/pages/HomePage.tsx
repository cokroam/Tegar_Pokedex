import { PokemonCardList, SearchBar, WrapperDivide } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";

import { getInitialPokemonData } from "../services";
import { useEffect } from "react";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.pokemon.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getInitialPokemonData());
    }
  }, [dispatch, status]);

  return (
    <WrapperDivide>
      <SearchBar />
      <PokemonCardList />
    </WrapperDivide>
  );
};
