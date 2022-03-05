const MyNFTCollection = artifacts.require("MyNFTCollection")

module.exports = async function (deployer) {
  await deployer.deploy(MyNFTCollection)
}