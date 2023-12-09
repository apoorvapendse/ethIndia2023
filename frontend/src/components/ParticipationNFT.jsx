import React, { useEffect, useState } from 'react';
import abiData from '../NFT_ABI/NFTabi.js';
import { ethers } from 'ethers';
import minNFT from '../../nftUpload/uploadNFT.js';

const ParticipationNFT = () => {
  const [account, setAccount] = useState();
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  // State for form fields
  const [imageUrl, setImageUrl] = useState('');
  const [nftName, setNftName] = useState('');
  const [nftDesc, setNftDesc] = useState('');
  const [hackathonName, setHackathonName] = useState('');
  const [hackathonId, setHackathonId] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [participantId, setParticipantId] = useState('');

  useEffect(() => {
    const provider = new ethers.BrowserProvider(window.ethereum);

    const wallet = async () => {
      if (provider) {
        let accounts = await provider.send('eth_requestAccounts', []);
        window.ethereum.on('accountsChanged', () => {
          window.location.reload();
        });
        window.ethereum.on('chainChanged', () => {
          window.location.reload();
        });
        setAccount(accounts[0]);

        const signer = await provider.getSigner();

        let contractAddress = '0x0e8FE259a3D49fA2c003d9B5BEce82A86ffc96F4';

        const contract = new ethers.Contract(contractAddress, abiData, signer);

        setContract(contract);
        setProvider(provider);
      } else {
        console.error('METAMASK NOT CONNECTED');
      }
    };

    provider && wallet();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("FORM IS SUBMITTED!");

    // Use the form values in your logic
    const nftData = {
      imageUrl,
      nftName,
      nftDesc,
      hackathonName,
      hackathonId,
      participantName,
      participantId,
    };

    
    // Assuming there is a function in your contract to mint the NFT
    try {
      const result = await minNFT(
        imageUrl,
        nftName,
        nftDesc,
        hackathonName,
        hackathonId,
        participantName,
        participantId
      );

      // Handle the result or add additional logic as needed
      console.log('NFT Minted:', result);
      const tokenNumber = await contract.awardItem(account,result);
      console.log("NFT token number:",tokenNumber);
    } catch (error) {
      console.error('Error Minting NFT:', error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Image URL:
        <input
          type="url"
          placeholder="Enter Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        NFT Name:
        <input
          type="text"
          placeholder="Enter NFT name"
          value={nftName}
          onChange={(e) => setNftName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        NFT Description:
        <input
          type="text"
          placeholder="Enter NFT desc"
          value={nftDesc}
          onChange={(e) => setNftDesc(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Hackathon Name:
        <input
          type="text"
          placeholder="Enter Hackathon name"
          value={hackathonName}
          onChange={(e) => setHackathonName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Hackathon ID:
        <input
          type="text"
          placeholder="Enter Hackathon ID"
          value={hackathonId}
          onChange={(e) => setHackathonId(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Participant Name:
        <input
          type="text"
          placeholder="Enter Participant name"
          value={participantName}
          onChange={(e) => setParticipantName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Participant ID:
        <input
          type="text"
          placeholder="Enter Participant ID"
          value={participantId}
          onChange={(e) => setParticipantId(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Generate and Send NFT</button>
    </form>
  );
};

export default ParticipationNFT;
