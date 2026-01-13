//SPDX-License-Identifier: MIT

pragma solidity 0.8.18;

contract SimpleStorage{
//Favourite number was initialised to default value
uint256 public myfavouriteNumber;

struct Person{
    uint256 favouriteNumber;
    string name;
}

Person[] public listOfPeople;

mapping(string => uint256) public nameToFavouriteNumber;

function store(uint256 _favouriteNumber) public{
    myfavouriteNumber = _favouriteNumber;
}

function retriever() public view returns(uint256){
    return myfavouriteNumber;
}

function addPerson(string memory _name, uint256 _favouriteNumber) public {
    listOfPeople.push(Person(_favouriteNumber, _name));
    nameToFavouriteNumber[_name]  = _favouriteNumber;

}

}

