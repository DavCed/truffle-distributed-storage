const DistributedStorage = artifacts.require("DistributedStorage");

module.exports = function (deployer) {
  deployer.deploy(DistributedStorage);
};
