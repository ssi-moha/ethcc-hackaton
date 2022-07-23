import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEveryNftOfWallet, NFT } from "../../clients/alchemy";

export const fetchNFTS = createAsyncThunk(
  "nfts/fetch",
  async (walletAddress: string) =>
    (await getEveryNftOfWallet(walletAddress)) as NFT[]
);

const initialState: NFT[] = [];

export const balancesSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {
    reset: () => [],
  },
  extraReducers(builder) {
    builder.addCase(fetchNFTS.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { reset } = balancesSlice.actions;

export default balancesSlice.reducer;
