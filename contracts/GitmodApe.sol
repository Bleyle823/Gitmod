// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Drive {
    struct Access {
        address User;
        bool Allow;
    }

    mapping(address => string[]) Links;
    mapping(address => mapping(address => bool)) Ownership;
    mapping(address => mapping(address => bool)) PreviousState;
    mapping(address => Access[]) AccessList;
    mapping(address => uint256) tokenBalances; // Track token balances
    IERC20 public apeCoin; // The Ape coin token contract

    event Tipped(address indexed sender, address indexed recipient, uint256 amount);

    constructor(address _apeCoinAddress) {
        apeCoin = IERC20(_apeCoinAddress);
    }

    function Upload(string memory URL) external {
        Links[msg.sender].push(URL);
    }

    function Display(address User) external view returns (string[] memory) {
        require(User == msg.sender || Ownership[User][msg.sender], "You Don't Have Access");
        return Links[User];
    }

    function Allow(address User) external {
        Ownership[msg.sender][User] = true;
        if (PreviousState[msg.sender][User]) {
            for (uint i = 0; i < AccessList[msg.sender].length; i++) {
                if (AccessList[msg.sender][i].User == User) {
                    AccessList[msg.sender][i].Allow = true;
                }
            }
        } else {
            AccessList[msg.sender].push(Access(User, true));
            PreviousState[msg.sender][User] = true;
        }
    }

    function DisAllow(address User) public {
        Ownership[msg.sender][User] = false;
        for (uint i = 0; i < AccessList[msg.sender].length; i++) {
            if (AccessList[msg.sender][i].User == User) {
                AccessList[msg.sender][i].Allow = false;
            }
        }
    }

    function ShareAccess() public view returns (Access[] memory) {
        return AccessList[msg.sender];
    }

    function tipSender(address recipient, uint256 amount) public {
        require(recipient != address(0), "Invalid recipient address");
        require(amount > 0, "Tip amount must be greater than 0");

        apeCoin.transferFrom(msg.sender, address(this), amount);
        tokenBalances[recipient] += amount;
        emit Tipped(msg.sender, recipient, amount);
    }

    function withdrawBalance() public {
        uint256 balance = tokenBalances[msg.sender];
        require(balance > 0, "No balance to withdraw");

        tokenBalances[msg.sender] = 0;
        apeCoin.transfer(msg.sender, balance);
    }
}