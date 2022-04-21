import React from 'react';
import { ethers } from 'ethers';
import Web3Modal from "web3modal";
import { useState } from 'react';
import { providerOptions } from "./providerOptions";
const Connect = () => {
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [error, setError] = useState();
 const [loading, setLoading] = useState(null);

  const web3=new  Web3Modal(
    {
      // cacheProvider: true, // optional
      providerOptions
    }
  );
  const connectWallet = async () => {
    try {
      const provider = await web3.connect();
      console.log(provider);
      const library = new ethers.providers.Web3Provider(provider);
      setProvider(provider);
      setLibrary(library);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);

    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    var chian= parseInt(chainId);
    if(chian!==3){
      setError("wrong network");
      setLoading(true);
    }
    console.log(chian, "this is chain id");
    window.onload();
  }

  return (
    <div className='connect' >
    <>
        <button className='cntBtn' onClick={connectWallet}> 
        {loading? "Wrong Network....": 
        "Connect Your Wallet"}</button>
   {/* <button>{error}</button> */}
        </>
    </div>
  )
}
export default Connect;