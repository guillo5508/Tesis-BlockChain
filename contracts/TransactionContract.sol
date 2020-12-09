pragma solidity ^0.6.1;

contract TransactionContract {
    // constructor
    constructor() public payable {}

    // Devuelve el estado del balance del contrato
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // Agrega un valor al balance del contrato
    function incrementBalance() public payable {}

    // Transfiere todo el balance actual del contrato a una cuenta especifica
    function transferEthers(address payable account) external {
        account.transfer(address(this).balance);
    }
}
