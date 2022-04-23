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

import { Box, Button, Text, Grid, Flex, useColorMode, UnorderedList, ListItem, Image, HStack } from "@chakra-ui/react";
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
    <Box id="background" position="fixed" height="100%" width="100%" />
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
          <Image src={F3BridgeLogo} alt="logo" boxSize="400px" />
          <Text className="text-7xl" textAlign="right">
            F3Bridge
          </Text>
        </HStack>
        <Text ml={20} mt={10} mb={5} fontSize="2xl" textAlign="left">
          F3Bridge is a tool to bridge your existing Web2 groups and friends from Discord to the Web3 Lens Protocol.
        </Text>
        <Flex justifyContent="flex-end" alignItems="center">
          <Box mr={4}>
          <div>
        {isActive ? <>Connector is: {getName(connector)}</> : "Inactive"}
      </div>
      <button onClick={() => setModalShown(true)}>Connect Wallet</button>
      {modalShown && <ConnectionModal onClose={() => setModalShown(false)} />}

          </Box>
        </Flex>
      </Box>
    </Grid>
    </>
  );
}
