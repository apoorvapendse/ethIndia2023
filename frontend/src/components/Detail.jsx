import React from 'react'
import NavBar from './Navbar'

import { ChatView, ChatUIProvider, darkChatTheme, ChatViewComponent } from "@pushprotocol/uiweb";
import { useState } from 'react';
import { ethers } from 'ethers';
import { CONSTANTS } from '@pushprotocol/restapi';

export default function  Detail(){
    const [signer, setSigner] = useState(null);
 
    const connectWallet = async () => {
      // Demo only supports MetaMask (or other browser based wallets) and gets provider that injects as window.ethereum into each page
      const provider = new ethers.providers.Web3Provider(window.ethereum);
  
      // Get provider
     await provider.send("eth_requestAccounts", []);
  
      // Grabbing signer from provider
      const signer = provider.getSigner();
  
      // store signer
      setSigner(signer);
    }
  
    const disconnectWallet = async () => {
      setSigner(null);
    };
  

 return (
    <>
    <NavBar/>
    <div class="position: absolute; bottom: 0; width: 100%; height: 60px; background-color: #f0f0f0;">
   <main className="flex min-h-screen flex-col items-center justify-center p-24">
   {  !signer ?  (
      <button type="button" onClick={connectWallet} className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Connect Wallet</button>
   )

   :
  
   <ChatUIProvider theme={darkChatTheme} env={CONSTANTS.ENV.STAGING}>
     <ChatViewComponent
       chatId="bdcb7f71f85b0eb967055149bad6d2b9a1d0ac79ead6c133d667d0354d2be82f"
       limit={10}
       isConnected={true}
       signer={signer}
      
     />
   </ChatUIProvider>
 }
   {/* <ConnectButton /> */}
   </main>
   </div>
   <h1>Room</h1>
   </>
 )

}
