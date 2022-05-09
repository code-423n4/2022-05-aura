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
    sources: "./contracts",
  },
  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: compilerSettings,
      },
      {
        version: "0.8.11",
        settings: compilerSettings,
      },
    ],
  },
};
