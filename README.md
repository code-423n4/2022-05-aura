# Aura Finance contest details

- $142,500 USDC main award pot
- $7,500 USDC gas optimization award pot
- Join [C4 Discord](https://discord.gg/code4rena) to register
- Submit findings [using the C4 form](https://code4rena.com/contests/2022-05-aura-finance-contest/submit)
- [Read our guidelines for more details](https://docs.code4rena.com/roles/wardens)
- Starts May 11, 2022 13:00 UTC
- Ends May 25, 2022 12:59 UTC

## What is Aura

Aura Finance is a protocol built on top of the Balancer system to provide maximum incentives to Balancer liquidity providers and BAL stakers (into veBAL) through social aggregation of BAL deposits and Aura’s native token.

## Links

- [Docs](https://docs.aura.finance/)
- [Aura:Convex diff](https://github.com/aurafinance/convex-platform/pull/23/files?file-filters%5B%5D=.sol&show-viewed-files=true&show-deleted-files=false)
- [Aura Lite Repo](https://github.com/aurafinance/aura-contracts-lite)

## Repo

Modified files from the Convex protocol are in the `convex-platform/` folder. This strategy has been taken to preserve the file formatting to make diff'ing the files easier

Contracts that are core to the system and flow of user funds remain in the `convex-platform/` subdirectory, with the contracts in `contracts/` being either peripheral (AuraClaimZap, AuraStakingProxy, AuraVestedEscrow, CrvDepositorWrapper, ExtraRewardsDistributor), Aura Specific (Aura, AuraMinter) or those that required bigger changes (in the case of AuraLocker).

original convex code -> new aura versions

- `convex-platform/contracts/contracts/Cvx.sol` -> `contracts/Aura.sol`
- `convex-platform/contracts/contracts/ClaimZap.sol` -> `contracts/AuraClaimZap.sol`
- `convex-platform/contracts/contracts/CvxLocker.sol` -> `contracts/AuraLocker.sol`
- `convex-platform/contracts/contracts/interfaces/BoringMath.sol` -> `contracts/AuraMath.sol`
- `convex-platform/contracts/contracts/CvxStakingProxy.sol` -> `contracts/AuraStakingProxy.sol`
- `convex-platform/contracts/contracts/VestedEscrow.sol` -> `contracts/AuraVestedEscrow.sol`
- `convex-platform/contracts/contracts/vlCvxExtraRewardDistribution.sol` -> `contracts/ExtraRewardsDistributor.sol`

## Diagrams

### Aura Voting

![Aura Voting](https://user-images.githubusercontent.com/97352567/167505092-07ddbd56-df97-4cd9-802f-d9387c21cf55.jpg)

### Booster Pools

![Booster Pools Rewards (1)](https://user-images.githubusercontent.com/97352567/167617925-9012308b-9540-4302-8a5f-72a47729bad4.jpg)

### auraBAL Rewards

![Aura Rewards (1)](https://user-images.githubusercontent.com/97352567/167617939-fb22c171-5c3b-440a-8fdc-cde822f50306.jpg)

