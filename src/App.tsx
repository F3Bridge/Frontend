import WalletConnectProvider from "@walletconnect/web3-provider";
import { useEffect, useState } from "react";
import { providers } from "ethers";
import { WEB3AUTH_NETWORK_TYPE } from "./config/web3AuthNetwork";
import { CHAIN_CONFIG_TYPE } from "./config/chainConfig";
import { Web3AuthProvider } from "./services/web3auth";
import Setting from "./components/Setting";
import MainElement from "./components/MainElement";

const clientId =
  "BArchlDSjFI4ScXBFTgN8h_i_zia0bf20CcP3GyPq5ILiwQ2pm4PJAseIqVCM2Co7MXjhMMrkGXxXcyJ95XjNUw";

const App = () => {
  const [web3Provider, setWeb3Provider] = useState();
  const [web3AuthNetwork, setWeb3AuthNetwork] =
    useState<WEB3AUTH_NETWORK_TYPE>("mainnet");
  const [chain, setChain] = useState<CHAIN_CONFIG_TYPE>("mainnet");

  useEffect(() => {
    const getProvider = async () => {
      const provider = new WalletConnectProvider({
        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
      });
      // await provider.enable();
      /* @ts-ignore */
      //setWeb3Provider(new providers.Web3Provider(provider));
    };

    // getProvider();
  }, []);

  return (
    <div className="text-xl text-red-500">
      <div>
        <Web3AuthProvider chain={chain} web3AuthNetwork={web3AuthNetwork}>
          <h1>
            <a target="_blank" href="http://web3auth.io/" rel="noreferrer">
              Web3Auth
            </a>{" "}
            ReactJS Example
          </h1>
          <Setting setNetwork={setWeb3AuthNetwork} setChain={setChain} />
          <MainElement />
        </Web3AuthProvider>
        <footer>
          <a
            href="https://github.com/Web3Auth/Web3Auth/tree/master/examples/react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>
        </footer>
      </div>
    </div>
  );
  ``;
};

export default App;
