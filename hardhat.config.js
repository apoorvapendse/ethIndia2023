require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString()


module.exports = {
  solidity:{
    compilers:[
        {version: "0.8.8"},
        {version: "0.8.20"},
        {version: "0.8.4"}
    ]},
  networks: {
    hardhat: {
      chainId: 31337
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/6cf15fb090244539aa83d17354369e86",
      accounts: ["8078630979a21ed6ffe82222ce219d622420f685929f185028a4207a06e0144f"]
    },
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io/" || "",
      accounts:[privateKey]
    }
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   accounts: [process.env.pk]
    // }
  }
};

// 0x67707460E2498534DDDBEDc228Fc523F2eF6C1A4
//mumbai deploy

// 0xEB07e060FD622E3D688b37dB565b5a4eF254CA6d
//devfolio contrac scroll sepolia deploy