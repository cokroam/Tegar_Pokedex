import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetPokemonResponse } from "../models";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_POKE_API_URL ?? "https://pokeapi.co/api/v2",
  }),
  endpoints: (builder) => ({
    getPokemonById: builder.query<GetPokemonResponse, string>({
      query: (id) => `/pokemon/${id}`,
    }),
  }),
});

export const useGetPokemonByIdQuery: typeof pokemonApi.endpoints.getPokemonById.useQuery =
  pokemonApi.endpoints.getPokemonById.useQuery;
