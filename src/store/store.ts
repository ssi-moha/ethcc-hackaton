import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import nftsReducer from "./slices/nfts";
import themeReducer from "./slices/theme";

const rootReducer = combineReducers({
  theme: themeReducer,
  nfts: nftsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;
