import React from "react";
import { useState ,useEffect } from "react";
import { ethers } from "ethers";
import abi from "./tokenName.json";



const Claim = () => {
  const [loading, setLoading] = useState(null);
  const [balance, setBalance] = useState(null);
  const [name, setName] = useState(null);


  const claimToken = async () => {
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
    await Contract.claimReward();
    setLoading(false);

   

  };

  const mybalanceOfReward = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let dollar;
    dollar = new ethers.Contract(
      "0xdA5f15205B51bBA33A8948d78924a63AcCaB21eB",
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





  const getName = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let dollar;
    dollar = new ethers.Contract(
      "0xdA5f15205B51bBA33A8948d78924a63AcCaB21eB",
      abi,
      provider
    );
    setName(await dollar.symbol());
  };


  useEffect(() => {
    mybalanceOfReward()
    getName();
   
  }, [])




  return (
    <div className="claim">
    <div className="reward"><button className="btn1" onClick={mybalanceOfReward}> my reward</button> {balance}    {name}</div>
    <h1>CLAIM YOUR REWARD </h1>

      <button onClick={claimToken} className="claimBtn">
        {loading? "Claiming....": 
        "CLAIM"}
      </button>
    </div>
  );
};
export default Claim;
