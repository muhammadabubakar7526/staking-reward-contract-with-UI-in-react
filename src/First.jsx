import { ethers } from "ethers";
import React, { useState } from "react";
import abi from "./tokenName.json";


const First = () => {
  const [loading, setLoading] = useState(null);
  const mintToken = async () => {
    let address = document.getElementById("mint1").value;
    console.log(address);
    let amount = document.getElementById("mint2").value;
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
    await Contract.mint(address, amount);
    setLoading(false);

  };
  return (
    <div className="mint">
    <h1>MINT TtOKEN</h1>
      <input placeholder="address" id="mint1"></input>
      <input placeholder="amount" id="mint2"></input>
      <button onClick={mintToken} className="mintBtn">
      {loading?"minting......":
        "mint Token"
        }
      </button>
    </div>
  );
};
export default First;
