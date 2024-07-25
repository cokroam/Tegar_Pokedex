import { CombatState, ReturnPokemonMapper } from "../../models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

const initialState: CombatState = {
  combatList: [],
};

export const CombatSlice = createSlice({
  name: "combat",
  initialState,
  reducers: {
    addPokemonToCombat: (state, action: PayloadAction<ReturnPokemonMapper>) => {
      if (state.combatList.length < 6) {
        state.combatList.push(action.payload);
      } else {
        toast.warn("La lista de Combate está Completa!");
      }
    },
    removePokemonFromCombat: (state, action: PayloadAction<number>) => {
      state.combatList = state.combatList.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});

export const { addPokemonToCombat, removePokemonFromCombat } =
  CombatSlice.actions;
