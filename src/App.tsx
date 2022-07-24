import { ChakraProvider } from "@chakra-ui/react";
import { useAppSelector } from "./store/store";
import { themes } from "./theme";
import AppRoutes from "./AppRoutes";
import useUpdateThemeOnConnection from "./hooks/useUpdateThemeOnConnection";

function App() {
  const theme = useAppSelector((state) => state.theme);
  const {} = useUpdateThemeOnConnection();
  return (
    <ChakraProvider theme={themes[theme]}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
