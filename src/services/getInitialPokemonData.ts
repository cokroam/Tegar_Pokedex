import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "../store/store";
import { ReturnPokemonMapper } from "../models";

export const getInitialPokemonData = createAsyncThunk<
  ReturnPokemonMapper[],
  void,
  { rejectValue: string }
>("pokemon/initialData", async (_, { rejectWithValue, getState }) => {
  const url = `${import.meta.env.VITE_POKE_API_GET_POKEMON}/${
    import.meta.env.VITE_POKE_API_LIMIT
  }`;

  const state = getState() as RootState;
  if (state.pokemon.allPokemon.length > 0) {
    return state.pokemon.allPokemon;
  }

  try {
    const { data } = await axios.get(url);

    const pokemonData = data.results.map(async (pokemon: { url: string }) => {
      const { data } = await axios.get(pokemon.url);
      const image = data.sprites.other.dream_world.front_default ?? "";
      return { id: data.id, name: data.name, image: image };
    });

    const results = await Promise.all(pokemonData);
    return results;
  } catch (err) {
    console.error("ERROR:: ", err);
    return rejectWithValue("La carga inicial de Pokemons ha fallado");
  }
});
