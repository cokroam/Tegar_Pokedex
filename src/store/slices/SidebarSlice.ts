import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SidebarTypeState } from "../../models";

const initialState: SidebarTypeState = {
  isOpenSidebar: false,
};

export const SidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setOpenSidebar: (state, action: PayloadAction<boolean>) => {
      state.isOpenSidebar = action.payload;
    },
  },
});

export const { setOpenSidebar } = SidebarSlice.actions;
