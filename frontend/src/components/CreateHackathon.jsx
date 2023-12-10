
import React,{useEffect,useState} from 'react'
import abiData from '../NFT_ABI/NFTabi.js'
import { ethers } from "ethers";

import { Form } from '@web3uikit/core';
import NavBar from './Navbar.jsx';

const CreateHackathon = () => {

    const [account, setAccount] = useState();
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
  
    useEffect(() => {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
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

    async function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <div>
          <NavBar/>
            <h1>Create</h1>
            <Form
  buttonConfig={{
    onClick: function noRefCheck(){},
    theme: 'primary'
  }}
  data={[
    {
      inputWidth: '100%',
      name: 'first name',
      type: 'text',
      value: ''
    },
    {
      inputWidth: '100%',
      name: 'your email',
      type: 'email',
      validation: {
        regExp: '^[^@s]+@[^@s]+.[^@s]+$',
        required: true
      },
      value: ''
    },
    {
      name: 'your digits',
      type: 'tel',
      validation: {
        required: true
      },
      value: ''
    },
    {
      name: 'your password',
      type: 'password',
      validation: {
        characterMaxLength: 20,
        characterMinLength: 6,
        required: true
      },
      value: ''
    },
    {
      name: 'Rate our form? 1-10',
      type: 'number',
      validation: {
        numberMax: 10,
        numberMin: 1,
        required: true
      },
      value: ''
    },
    {
      name: 'pizza fav',
      options: [
        'pineapple',
        'peppers',
        'chillies'
      ],
      type: 'box',
      value: 'what toppings do you like?'
    },
    {
      name: 'Morning checklist',
      options: [
        'say GM',
        'make coffee',
        'build killer web3uiKit'
      ],
      type: 'switch',
      validation: {
        required: true
      },
      value: 'Check list'
    },
    {
      name: 'pokemon',
      options: [
        'charmander',
        'squirtle',
        'bulbasaur'
      ],
      type: 'radios',
      value: 'who\'s that pokemon?'
    },
    {
      inputWidth: '100%',
      name: 'Image',
      type: 'file',
      value: ''
    },
    {
      inputWidth: '100%',
      name: 'Any more comments?',
      type: 'textarea',
      validation: {
        required: true
      },
      value: ''
    }
  ]}
  onSubmit={function noRefCheck(){}}
  title="Test form"
/>
        </div>
    )



export default CreateHackathon