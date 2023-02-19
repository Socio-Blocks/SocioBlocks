import Web3 from 'web3'

const Web3js = new Web3(new Web3.providers.HttpProvider("https://rpc.testnet.mantle.xyz/"))
const privateKey = '9d179dc30b1774c81bad37b550e750bc9a26073974201c7bf46d3e3b2988a330' //Your Private key environment variable
let tokenAddress = '0x5b840FB0B7d6b91a7f0b3A10737b316987cf3C11' // Demo Token contract address

let to_address = '0x6d66341f0363D32f7a1A8b40C1ff472fEd9aaA56' // metro madan thatandhu

let wallet_address = '0x5d192AEDDD1887a75719f74e3C4CC73106a863A3' //common citizen
let fromAddress = '0xcF5EE6d9033a6787f26b3da0F7f103e6988184E4' // your wallet
let contractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "wallet_adress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "pothole",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "geofence",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "intensity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "hash",
				"type": "string"
			}
		],
		"name": "addreporter",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "gefnce",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "wallet_holder",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "hash",
				"type": "string"
			}
		],
		"name": "checker",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from_address",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "paying_integer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from_address",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "paying_one_decimal",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from_address",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "paying_two_decimal",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferTokens",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			}
		],
		"name": "balance_display",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "gefnce",
				"type": "uint256"
			}
		],
		"name": "checker_10",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "wallet_id",
				"type": "address"
			}
		],
		"name": "get_data",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "wallet_address",
				"type": "address"
			}
		],
		"name": "getScore",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTopReporters",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "reporter_adress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "score",
						"type": "uint256"
					}
				],
				"internalType": "struct reporter_score[10]",
				"name": "",
				"type": "tuple[10]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "reporter_adress",
				"type": "address"
			}
		],
		"name": "hash_returner",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "reporters",
		"outputs": [
			{
				"internalType": "address",
				"name": "reporter_adress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "score",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

var data_7;
var data_2
let contract = new Web3js.eth.Contract(contractABI, tokenAddress, { from: fromAddress })
// let amount = Web3js.utils.toHex(Web3js.utils.toWei("1")); //1 DEMO Token
let amount = 1;
let pothole_id = 1;
let geofence_id = 1235;
let intensity = 10;





let data_4=contract.methods.paying_integer(wallet_address,to_address,amount).encodeABI()
let data_5=contract.methods.paying_one_decimal(wallet_address,to_address,amount).encodeABI()
let data_6=contract.methods.paying_two_decimal(wallet_address,to_address,amount).encodeABI()


export function setCheckParams(geofence_id,wallet_address,hash){
	 data_2=contract.methods.checker(geofence_id,wallet_address,hash).encodeABI()
}

export function sendCoinParams(wallet_address,pothole_id, geofence_id, intensity,hash){
	data_7 = contract.methods.addreporter(wallet_address,pothole_id, geofence_id, intensity,hash).encodeABI()
}




// var hash ="QmdcP8R36NDToAVJfaiRxZkuS9e339FBqCsYcJT5tBx4Vd"
// sendCoinParams(wallet_address,pothole_id, geofence_id, intensity,hash)



export function execute_function(input) {

   let data;
    console.log(input);
    if (input === 'check') {
       data = data_2;
   } else if (input === 'integerpay') {
       data = data_4;
   } else if (input === 'onedecipay') {
       data = data_5;
   } else if (input === 'twodecipay') {
       data = data_6;
   } else if (input === 'addreporter') {
       data = data_7;
   } else {
       console.log('Invalid input');
       return;
   }




   let txObj = {
       gas: Web3js.utils.toHex(1000000), 
       "to": tokenAddress,
       "value": "0x00",
       "data": data,
       "from": fromAddress
   };

   Web3js.eth.accounts.signTransaction(txObj, privateKey, (err, signedTx) => {
       if (err) {
           console.log(err);
       } else {
           console.log(signedTx);
           Web3js.eth.sendSignedTransaction(signedTx.rawTransaction, (err, res) => {
               if (err) {
                   console.log(err);
               } else {
                   console.log(res);
               }
           });
       }
   });
}

// execute_function('addreporter');



export function get_balance(wallet_address) {
	return new Promise((resolve, reject) => {
	  contract.methods.balance_display(wallet_address).call((error, result) => {
		if (error) {
		  reject(error);
		} else {
		  resolve(result);
		}
	  });
	});
  }
  



export function leaderboard() {
	return new Promise((resolve, reject) => {
	  contract.methods.getTopReporters().call((error, result) => {
		if (error) {
		  reject(error);
		} else {
		  resolve(result);
		}
	  });
	});
  }

  get_balance(wallet_address).then((result) => {
	console.log(result);
	  }).catch((error) => {
	console.log(error);
	  });
  

export function get_hash(wallet_address) {
	return new Promise((resolve, reject) => {
		contract.methods.hash_returner(wallet_address).call((error, result) => {
			if (error) {
				reject(error);
			} else {
				resolve(result);
			}
		});
	});
}




export function get_reporter_score(wallet_address) {
	return new Promise((resolve, reject) => {
		contract.methods.getScore(wallet_address).call((error, result) => {
			if (error) {
				reject(error);
			} else {
				resolve(result);
			}
		});
	});
}

export function checker_10(geofence_id) {
	return new Promise((resolve, reject) => {
		contract.methods.checker_10(geofence_id).call((error, result) => {
			if (error) {
				reject(error);
			} else {
				resolve(result);
			}
		});
	});
}

