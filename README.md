# Truffle Smart Contract Development

## Description

A smart contract development project with a smart contract coded to deploy with a script onto any blockchain network configured in this project.

### Installation

1. Run [Ganache](https://trufflesuite.com/ganache/) blockchain network

**_NOTE:_**

- Any blockchain network can be configured in the **_truffle-config.js_** file just like how Ganache is already configured there

2. Provide an account address(public key) from Ganache in the network section in the **_truffle-config.js_** file

3. Run truffle commands

```shell
truffle compile
truffle migrate --network ganache
```
