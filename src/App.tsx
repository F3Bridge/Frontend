import WalletConnectProvider from "@walletconnect/web3-provider";
import { useEffect, useState } from "react";
import { providers } from "ethers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { FriendsPage } from "./pages/FriendsPage";
import Navbar from './components/Navbar'
import { CommunitiesPage } from './pages/CommunitiesPage'

const App = () => {
  const [web3Provider, setWeb3Provider] = useState();

  useEffect(() => {
    const getProvider = async () => {
      const provider = new WalletConnectProvider({
        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
      });
      // await provider.enable();
      /* @ts-ignore */
      //setWeb3Provider(new providers.Web3Provider(provider));
    };

    getProvider();
  }, []);

  return (
	  <>
	<Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/FriendsPage" element={<FriendsPage />} />
	  <Route path="/CommunitiesPage" element={<CommunitiesPage />} />
    </Routes>
	</>

  );
};

export default App;
