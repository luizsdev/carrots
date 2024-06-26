// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Cooperative is ERC20{
    address bank;
    address usdtContract;
    uint private _tokenPrice;
    uint private _goal;
    uint private _supply;
    string private _imagem;
    constructor(string memory name_, string memory symbol_,uint tokenPrice_, uint supply_, string memory imagem_, address bank_, uint goal_)
    ERC20(name_ , symbol_){
        bank = bank_;
        usdtContract = 0xFc2AcC124Bd321615487265F1115C7c16a8F8d4A;
        _mint(bank, supply_ * 10 ** 18);
        _tokenPrice = tokenPrice_;
        _supply = supply_;
        _imagem = imagem_;
        _goal = goal_;
    }

    function tokenBank() external view returns(address){
        return bank;
    }

    function tokenPrice() external view returns(uint){
        return _tokenPrice;
    }

    function tokenImage() external view returns(string memory){
        return _imagem;
    }

    function transferToBank(uint256 _amountToken, address _from)  private returns(bool){
        ERC20 usdt = ERC20(usdtContract);
        usdt.transferFrom(_from, bank, _amountToken * _tokenPrice);
        return true;
    }


    function swap(uint _amount, address _from) external returns(bool){
        bool txx = transferToBank(_amount, _from);
        require(txx == true, "falha no envio dos usdt's");
        ERC20 token = ERC20(address(this));
        token.transferFrom(bank, _from, _amount);
        return true;
    }
}

contract CooperativeFactory{
    Cooperative[] cooperatives;

    function create(string memory _name, string memory _symbol,uint _tokenPrice, uint _supply, string memory _imagem,uint _goal) public {
        address _bank = msg.sender;
        Cooperative cooperative = new Cooperative(_name, _symbol, _tokenPrice, _supply, _imagem, _bank, _goal);
        cooperatives.push(cooperative);
    }

    function returnCarsArray()external view returns(Cooperative[] memory){
        return cooperatives;
    }
}




contract Dolar is ERC20{
    address admin;
    constructor()
    ERC20("Dolares","USD"){
        admin = msg.sender;
        _mint(admin, 1000000 * 10 ** 18);
    }
}
