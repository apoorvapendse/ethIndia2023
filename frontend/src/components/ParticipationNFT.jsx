import React,{useEffect,useState} from 'react'
import abiData from '../NFT_ABI/NFTabi.js'
import { ethers } from "ethers";

const ParticipationNFT = () => {

    const [account, setAccount] = useState();
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
  
    useEffect(() => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      //the above line will connect u to metamask
      const wallet = async () => {
        if (provider) {
          let accounts = await provider.send("eth_requestAccounts", []);
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          setAccount(accounts[0]);
  
          const signer = await provider.getSigner();
  
          const address = await signer.getAddress();
  
          // console.log(accounts);
          let contractAddress = "0x0e8FE259a3D49fA2c003d9B5BEce82A86ffc96F4";
  
          const contract = new ethers.Contract(
            contractAddress,
            abiData,
            signer
          );
  
          setContract(contract);
          setProvider(provider);
        } else {
          console.error("METAMASK NOT CONNECTED");
        }
      };
  
      provider && wallet();
    }, []);

    return (
        <>
           

                <input type="url" name="" id="" placeholder='Enter Image URL' />
                <br />
                <input type='text' placeholder='Enter NFT name' />
                <br />
                <input type='text' placeholder='Enter NFT desc' />
                <br />
                <input type='text' placeholder='Enter Hackathon name' />
                <br />
                <input type='text' placeholder='Enter Hackathon ID' />
                <br />
                <input type='text' placeholder='Enter Participant name' />
                <br />
                <input type='text' placeholder='Enter Participant ID' />
                <br />
                <input type='text' placeholder='Enter NFT name' />


            
        </>
    )
}

export default ParticipationNFT