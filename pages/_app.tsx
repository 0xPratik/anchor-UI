import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { FC, useMemo } from "react";

import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
require("@solana/wallet-adapter-react-ui/styles.css");

function MyApp({ Component, pageProps }: AppProps) {
  const endpoint = "http://127.0.0.1:8899";

  const wallets = [
    new PhantomWalletAdapter(),
    new SlopeWalletAdapter(),
    new TorusWalletAdapter(),
    new LedgerWalletAdapter(),
  ];
  return (
    <ChakraProvider>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Component {...pageProps} />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
