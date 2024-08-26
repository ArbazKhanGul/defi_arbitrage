const { network, ethers } = require("hardhat");

const fundToken = async (contract, sender, recepient, amount) => {
  
  try{
  const FUND_AMOUNT = ethers.parseUnits(amount, 18);
  // fund erc20 token to the contract
  const whale = await ethers.getSigner(sender);
  // console.log("🚀 ~ fundToken ~ whale:", whale)

  const contractSigner = contract.connect(whale);
  // console.log("🚀 ~ fundToken ~ contractSigner:", contractSigner)
 let ba= await contractSigner.balanceOf(sender);

  await contractSigner.transfer(recepient, FUND_AMOUNT);}
  catch(e){
    console.log("🚀 ~ fundToken ~ e:", e)
    
  }
};

const fundContract = async (contract, sender, recepient, amount) => {
  
    await network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [sender],
  });

  // fund baseToken to the contract
  await fundToken(contract, sender, recepient, amount);
  await network.provider.request({
    method: "hardhat_stopImpersonatingAccount",
    params: [sender],
  });
};

module.exports = {
    fundContract: fundContract,
};
