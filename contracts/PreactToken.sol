//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";


// This is the main building block for smart contracts.
contract PreactToken {
  string public name = "PreactToken";
  string public symbol = "PT";

  uint256 public totalSupply = 1000000;
  address public owner;
  mapping(address => uint256) balances;

  constructor() {
    balances[msg.sender] = totalSupply;
    owner = msg.sender;
  }

  function transfer(address to, uint256 amount) external {
    require(balances[msg.sender] >= amount, "Not enough tokens");

    console.log(
      "Transferring from %s to %s %s tokens",
      msg.sender,
      to,
      amount
    );

    balances[msg.sender] -= amount;
    balances[to] += amount;
  }

  function balanceOf(address account) external view returns (uint256) {
    return balances[account];
  }
}
