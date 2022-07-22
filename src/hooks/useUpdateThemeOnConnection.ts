import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { getEveryNftOfWallet } from "../clients/alchemy";
import { fetchNFTS } from "../store/slices/nfts";
import { update } from "../store/slices/theme";
import { RootState } from "../store/store";

const useUpdateThemeOnConnection = () => {
  const { isConnected, isDisconnected, address } = useAccount();
  const nfts = useSelector((state: RootState) => state.nfts);
  const dispatch = useDispatch();

  const setVanillaTheme = () => dispatch(update("vanilla"));
  const setFirstTheme = () => dispatch(update("first"));

  async function getNfts() {
    if (address) {
      // @ts-ignore
      dispatch(fetchNFTS(address));
    }
  }

  useEffect(() => {
    setFirstTheme();
  }, [isConnected]);

  useEffect(() => {
    setVanillaTheme();
  }, [isDisconnected]);

  useEffect(() => {
    if (address) {
      getNfts();
    }
  }, [address]);

  return { nfts, fire: isConnected };
};

export default useUpdateThemeOnConnection;
