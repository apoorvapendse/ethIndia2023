const hre = require("hardhat");
const fs = require('fs');

async function main() {
  /* these two lines deploy the contract to the network */
  const Dev = await hre.ethers.getContractFactory("Devfolio");
  const dev = await Dev.deploy();

  await dev.deployed();
  console.log("Devfolio deployed to:", dev.address);
  
  /* this code writes the contract addresses to a local */
  /* file named config.js that we can use in the app */
  // fs.writeFileSync('./config.js', `
  // export const contractAddress = "${blog.address}"
  // export const ownerAddress = "${blog.signer.address}"
  // `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });