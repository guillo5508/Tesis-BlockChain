pragma solidity ^0.6.1;

contract testcontract {
    uint256 public saldo;

    event Set(address caller, uint256 _value);

    constructor() public {
        saldo = 0;
    }

    function ingresar(uint256 x) public {
        saldo += x;
        emit Set(msg.sender, x);
    }

    function retirar(uint256 x) public {
        saldo -= x;
        emit Set(msg.sender, x);
    }

    function getSaldo() public view returns (uint256 retVal) {
        return saldo;
    }
}
