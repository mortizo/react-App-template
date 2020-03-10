pragma solidity >=0.5.16 <0.7.0;

contract Contract001 {

  address private owner;
  string private _data;

  constructor() public {
    owner = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function setData(string memory _paramData) public{
    _data = _paramData;
    emit dataEvent(_data);
  }
  event dataEvent(string);

  function data() public view returns(string memory)
  {
    return _data;
  }

}
