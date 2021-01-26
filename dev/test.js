const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1={
    "chain": [
    {
    "index": 1,
    "timestamp": 1611463521506,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1611463557537,
    "transactions": [],
    "nonce": 18140,
    "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1611463558668,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "f72e5fe05dfe11ebaed8252b8c4a0a8a",
    "transactionId": "0cba46305dff11ebaed8252b8c4a0a8a"
    }
    ],
    "nonce": 84589,
    "hash": "000042c70007ec0e8bc9e6a4e44301c1a6e4e828f3fe2647f04731ec4acb6ea4",
    "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    "index": 4,
    "timestamp": 1611463706506,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "f72e5fe05dfe11ebaed8252b8c4a0a8a",
    "transactionId": "0d5611005dff11ebaed8252b8c4a0a8a"
    },
    {
    "amount": 10,
    "sender": "KDJDUFBFHFBFBHCHDBKSKSJD",
    "recipient": "LDODNRNF8899NHDHC",
    "transactionId": "55273a905dff11ebaed8252b8c4a0a8a"
    },
    {
    "amount": 20,
    "sender": "KDJDUFBFHFBFBHCHDBKSKSJD",
    "recipient": "LDODNRNF8899NHDHC",
    "transactionId": "5c0e80705dff11ebaed8252b8c4a0a8a"
    },
    {
    "amount": 30,
    "sender": "KDJDUFBFHFBFBHCHDBKSKSJD",
    "recipient": "LDODNRNF8899NHDHC",
    "transactionId": "605133305dff11ebaed8252b8c4a0a8a"
    }
    ],
    "nonce": 92327,
    "hash": "0000115b4a82638c07f4bf67f3b2180f5479023df485776ae64498588eb62c99",
    "previousBlockHash": "000042c70007ec0e8bc9e6a4e44301c1a6e4e828f3fe2647f04731ec4acb6ea4"
    },
    {
    "index": 5,
    "timestamp": 1611463772415,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "f72e5fe05dfe11ebaed8252b8c4a0a8a",
    "transactionId": "65745ae05dff11ebaed8252b8c4a0a8a"
    },
    {
    "amount": 40,
    "sender": "KDJDUFBFHFBFBHCHDBKSKSJD",
    "recipient": "LDODNRNF8899NHDHC",
    "transactionId": "7a83e5405dff11ebaed8252b8c4a0a8a"
    },
    {
    "amount": 50,
    "sender": "KDJDUFBFHFBFBHCHDBKSKSJD",
    "recipient": "LDODNRNF8899NHDHC",
    "transactionId": "7da8a4e05dff11ebaed8252b8c4a0a8a"
    },
    {
    "amount": 60,
    "sender": "KDJDUFBFHFBFBHCHDBKSKSJD",
    "recipient": "LDODNRNF8899NHDHC",
    "transactionId": "81622a705dff11ebaed8252b8c4a0a8a"
    },
    {
    "amount": 70,
    "sender": "KDJDUFBFHFBFBHCHDBKSKSJD",
    "recipient": "LDODNRNF8899NHDHC",
    "transactionId": "84afa7c05dff11ebaed8252b8c4a0a8a"
    }
    ],
    "nonce": 265711,
    "hash": "000020398cb4ffb2bc46647954f8ae03b06b7d487e59d95ea8ee854937485d70",
    "previousBlockHash": "0000115b4a82638c07f4bf67f3b2180f5479023df485776ae64498588eb62c99"
    },
    {
    "index": 6,
    "timestamp": 1611463811843,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "f72e5fe05dfe11ebaed8252b8c4a0a8a",
    "transactionId": "8cbd93505dff11ebaed8252b8c4a0a8a"
    }
    ],
    "nonce": 70361,
    "hash": "000094bf2be58c5ae0c18ccc24d9ef8010fa411ee5a5445eaa41a23daf0fdca4",
    "previousBlockHash": "000020398cb4ffb2bc46647954f8ae03b06b7d487e59d95ea8ee854937485d70"
    },
    {
    "index": 7,
    "timestamp": 1611463814834,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "f72e5fe05dfe11ebaed8252b8c4a0a8a",
    "transactionId": "a43d81705dff11ebaed8252b8c4a0a8a"
    }
    ],
    "nonce": 80856,
    "hash": "00006494ce16f0f02581c595a64ab41f5138851ee4ae8eedf86cad047e40856e",
    "previousBlockHash": "000094bf2be58c5ae0c18ccc24d9ef8010fa411ee5a5445eaa41a23daf0fdca4"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "f72e5fe05dfe11ebaed8252b8c4a0a8a",
    "transactionId": "a605e5605dff11ebaed8252b8c4a0a8a"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    }




console.log('VALID: ', bitcoin.chainIsValid(bc1.chain))