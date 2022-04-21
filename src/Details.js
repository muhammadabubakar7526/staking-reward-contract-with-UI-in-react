import React, { useState } from "react";
import { ethers } from "ethers";
import abi from "./tokenName.json";

const Details = () => {
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [supply, setSupply] = useState(null);
  const [balance, setBalance] = useState(null);

  const getName = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let dollar;
    dollar = new ethers.Contract(
      "0x8daB05C8272799f3d6085fA1D0c7B539F7f66200",
      abi,
      provider
    );
    setName(await dollar.name());
  };
  const getSymbol = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let dollar;
    dollar = new ethers.Contract(
      "0x8daB05C8272799f3d6085fA1D0c7B539F7f66200",
      abi,
      provider
    );
    setSymbol(await dollar.symbol());
  };

  const myAddress = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    // console.log(signer.getAddress(),"this is balance")
    setAddress(await signer.getAddress());
  };
  const mybalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let dollar;
    dollar = new ethers.Contract(
      "0x8daB05C8272799f3d6085fA1D0c7B539F7f66200",
      abi,
      provider
    );
    const signer = provider.getSigner();
    let bal = ethers.BigNumber.from(
      await dollar.balanceOf(signer.getAddress())
    ).toString();
    bal = ethers.utils.formatUnits(bal, 18);
    setBalance(bal);
    console.log(bal);
    // console.log(signer.getAddress(),"this is balance")
  };

  

  window.onload=function(){
    getName();
    getSymbol();
    mybalance();
    myAddress();
  
  }
  
  return (
    <div className="details">
      <div className="inner">
        <h2>Details About Token</h2>
        <div className="name">
          <button className="btn1" onClick={getName}>
            {" "}
            Get Name
          </button>
          <p>{name}</p>
        </div>

        <div className="symbol">
          <button className="btn1" onClick={getSymbol}>
            symbol
          </button>
          <p>{symbol}</p>
        </div>

        <div className="totalSupply">
          <button className="btn1" onClick={mybalance}>
            Balnace
          </button>
          <p>{balance}</p>
        </div>
        <h3>Wallet Address</h3>
        <div className="stakeAmount">
          <button className="btn1" onClick={myAddress}>
            Address
          </button>
          <p>{address}</p>
        </div>
      </div>
   
    </div>
  );
};

export default Details;
