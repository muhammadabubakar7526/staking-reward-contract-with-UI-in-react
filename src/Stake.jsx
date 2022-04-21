import { ethers } from "ethers";
import React from "react";
import { useState } from "react";
import abi from "./tokenName.json";

const Stake = () => {
 const [loading, setLoading] = useState(null);
  const stakeToken = async () => {
  
    let amount = document.getElementById("stake2").value;
    console.log(amount);
    amount = ethers.utils.parseUnits(amount, 18);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let dollar;
    dollar = new ethers.Contract(
      "0x8daB05C8272799f3d6085fA1D0c7B539F7f66200",
      abi,
      provider
    );
    const signer = provider.getSigner();
    const Contract = dollar.connect(signer);
    setLoading(true);
    await Contract.stake(amount);
    setLoading(false);

  };
  return (
    <div className="stake">
    <h1>STAKE TOKEN</h1>
      <input placeholder="amount" id="stake2"></input>
      <button onClick={stakeToken} className="stakeBtn">
      {loading?"staking.....":
        "Stake Token"
        }
      </button>
    </div>
  );
};
export default Stake;
