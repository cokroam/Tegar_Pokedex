import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { AppSlice, CombatSlice, PokemonSlice, SidebarSlice } from "./slices";
import { persistReducer, persistStore } from "redux-persist";

import { pokemonApi } from "../services";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedPokemonReducer = persistReducer(
  persistConfig,
  PokemonSlice.reducer
);
const persistedSidebarReducer = persistReducer(
  persistConfig,
  SidebarSlice.reducer
);
const persistedCombatReducer = persistReducer(
  persistConfig,
  CombatSlice.reducer
);

export const store = configureStore({
  reducer: {
    app: AppSlice.reducer,
    pokemon: persistedPokemonReducer,
    sidebar: persistedSidebarReducer,
    combat: persistedCombatReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(pokemonApi.middleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
