import { useEffect } from "react";
import { useAccount } from "wagmi";
import { fetchNFTS, reset } from "../store/slices/nfts";
import { update } from "../store/slices/theme";
import { useAppDispatch, useAppSelector } from "../store/store";

const useUpdateThemeOnConnection = () => {
  const { isConnected, isDisconnected, address } = useAccount();
  const nfts = useAppSelector((state) => state.nfts);
  const dispatch = useAppDispatch();

  const setVanillaTheme = () => dispatch(update("vanilla"));
  const setFirstTheme = () => dispatch(update("first"));

  async function getNfts() {
    if (address) {
      dispatch(fetchNFTS(address));
    }
  }

  useEffect(() => {
    if (isConnected) {
    setFirstTheme();
    }
    if (isDisconnected) {
    setVanillaTheme();
    dispatch(reset());
    }
  }, [isConnected, isDisconnected]);


  useEffect(() => {
    if (address) {
      getNfts();
    }
  }, [address]);

  return { nfts };
};

export default useUpdateThemeOnConnection;
