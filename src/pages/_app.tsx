import "../../styles/globals.css";
<<<<<<< HEAD

import { Web3ReactProvider } from "@web3-react/core";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Provider as ReduxProvider } from "react-redux";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/navbar/Navbar";
import Web3ReactManager from "../components/Web3ReactManager";
import getLibrary from "../misc/getLibrary";
import { store } from "../state";

import type { AppProps } from "next/app";
=======
import type { AppProps } from "next/app";
import Link from "next/link";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/Footer";
import getLibrary from "../misc/getLibrary";
import { Provider as ReduxProvider } from "react-redux";
import { Web3ReactProvider } from "@web3-react/core";
import Web3ReactManager from "../components/Web3ReactManager";
import { store } from "../state";
import dynamic from "next/dynamic";

>>>>>>> 14969c7b51cca124ee2f490226269c0e797fa2b9
const Web3ProviderNetwork = dynamic(
  () => import("../components/Web3ProviderNetwork"),
  { ssr: false }
);

function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
  const header = useMemo(
    () => (
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
    ),
    []
  );

=======
>>>>>>> 14969c7b51cca124ee2f490226269c0e797fa2b9
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Web3ReactManager>
          <ReduxProvider store={store}>
<<<<<<< HEAD
            {header}
=======
            <header className="sticky top-0 z-10">
              <Navbar />
            </header>
>>>>>>> 14969c7b51cca124ee2f490226269c0e797fa2b9
            <Component {...pageProps} />
            <Footer />
          </ReduxProvider>
        </Web3ReactManager>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
}

export default App;
