import { createSlice } from "@reduxjs/toolkit";

import { PokemonSliceState } from "../../models";
import { getInitialPokemonData } from "../../services";

const initialState: PokemonSliceState = {
  allPokemon: [],
  filteredPokemon: [],
  error: null,
  isLoading: true,
  status: "idle",
};

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setAllPokemon: (state, action) => {
      state.allPokemon = action.payload;
      state.filteredPokemon = action.payload;
    },
    setFilteredPokemon: (state, action) => {
      state.filteredPokemon = action.payload;
    },
    filterPokemon: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredPokemon = state.allPokemon.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm) ||
          pokemon.id.toString() === searchTerm
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getInitialPokemonData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getInitialPokemonData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = "succeeded";
        state.allPokemon = action.payload;
        state.filteredPokemon = action.payload;
      })
      .addCase(getInitialPokemonData.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export const { setAllPokemon, setFilteredPokemon } = PokemonSlice.actions;
