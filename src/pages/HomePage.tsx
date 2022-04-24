import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { useWeb3React } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { Connector } from "@web3-react/types";
import { WalletConnect } from "@web3-react/walletconnect";
import { useState } from "react";
//import { Link } from "react-router-dom";
import { ConnectionModal } from "../components/ConnectionModal";
import LivePeer from "../components/LivePeer/Live-peer";
import tw from "twin.macro"
import styled from "styled-components";
import { Element, Link } from "react-scroll";
import { BsArrowDownCircle } from "react-icons/bs";

// Disable Web3Auth due to bugs in web3auth modules
// import { Web3Auth } from "../connectors/web3auth";

import F3BridgeLogo from "../../f3bridge.png"

const HomeSectionContainer = tw(Element)`
		flex
		flex-col
		w-full
		h-screen
		relative
		bg-black
		overflow-x-hidden
		overflow-y-hidden
		align-middle
`;


const LandingSectionContainer = styled.div`
	${tw`
		w-full
		h-screen
		flex
		flex-col
		overflow-x-hidden
		overflow-y-hidden
	`}
`
const Logo = styled.div`
	${tw`
		flex
		p-[5rem]
		//background-image[url(https:/\\/s2.favim.com/orig/150811/clouds-gif-pink-purple-Favim.com-3096843.gif)]
		background-image[url(https:/\\/i.imgur.com/gGtBm3F.jpeg)]
		bg-auto
		bg-center
		w-screen
		blur-md
		text-[200px]
		//tracking-[-.12em]
		font-extrabold
		bg-clip-text
		text-transparent
		justify-center
		md:text-[200px]
		lg:text-[200px]
		drop-shadow-2xl
	`};
`

const Text = styled.p`
${tw`
	text-white
	text-lg
	font-medium
`}`

const Title = tw.h1`
	flex
	flex-col
	h-screen

	text-xl
	absolute
	left-1/4
	//mb-9
	//pb-9
	//xl:text-3xl
	//2xl:text-5xl
	//2xl:mt-6
	//2xl:mb-6
	font-bold
	text-white
`

const ViewMoreButton = styled.button`
  ${tw`
		absolute
		bottom-4
		left-1/2
		-translate-x-1/2
		text-blue-200
		text-3xl
		transition-colors
		duration-200
		hover:text-pink-300
	`};
`;


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
<<<<<<< HEAD
	<HomeSectionContainer name="Home">
		<img src={F3BridgeLogo} alt="logo" width={100} height={100} />
		<LandingSectionContainer>
			<Logo>
				F3BRIDGE
			</Logo>
			<p className="flex pb-8 justify-center text-lg text-white/90">
			F3Bridge is a tool to bridge your existing Web2 groups and friends from Discord to the Web3 Lens Protocol.
			</p>
			<p className="flex justify-center text-lg text-white/80 mt-4">

			A Discord bot allows you to connect to your Discord account,
			to discover friends who already have a Web3 (Lens Protocol) social profile.
			</p>
			Web3
		<div className="flex text-white text-2xl justify-center mt-12 shadow-2xl">
			<ul className="flex justify-center mt-28">
         <li className="text-white/80">Scroll</li>
         <li className="text-white/50">Down</li>
         <li className="text-white/20">Fren</li>

		 </ul>
		 </div>
			<ViewMoreButton>
				<Link to="HomePage2" smooth={"easeInOutQuad"} duration={1500}>
					<BsArrowDownCircle />
				</Link>
			</ViewMoreButton>
		</LandingSectionContainer>
	</HomeSectionContainer>


    //<>
    //<div className="bg-[#dff2d80]">
    //<img src={F3BridgeLogo} alt="logo" boxSize="200px" />
    //      <h1>
    //        F3Bridge
    //      </h1>
    //    <div>
    //      F3Bridge is a tool to bridge your existing Web2 groups and friends from Discord to the Web3 Lens Protocol.
    //      </div>


    //      <h2>Technologies used</h2>
    //      <h3>Web2</h3>
    //      <h4>Discord</h4>
    //      <div>
    //        A Discord bot allows you to connect to your Discord account,
    //        <br /> to discover friends who already have a Web3 (Lens Protocol) social profile.

    //      </div>

    //      <h2>Web3</h2>
    //      <ul>
    //      <li>Lens Protocol</li>
    //      <li>IPFS</li>
    //      <li>WalletConnect</li>
    //      <li>Polygon</li>
    //      </ul>
    //      <h2>FAQ</h2>
    //      <h3>
    //        Why not decentralize the registry?
    //      </h3>
    //      <div>In theory, we could decentralize the Discord profile to Lens profile mapping.
    //      For example by enabling users to publish the hash of their Discord username into their Lens profile
    //      and then searching for matching profiles on-chain. <br/>
    //      However, it would be hard to independently verify the claim that they indeed own that Discord profile,
    //      and are not impersonating another user. <br/>
    //      Therefore, we use a trusted registry that verifies Discord and web3 ownership at the same time.
    //      Transitioning from web2 to web3 inevitably will require some centralized registries, but the good news is
    //      that once you and your friends and communities are set up on Web3, you can from then on fully determine what you publish,
    //      what you want to consume and/or moderate, without any risks of being deplatformed or monetized without your explicit permission.
    //      </div>

    //      <div>
    //        {isActive ? <>Connector is: {getName(connector)}</> : "Inactive"}
    //        <button onClick={() => setModalShown(true)}>Connect Wallet</button>
    //        {modalShown && <ConnectionModal onClose={() => setModalShown(false)} />}
    //      </div>
    //  </div>
    //</>
=======
    <div className="min-h-screen text-xl text-pink-700 bg-yellow-300">
      <Link to="/friends">(Click here to go to friendSsS page)</Link>
      <div>
        {isActive ? <>Connector is: {getName(connector)}</> : "Inactive"}
      </div>
      <button onClick={() => setModalShown(true)}>Connect!</button>
    </div>
>>>>>>> main
  );
}
