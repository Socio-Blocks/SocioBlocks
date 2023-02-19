const hre = require("hardhat");

async function main() {
    const Social = await hre.ethers.getContractFactory("SocialCoins");
    const social = await Social.deploy();

    await social.deployed();
    console.log("SocialCoins token contract deployed to: ", social.address); // Logs the address to which our contract is deployed
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
