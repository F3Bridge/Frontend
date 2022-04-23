import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { useWeb3React } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { Connector } from "@web3-react/types";
import { WalletConnect } from "@web3-react/walletconnect";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ConnectionModal } from "../components/ConnectionModal";
import LivePeer from "../components/LivePeer/Live-peer";

// Disable Web3Auth due to bugs in web3auth modules
// import { Web3Auth } from "../connectors/web3auth";

import F3BridgeLogo from "../../f3bridge.png"


function getName(connector: Connector) {
  if (connector instanceof MetaMask) return "MetaMask";
  if (connector instanceof WalletConnect) return "WalletConnect";
  if (connector instanceof CoinbaseWallet) return "Coinbase Wallet";
  return "Unknown";
}
export function HomePage() {
  const { connector, isActive, provider } = useWeb3React();
  const [modalShown, setModalShown] = useState(false);
  return (
    <>
    <div className="bg-[#dff2d80]">
    <img src={F3BridgeLogo} alt="logo" boxSize="200px" />
          <h1>
            F3Bridge
          </h1>
        <div>
          F3Bridge is a tool to bridge your existing Web2 groups and friends from Discord to the Web3 Lens Protocol.
          </div>
 
 
          <h2>Technologies used</h2>
          <h3>Web2</h3>
          <h4>Discord</h4>
          <div>
            A Discord bot allows you to connect to your Discord account,
            <br /> to discover friends who already have a Web3 (Lens Protocol) social profile.
  
          </div>

          <h2>Web3</h2>
          <ul>
          <li>Lens Protocol</li>
          <li>IPFS</li>
          <li>WalletConnect</li>
          <li>Polygon</li>
          </ul>
          <h2>FAQ</h2>
          <h3>
            Why not decentralize the registry?
          </h3>
          <div>In theory, we could decentralize the Discord profile to Lens profile mapping.
          For example by enabling users to publish the hash of their Discord username into their Lens profile
          and then searching for matching profiles on-chain. <br/>
          However, it would be hard to independently verify the claim that they indeed own that Discord profile,
          and are not impersonating another user. <br/>
          Therefore, we use a trusted registry that verifies Discord and web3 ownership at the same time.
          Transitioning from web2 to web3 inevitably will require some centralized registries, but the good news is
          that once you and your friends and communities are set up on Web3, you can from then on fully determine what you publish,
          what you want to consume and/or moderate, without any risks of being deplatformed or monetized without your explicit permission.
          </div>

          <div>
            {isActive ? <>Connector is: {getName(connector)}</> : "Inactive"}
            <button onClick={() => setModalShown(true)}>Connect Wallet</button>
            {modalShown && <ConnectionModal onClose={() => setModalShown(false)} />}
          </div>
      </div>
    </>
  );
}
