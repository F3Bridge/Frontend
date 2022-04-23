import { useState, useEffect } from "react";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";

const Superfluid = () => {
  const [recipient, setRecipient] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [flowRate, setFlowRate] = useState("");
  const [flowRateDisplay, setFlowRateDisplay] = useState("");
  const [address, setAddress] = useState("");

  const { provider } = useWeb3React();

  const [actualFlow, setActualFlow] = useState("");

  useEffect(() => {
    async function getData() {
      console.log("getsexecuted");
      const actualFlow = await getFlow();
      /* @ts-ignore */
      setActualFlow(actualFlow);
    }

    getData();
  }, [flowRate]);

  useEffect(() => {
    if (!provider) return;
    /* @ts-ignore */
    (provider as Web3Provider).getSigner(0).getAddress().then(setAddress);
  }, [provider]);

  function getDAITokenContract(chainId: any) {
    switch (chainId) {
      case 42:
        // kovan
        return "0xe3cb950cb164a31c66e32c320a800d477019dcff";
      case 4:
        // rinkeby
        return "0x745861AeD1EEe363b4AaA5F1994Be40b1e05Ff90";
      case 80001:
        // mumbai
        return "0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f";
      default:
        // eslint-disable-next-line no-throw-literal
        throw `Unsupported network: ${chainId}`;
    }
  }

  async function getSuperfluidFramework() {
    /* @ts-ignore */
    const signer = (provider as Web3Provider).getSigner(0);

    const chainId = 80001;
    const sf = await Framework.create({
      chainId,
      provider,
    });

    const daiTokenContract = getDAITokenContract(chainId);

    return { sf, daiTokenContract, signer };
  }

  async function deleteFlow() {
    const { sf, daiTokenContract, signer } = await getSuperfluidFramework();

    try {
      const deleteFlowOperation = sf.cfaV1.deleteFlow({
        sender: address,
        receiver: recipient,
        superToken: daiTokenContract,
      });
      console.log("Deleting your stream...");

      await deleteFlowOperation.exec(signer);

      console.log(
        `Congrats - you've just deleted your money stream!
           Super Token: DAIxF
           Sender: ${address}
           Receiver: ${recipient}
        `
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function createNewFlow() {
    const { sf, daiTokenContract, signer } = await getSuperfluidFramework();

    try {
      const createFlowOperation = sf.cfaV1.createFlow({
        receiver: recipient,
        flowRate: flowRate,
        superToken: daiTokenContract,
      });

      console.log("Creating your stream...");

      const result = await createFlowOperation.exec(signer);
      console.log(result);

      console.log(
        `Congrats - you've just created a money stream!
        View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
        Super Token: DAIx
        Sender: ${signer}
        Receiver: ${recipient},
        FlowRate: ${flowRate}
        `
      );
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }

  async function getFlow() {
    const { sf, daiTokenContract, signer } = await getSuperfluidFramework();

    const response = await sf.cfaV1.getFlow({
      superToken: daiTokenContract,
      sender: address,
      receiver: recipient,
      providerOrSigner: signer,
    });

    return response;
  }

  function calculateFlowRate(amount: any) {
    if (typeof Number(amount) !== "number" || isNaN(Number(amount)) === true) {
      alert("You can only calculate a flowRate based on a number");
      return;
    } else if (typeof Number(amount) === "number") {
      if (Number(amount) === 0) {
        return 0;
      }
      const amountInWei = ethers.BigNumber.from(amount);
      const monthlyAmount = ethers.utils.formatEther(amountInWei.toString());
      /* @ts-ignore */
      const calculatedFlowRate = monthlyAmount * 3600 * 24 * 30;
      return calculatedFlowRate;
    }
  }

  const handleFlowRateChange = (e: any) => {
    setFlowRate(e.target.value);
    let newFlowRateDisplay = calculateFlowRate(e.target.value);
    /* @ts-ignore */
    setFlowRateDisplay(newFlowRateDisplay.toString());
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid #cccccc",
          padding: 16,
          width: 400,
          margin: "auto",
          marginTop: 64,
        }}
      >
        <input
          placeholder="Recipient"
          onChange={(event) => setRecipient(event.target.value)}
        />
        <input placeholder="Flow rate" onChange={handleFlowRateChange} />
        <button
          style={{ marginTop: 8 }}
          onClick={() => {
            createNewFlow();
          }}
        >
          Create stream!
        </button>
      </div>

      <div className="description">
        <div className="calculation">
          <p>Your stream will be equal to:</p>
          <p>
            <b>${flowRateDisplay !== " " ? flowRateDisplay : 0}</b> DAIx/month
          </p>
        </div>
      </div>
      <div
        style={{
          border: "1px solid #cccccc",
          padding: 16,
          width: 400,
          margin: "auto",
          marginTop: 64,
        }}
      >
        {/* @ts-ignore */}
        {actualFlow && actualFlow.flowRate !== 0 ? (
          <>
            <button
              onClick={async () => {
                deleteFlow();
              }}
            >
              DELETE STREAM
            </button>
            <div />
            <div>
              <dt>Total deposit </dt>
              {/* @ts-ignore */}
              <dd> {actualFlow.deposit}</dd>
              <dt>Flow per second </dt>
              {/* @ts-ignore */}
              <dd> {actualFlow.flowRate}</dd>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Superfluid;
