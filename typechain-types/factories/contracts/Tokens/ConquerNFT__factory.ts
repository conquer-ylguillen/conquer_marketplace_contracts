/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  ConquerNFT,
  ConquerNFTInterface,
} from "../../../contracts/Tokens/ConquerNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ConquerNFTNonExistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "mintConquerNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50336040518060400160405280601681526020017f436f6e71756572204e465420436f6c6c656374696f6e000000000000000000008152506040518060400160405280600481526020017f434e46540000000000000000000000000000000000000000000000000000000081525081600090816200009091906200047a565b508060019081620000a291906200047a565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200011a5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620001119190620005a6565b60405180910390fd5b6200012b816200013a60201b60201c565b506000600781905550620005c3565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200028257607f821691505b6020821081036200029857620002976200023a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620002c3565b6200030e8683620002c3565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200035b620003556200034f8462000326565b62000330565b62000326565b9050919050565b6000819050919050565b62000377836200033a565b6200038f620003868262000362565b848454620002d0565b825550505050565b600090565b620003a662000397565b620003b38184846200036c565b505050565b5b81811015620003db57620003cf6000826200039c565b600181019050620003b9565b5050565b601f8211156200042a57620003f4816200029e565b620003ff84620002b3565b810160208510156200040f578190505b620004276200041e85620002b3565b830182620003b8565b50505b505050565b600082821c905092915050565b60006200044f600019846008026200042f565b1980831691505092915050565b60006200046a83836200043c565b9150826002028217905092915050565b620004858262000200565b67ffffffffffffffff811115620004a157620004a06200020b565b5b620004ad825462000269565b620004ba828285620003df565b600060209050601f831160018114620004f25760008415620004dd578287015190505b620004e985826200045c565b86555062000559565b601f19841662000502866200029e565b60005b828110156200052c5784890151825560018201915060208501945060208101905062000505565b868310156200054c578489015162000548601f8916826200043c565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200058e8262000561565b9050919050565b620005a08162000581565b82525050565b6000602082019050620005bd600083018462000595565b92915050565b6122de80620005d36000396000f3fe608060405234801561001057600080fd5b50600436106101155760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb465146102e0578063b88d4fde146102fc578063c87b56dd14610318578063e985e9c514610348578063f2fde38b1461037857610115565b806370a082311461026a578063715018a61461029a5780638da5cb5b146102a457806395d89b41146102c257610115565b8063095ea7b3116100e9578063095ea7b3146101b657806323b872dd146101d257806342842e0e146101ee57806346a80cc61461020a5780636352211e1461023a57610115565b80629a9b7b1461011a57806301ffc9a71461013857806306fdde0314610168578063081812fc14610186575b600080fd5b610122610394565b60405161012f9190611786565b60405180910390f35b610152600480360381019061014d919061180d565b61039e565b60405161015f9190611855565b60405180910390f35b610170610480565b60405161017d9190611900565b60405180910390f35b6101a0600480360381019061019b919061194e565b610512565b6040516101ad91906119bc565b60405180910390f35b6101d060048036038101906101cb9190611a03565b61052e565b005b6101ec60048036038101906101e79190611a43565b610544565b005b61020860048036038101906102039190611a43565b610646565b005b610224600480360381019061021f9190611bcb565b610666565b6040516102319190611786565b60405180910390f35b610254600480360381019061024f919061194e565b6106a8565b60405161026191906119bc565b60405180910390f35b610284600480360381019061027f9190611c27565b6106ba565b6040516102919190611786565b60405180910390f35b6102a2610774565b005b6102ac610788565b6040516102b991906119bc565b60405180910390f35b6102ca6107b2565b6040516102d79190611900565b60405180910390f35b6102fa60048036038101906102f59190611c80565b610844565b005b61031660048036038101906103119190611d61565b61085a565b005b610332600480360381019061032d919061194e565b61087f565b60405161033f9190611900565b60405180910390f35b610362600480360381019061035d9190611de4565b610960565b60405161036f9190611855565b60405180910390f35b610392600480360381019061038d9190611c27565b6109f4565b005b6000600754905090565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061046957507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610479575061047882610a7a565b5b9050919050565b60606000805461048f90611e53565b80601f01602080910402602001604051908101604052809291908181526020018280546104bb90611e53565b80156105085780601f106104dd57610100808354040283529160200191610508565b820191906000526020600020905b8154815290600101906020018083116104eb57829003601f168201915b5050505050905090565b600061051d82610ae4565b5061052782610b6c565b9050919050565b610540828261053b610ba9565b610bb1565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105b65760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016105ad91906119bc565b60405180910390fd5b60006105ca83836105c5610ba9565b610bc3565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610640578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161063793929190611e84565b60405180910390fd5b50505050565b6106618383836040518060200160405280600081525061085a565b505050565b6000610670610ddd565b600160075461067f9190611eea565b60078190555061069183600754610e64565b61069d60075483610e82565b600754905092915050565b60006106b382610ae4565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361072d5760006040517f89c62b6400000000000000000000000000000000000000000000000000000000815260040161072491906119bc565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61077c610ddd565b6107866000610ee3565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546107c190611e53565b80601f01602080910402602001604051908101604052809291908181526020018280546107ed90611e53565b801561083a5780601f1061080f5761010080835404028352916020019161083a565b820191906000526020600020905b81548152906001019060200180831161081d57829003601f168201915b5050505050905090565b61085661084f610ba9565b8383610fa9565b5050565b610865848484610544565b610879610870610ba9565b85858585611118565b50505050565b60606007548211156108bd576040517f80e1d68700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6008600083815260200190815260200160002080546108db90611e53565b80601f016020809104026020016040519081016040528092919081815260200182805461090790611e53565b80156109545780601f1061092957610100808354040283529160200191610954565b820191906000526020600020905b81548152906001019060200180831161093757829003601f168201915b50505050509050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6109fc610ddd565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a6e5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610a6591906119bc565b60405180910390fd5b610a7781610ee3565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600080610af0836112c9565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b6357826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610b5a9190611786565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b610bbe8383836001611306565b505050565b600080610bcf846112c9565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610c1157610c108184866114cb565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ca257610c53600085600080611306565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610d25576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b610de5610ba9565b73ffffffffffffffffffffffffffffffffffffffff16610e03610788565b73ffffffffffffffffffffffffffffffffffffffff1614610e6257610e26610ba9565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610e5991906119bc565b60405180910390fd5b565b610e7e82826040518060200160405280600081525061158f565b5050565b600754821115610ebe576040517f80e1d68700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600860008481526020019081526020016000209081610ede91906120ca565b505050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361101a57816040517f5b08ba1800000000000000000000000000000000000000000000000000000000815260040161101191906119bc565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161110b9190611855565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b11156112c2578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b815260040161117794939291906121f1565b6020604051808303816000875af19250505080156111b357506040513d601f19601f820116820180604052508101906111b09190612252565b60015b611237573d80600081146111e3576040519150601f19603f3d011682016040523d82523d6000602084013e6111e8565b606091505b50600081510361122f57836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161122691906119bc565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146112c057836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016112b791906119bc565b60405180910390fd5b505b5050505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061133f5750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b1561147357600061134f84610ae4565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156113ba57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156113cd57506113cb8184610960565b155b1561140f57826040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815260040161140691906119bc565b60405180910390fd5b811561147157838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6114d68383836115b3565b61158a57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361154b57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016115429190611786565b60405180910390fd5b81816040517f177e802f00000000000000000000000000000000000000000000000000000000815260040161158192919061227f565b60405180910390fd5b505050565b6115998383611674565b6115ae6115a4610ba9565b6000858585611118565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561166b57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061162c575061162b8484610960565b5b8061166a57508273ffffffffffffffffffffffffffffffffffffffff1661165283610b6c565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036116e65760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016116dd91906119bc565b60405180910390fd5b60006116f483836000610bc3565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146117685760006040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260040161175f91906119bc565b60405180910390fd5b505050565b6000819050919050565b6117808161176d565b82525050565b600060208201905061179b6000830184611777565b92915050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6117ea816117b5565b81146117f557600080fd5b50565b600081359050611807816117e1565b92915050565b600060208284031215611823576118226117ab565b5b6000611831848285016117f8565b91505092915050565b60008115159050919050565b61184f8161183a565b82525050565b600060208201905061186a6000830184611846565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156118aa57808201518184015260208101905061188f565b60008484015250505050565b6000601f19601f8301169050919050565b60006118d282611870565b6118dc818561187b565b93506118ec81856020860161188c565b6118f5816118b6565b840191505092915050565b6000602082019050818103600083015261191a81846118c7565b905092915050565b61192b8161176d565b811461193657600080fd5b50565b60008135905061194881611922565b92915050565b600060208284031215611964576119636117ab565b5b600061197284828501611939565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006119a68261197b565b9050919050565b6119b68161199b565b82525050565b60006020820190506119d160008301846119ad565b92915050565b6119e08161199b565b81146119eb57600080fd5b50565b6000813590506119fd816119d7565b92915050565b60008060408385031215611a1a57611a196117ab565b5b6000611a28858286016119ee565b9250506020611a3985828601611939565b9150509250929050565b600080600060608486031215611a5c57611a5b6117ab565b5b6000611a6a868287016119ee565b9350506020611a7b868287016119ee565b9250506040611a8c86828701611939565b9150509250925092565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ad8826118b6565b810181811067ffffffffffffffff82111715611af757611af6611aa0565b5b80604052505050565b6000611b0a6117a1565b9050611b168282611acf565b919050565b600067ffffffffffffffff821115611b3657611b35611aa0565b5b611b3f826118b6565b9050602081019050919050565b82818337600083830152505050565b6000611b6e611b6984611b1b565b611b00565b905082815260208101848484011115611b8a57611b89611a9b565b5b611b95848285611b4c565b509392505050565b600082601f830112611bb257611bb1611a96565b5b8135611bc2848260208601611b5b565b91505092915050565b60008060408385031215611be257611be16117ab565b5b6000611bf0858286016119ee565b925050602083013567ffffffffffffffff811115611c1157611c106117b0565b5b611c1d85828601611b9d565b9150509250929050565b600060208284031215611c3d57611c3c6117ab565b5b6000611c4b848285016119ee565b91505092915050565b611c5d8161183a565b8114611c6857600080fd5b50565b600081359050611c7a81611c54565b92915050565b60008060408385031215611c9757611c966117ab565b5b6000611ca5858286016119ee565b9250506020611cb685828601611c6b565b9150509250929050565b600067ffffffffffffffff821115611cdb57611cda611aa0565b5b611ce4826118b6565b9050602081019050919050565b6000611d04611cff84611cc0565b611b00565b905082815260208101848484011115611d2057611d1f611a9b565b5b611d2b848285611b4c565b509392505050565b600082601f830112611d4857611d47611a96565b5b8135611d58848260208601611cf1565b91505092915050565b60008060008060808587031215611d7b57611d7a6117ab565b5b6000611d89878288016119ee565b9450506020611d9a878288016119ee565b9350506040611dab87828801611939565b925050606085013567ffffffffffffffff811115611dcc57611dcb6117b0565b5b611dd887828801611d33565b91505092959194509250565b60008060408385031215611dfb57611dfa6117ab565b5b6000611e09858286016119ee565b9250506020611e1a858286016119ee565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611e6b57607f821691505b602082108103611e7e57611e7d611e24565b5b50919050565b6000606082019050611e9960008301866119ad565b611ea66020830185611777565b611eb360408301846119ad565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611ef58261176d565b9150611f008361176d565b9250828201905080821115611f1857611f17611ebb565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611f807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611f43565b611f8a8683611f43565b95508019841693508086168417925050509392505050565b6000819050919050565b6000611fc7611fc2611fbd8461176d565b611fa2565b61176d565b9050919050565b6000819050919050565b611fe183611fac565b611ff5611fed82611fce565b848454611f50565b825550505050565b600090565b61200a611ffd565b612015818484611fd8565b505050565b5b818110156120395761202e600082612002565b60018101905061201b565b5050565b601f82111561207e5761204f81611f1e565b61205884611f33565b81016020851015612067578190505b61207b61207385611f33565b83018261201a565b50505b505050565b600082821c905092915050565b60006120a160001984600802612083565b1980831691505092915050565b60006120ba8383612090565b9150826002028217905092915050565b6120d382611870565b67ffffffffffffffff8111156120ec576120eb611aa0565b5b6120f68254611e53565b61210182828561203d565b600060209050601f8311600181146121345760008415612122578287015190505b61212c85826120ae565b865550612194565b601f19841661214286611f1e565b60005b8281101561216a57848901518255600182019150602085019450602081019050612145565b868310156121875784890151612183601f891682612090565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600082825260208201905092915050565b60006121c38261219c565b6121cd81856121a7565b93506121dd81856020860161188c565b6121e6816118b6565b840191505092915050565b600060808201905061220660008301876119ad565b61221360208301866119ad565b6122206040830185611777565b818103606083015261223281846121b8565b905095945050505050565b60008151905061224c816117e1565b92915050565b600060208284031215612268576122676117ab565b5b60006122768482850161223d565b91505092915050565b600060408201905061229460008301856119ad565b6122a16020830184611777565b939250505056fea264697066735822122076e1ecaf4e72ec22fef14c3104a8acebae471651990ad5c55bfd6104927d67aa64736f6c63430008140033";

type ConquerNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConquerNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConquerNFT__factory extends ContractFactory {
  constructor(...args: ConquerNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ConquerNFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ConquerNFT__factory {
    return super.connect(runner) as ConquerNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConquerNFTInterface {
    return new Interface(_abi) as ConquerNFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ConquerNFT {
    return new Contract(address, _abi, runner) as unknown as ConquerNFT;
  }
}
