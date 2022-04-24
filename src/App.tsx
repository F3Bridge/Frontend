import WalletConnectProvider from "@walletconnect/web3-provider";
import { useEffect, useState } from "react";
import { providers } from "ethers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { FriendsPage } from "./pages/FriendsPage";
import { CommunitiesPage } from './pages/CommunitiesPage'
import { DiscordPage } from "./pages/DiscordPage";
import tw from "twin.macro"
import styled from "styled-components"
import { HomePage2 } from "./pages/HomePage2";

const AppContainer = tw.div`
	flex
	flex-col
	w-full
	h-full
	overflow-x-hidden
	overflow-y-hidden
`;

const App = () => {
  return (
	  <>
	  <AppContainer>
		  <HomePage />
		  <HomePage2 />
	  </AppContainer>

    <Routes>
      {/*<Route path="/" element={<HomePage />} />*/}
      <Route path="/FriendsPage" element={<FriendsPage />} />
	    <Route path="/CommunitiesPage" element={<CommunitiesPage />} />
      <Route path="/DiscordPage" element={<DiscordPage />} />
    </Routes>
	</>

  );
};

export default App;
