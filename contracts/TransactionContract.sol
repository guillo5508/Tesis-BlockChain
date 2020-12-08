pragma solidity ^0.6.1;

contract TransactionContract {
    constructor() public payable {
        //constructor
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function incrementBalance() public payable {
        // require(msg.value == amount);
    }

    function transferEthers(address payable account) external {
        account.transfer(address(this).balance);
    }
}
