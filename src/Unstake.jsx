import { ethers } from "ethers";
import React from "react";
import { useState ,useEffect} from "react";

import abi from "./tokenName.json";


const Unstake = () => {
  
  const [balance, setBalance] = useState(null);

 const [loading, setLoading] = useState(null);
 const [name, setName] = useState(null);


  const unstakeToken = async () => {
  
    let amount = document.getElementById("unstake2").value;
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

    await Contract.unStake(amount);
    setLoading(false);

  };


  const mybalanceOfStaking = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let dollar;
    dollar = new ethers.Contract(
      "0x8daB05C8272799f3d6085fA1D0c7B539F7f66200",
      abi,
      provider
    );
    const signer = provider.getSigner();
    const stackuser = await dollar.stackUsers(signer.getAddress())
    let bal = ethers.BigNumber.from(
    stackuser.amount).toString();
    bal = ethers.utils.formatUnits(bal, 18);
    setBalance(bal);
    console.log(bal);
    // console.log(signer.getAddress(),"this is balance")
  };


  const getName = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let dollar;
    dollar = new ethers.Contract(
      "0x8daB05C8272799f3d6085fA1D0c7B539F7f66200",
      abi,
      provider
    );
    setName(await dollar.symbol());
  };


  useEffect(() => {
    mybalanceOfStaking();
    getName();
    
  }, [])

  
  return (
    <div className="unstake">
    <div className="totalStake"><button className="btn1"   onClick={mybalanceOfStaking}>total stake</button> {balance} {name}</div>

    <h1>UNSTAKE TOKEN</h1>
      <input placeholder="amount" id="unstake2"></input>
      <button onClick={unstakeToken} className="unstakeBtn">
      {loading?"unstaking.....":
        "unstake Token"
        }

      </button>
    </div>
  );
};
export default Unstake;
