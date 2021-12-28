const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const MyToken = artifacts.require("MyToken");
const MyTokenV1 = artifacts.require("MyTokenV1");

module.exports = async function (deployer) {
  await deployProxy(MyToken, { deployer, kind: "uups" });
  await upgradeProxy(MyToken.address, MyTokenV1, { deployer, kind: "uups" })
};
