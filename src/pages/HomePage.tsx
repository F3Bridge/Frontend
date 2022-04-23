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

import theme from "../styles/theme"
import { ChakraProvider, Box, Button, Text, Grid, Flex, useColorMode, UnorderedList, ListItem, Image, HStack } from "@chakra-ui/react";
import F3BridgeLogo from "../../f3bridge.png"

//import Markdown from "../components/Markdown.js";
//import explainer from "./text.md"

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
    <Box id="background" position="fixed" height="100%" width="100%" bg="brand.100" />
    <Box id="logo" position="fixed" height="100%" width="50%" right="400px" />

    <Grid
      p={4}
      h="100%"
      minH="100vh"
      placeContent="center"
      alignItems="center"
      flexDirection="column"
      bgPosition="center"
      bgAttachment="fixed"
      pos="relative"
      templateColumns={{ base: "auto", md: "1fr 1fr" }}
    >
      <Box ml={12}>
        <HStack>
          <Image src={F3BridgeLogo} alt="logo" boxSize="200px" />
          <Text className="text-7xl" textAlign="right">
            F3Bridge
          </Text>
        </HStack>
        <Text ml={20} mt={180} mb={5} className="text-2xl" textAlign="left">
          F3Bridge is a tool to bridge your existing Web2 groups and friends from Discord to the Web3 Lens Protocol.
        </Text>
        <Flex justifyContent="flex-end" alignItems="center">
          <Box mr={4}>
          </Box>
        </Flex>
      </Box>
    </Grid>

    <ChakraProvider theme={theme}>

    <Grid
        p={4}
        h="100%"
        minH="100vh"
        placeContent="center"
        alignItems="center"
        flexDirection="column"
        bgPosition="center"
        bgAttachment="fixed"
        pos="relative"
        templateColumns={{ base: "auto", md: "1fr 1fr" }}
      >
        <Box ml={12} textAlign="left">
          <Text className="text-4xl">Technologies used</Text>
          <Text className="text-3xl">Web2</Text>
          <Text className="text-2xl">Discord</Text>
          <Text mb={5}>
            A Discord bot allows you to connect to your Discord account,
            <br /> to discover friends who already have a Web3 (Lens Protocol) social profile.
  
          </Text>

          <Text className="text-3xl">Web3</Text>
          <UnorderedList>
          <ListItem>Lens Protocol</ListItem>
          <ListItem>IPFS</ListItem>
          <ListItem>WalletConnect</ListItem>
          <ListItem>Polygon</ListItem>
          </UnorderedList>
          <Text fontSize="4xl">FAQ</Text>
          <Text>
            Why not decentralize the registry?
          </Text>
          <Text>In theory, we could decentralize the Discord profile to Lens profile mapping.
          For example by enabling users to publish the hash of their Discord username into their Lens profile
          and then searching for matching profiles on-chain. <br/>
          However, it would be hard to independently verify the claim that they indeed own that Discord profile,
          and are not impersonating another user. <br/>
          Therefore, we use a trusted registry that verifies Discord and web3 ownership at the same time.
          Transitioning from web2 to web3 inevitably will require some centralized registries, but the good news is
          that once you and your friends and communities are set up on Web3, you can from then on fully determine what you publish,
          what you want to consume and/or moderate, without any risks of being deplatformed or monetized without your explicit permission.
          </Text>
        </Box>

        <Box width="100%" marginTop="auto" pb={12}>
          <Text fontSize="xxx-large" align="center">
            Join us now!
          </Text>
          <Flex justifyContent="center">
            <Box mr={4}>
              {" "}
              {isActive ? <>Connector is: {getName(connector)}</> : "Inactive"}
            <button onClick={() => setModalShown(true)}>Connect Wallet</button>
            {modalShown && <ConnectionModal onClose={() => setModalShown(false)} />}

            </Box>
            
              <Link to="/DiscordPage">
                <Button>Get started </Button>
              </Link>


          </Flex>
        </Box>
      </Grid>

      </ChakraProvider>

    </>
  );
}
