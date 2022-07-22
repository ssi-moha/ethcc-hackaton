import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiConfig } from "wagmi";
import { wagmiClient, chains } from "./clients/wagmi";
import { Provider as ReduxProvider } from "react-redux";

import App from "./App";
import store from "./store/store";

const Root = () => {
  return (
    <React.StrictMode>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <ReduxProvider store={store}>
            <App />
          </ReduxProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
);
