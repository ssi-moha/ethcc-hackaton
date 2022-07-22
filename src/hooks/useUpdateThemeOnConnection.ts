import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAccount } from "wagmi";
import { update } from "../store/slices/theme";

const useUpdateThemeOnConnection = () => {
  const { isConnected, isDisconnected } = useAccount();
  const dispatch = useDispatch();

  const setVanillaTheme = () => dispatch(update("vanilla"));
  const setFirstTheme = () => dispatch(update("first"));

  useEffect(() => {
    setFirstTheme();
  }, [isConnected]);

  useEffect(() => {
    setVanillaTheme();
  }, [isDisconnected]);

  return {};
};

export default useUpdateThemeOnConnection;
