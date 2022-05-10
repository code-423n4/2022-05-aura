const compilerSettings = {
  metadata: {
    // Not including the metadata hash
    // https://github.com/paulrberg/solidity-template/issues/31
    bytecodeHash: "none",
  },
  // Disable the optimizer when debugging
  // https://hardhat.org/hardhat-network/#solidity-optimizer-support
  optimizer: {
    enabled: true,
    runs: 800,
  },
};

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      allowUnlimitedContractSize: false,
    },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./convex-platform/contracts/contracts",
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
