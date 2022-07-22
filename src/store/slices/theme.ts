import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../../theme";

export const theme = createSlice({
  name: "theme",
  initialState: "vanilla" as Theme,
  reducers: {
    update: (state: Theme, action: PayloadAction<Theme>) => action.payload,
  },
});

export const { update } = theme.actions;

export default theme.reducer;
