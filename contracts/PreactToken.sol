//SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PreactToken is ERC20 {
  constructor(string memory name, string memory symbol) ERC20(name, symbol) {
    // Mints 100k tokens
    _mint(msg.sender, 100000 * (10 ** 18));
  }
}
