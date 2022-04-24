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
import { FriendsPage } from './FriendsPage';

const LensLogo = "https://icodrops.com/wp-content/uploads/2022/02/LensProtocol_logo-1.jpeg"

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
	`}
`
const Logo = styled.div`
	${tw`
		flex
		p-[5rem]
		//background-image[url(https:/\\/s2.favim.com/orig/150811/clouds-gif-pink-purple-Favim.com-3096843.gif)]
		background-image[url(https:/\\/i.imgur.com/gGtBm3F.jpeg)]
		bg-contain
		bg-center
		w-screen
		hover:bg-auto
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
export function HomePage2() {
  const { connector, isActive, provider } = useWeb3React();
  const [modalShown, setModalShown] = useState(false);
  return (
	<HomeSectionContainer name="HomePage2">
		{/*<img src={F3BridgeLogo} alt="logo" width={100} height={100} />
		<LandingSectionContainer>
			<Logo>
				F3BRIDGE
			</Logo>*/}
			<div className="ml-64 mr-64">
			<p className="flex pb-8 justify-center text-4xl font-bold text-white/100">
			FAQ
			</p>
			<p className="flex pb-8 justify-center text-lg font-bold text-white/90">
			Why not decentralize the registry?
			</p>

			<p className="flex pb-8 align-middle text-md font-medium text-white/90 ">
			In theory, we could decentralize the Discord profile to Lens profile mapping.
		    For example by enabling users to publish the hash of their Discord username into their Lens profile
		    and then searching for matching profiles on-chain. <br className="mt-2"/>
		    However, it would be hard to independently verify the claim that they indeed own that Discord profile,
		    and are not impersonating another user. <br className="mt-2"/>
		    Therefore, we use a trusted registry that verifies Discord and web3 ownership at the same time.
		    Transitioning from web2 to web3 inevitably will require some centralized registries, but the good news is
		    that once you and your friends and communities are set up on Web3, you can from then on fully determine what you publish,
		    what you want to consume and/or moderate, without any risks of being deplatformed or monetized without your explicit permission.
			</p>
			</div>

		<div className="flex text-white text-2xl justify-center mt-12 shadow-2xl">

		 </div>
		 <form>
			<Link to="FriendsPage">
				<div className="flex justify-center lg:mt-36">
				<button className="text-[#c6dda5] border-4 font-medium text-8xl rounded-md border-white/50" type="button">
					Enter App
				</button>
				</div>

			</Link>
			</form>

			<div className="flex lg:space-x-80 absolute bottom-0 flex-row space-x-10 justify-center">
			<img src="https://icodrops.com/wp-content/uploads/2022/02/LensProtocol_logo-1.jpeg" width="200" height="200"/>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ipfs-logo-1024-ice-text.png/768px-Ipfs-logo-1024-ice-text.png" width="200" height="200"/>
			<img src="https://cryptologos.cc/logos/polygon-matic-logo.png" width="200"/>
			<img src="https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png" width="200" />
			</div>
	</HomeSectionContainer>


    //<>
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
  );
}
