import { setupWeb3, setupContract, addEthereumAccounts, web3LoadingError, totalMinted, mintStatus, mintPrice, whiteMintPrice, userReserved, ownerAccount, launchTime } from "./actions";
import Web3 from "web3";
import { ADDRESS, ABI } from '../contract/SmartContract';

const web3 = new Web3(Web3.givenProvider);

export const loadBlockchain = async(dispatch) =>{
    try {
        console.log("Web3 = ",Web3);
        console.log("Web3.givenProvider = ",Web3.givenProvider);

        if(Web3.givenProvider){
    
            // await Web3.givenProvider.enable();
            console.log("Web3.givenProvider enable= ",Web3.givenProvider);
            dispatch(setupWeb3(web3));
            
            const contract = new web3.eth.Contract(ABI,ADDRESS);
            dispatch(setupContract(contract));
            console.log("contract = ", contract);
            console.log("contract.methods = ", contract.methods);
      
            const accounts = await web3.eth.getAccounts();
            console.log("account: ", accounts[0]);
            dispatch(addEthereumAccounts(accounts));

            const totalminted = await contract.methods.totalSupply().call()
             console.log("total supply", totalminted);
             dispatch(totalMinted(totalminted))


             const mintprice = await contract.methods.mintPrice().call()
             console.log("minting Price", mintprice);
             dispatch(mintPrice(mintprice))

             const whitemintPrice = await contract.methods.whiteMintPrice().call()
             console.log("white minting Price", whitemintPrice);
             dispatch(whiteMintPrice(whitemintPrice))

             const userreserved = await contract.methods.reserved().call()
             console.log("user Reserved", userreserved);
             dispatch(userReserved(userreserved))

             const owneraccount = await contract.methods.owner().call()
             console.log("owner account", owneraccount);
             dispatch(ownerAccount(owneraccount))

        }
        else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
    }
    catch(error){
        console.log("Error in loading Web3 = ",error);
        if(error.code===4001){
            
            dispatch(web3LoadingError(error.message));
        }
    }
}

export const SetTokenPrice = async(contract, accounts, transaction, dispatch)=>{
    console.log("before transaction");
    const receipt =  await contract.methods.setMintPrice(web3.utils.toHex(web3.utils.toWei(String(transaction._newprice))))
    .send({
        from : accounts[0],
        maxPriorityFeePerGas: web3.utils.toHex(String(1500000000))
    });
    console.log("after  transaction ", receipt);   
}

export const SetToken1Price = async(contract, accounts, transaction, dispatch)=>{
    console.log("before transaction");
    const receipt =  await contract.methods.setWhiteMintPrice(web3.utils.toHex(web3.utils.toWei(String(transaction._newprice))))
    .send({
        from : accounts[0],
        maxPriorityFeePerGas: web3.utils.toHex(String(1500000000))
    });
    console.log("after  transaction ", receipt);   
}

export const SetMintStatus= async(contract, accounts, dispatch)=>{
    console.log("before transaction");
    const receipt =  await contract.methods.setMintingStatus()
    .send({
        from : accounts[0],
        maxPriorityFeePerGas: web3.utils.toHex(String(1500000000))
    });
    console.log("after  transaction ", receipt);   
}


export const OwnerMint = async(contract, accounts, transaction,dispatch)=>{
    console.log("before transaction");
    const receipt =  await contract.methods.mintByOwner(accounts[0],transaction.quantity)
    .send({
        from : accounts[0],
        maxPriorityFeePerGas: web3.utils.toHex(String(1500000000))
    });
    console.log("after  transaction ", receipt);   
}


export const SharingToken = async(contract, accounts, transaction,dispatch)=>{
    console.log("before transaction");
    const receipt =  await contract.methods.batchMintByOwner(transaction.addresses,transaction.quantities)
    .send({
        from : accounts[0],
        maxPriorityFeePerGas: web3.utils.toHex(String(1500000000))
    });
    console.log("after  transaction ", receipt);   
}




export const UserMint = async(contract, accounts, transaction, dispatch)=>{
    console.log("before transaction");
    const receipt =  await contract.methods.mintByUser(transaction.quantity)
    .send({
        from : accounts[0],
        value: transaction.total_amount,
       // maxPriorityFeePerGas: web3.utils.toHex(String(1500000000))
    });
    console.log("after  transaction ", receipt);   
}


export const getAssets = async(accounts, dispatch) => {
    
    // var config = {
    //     method: 'get',
    //     url: 'https://api.opensea.io/assets?owner=0x32c4316025deda545f9008a410899b479cfbfb1a&asset_contract_address=0x48ca05b6D3f56e80A5b18D64b52dF0859B7729E1&order_direction=desc&offset=0&limit=50',
    //     headers: { 
    //         'Cookie': '__cf_bm=u1cmUWWwwPiln_MZ2gPYAtuYEH.NaFe2Usy4e2eh0BY-1640122062-0-ARaWNBX3aIkHbz2AFdMEiW6VluTL3A8ntPa42lOsobLrcugjl3O3NB0g++Hf3RfzC9j7ESs6X3JCj6B0Zv7VHcg='
    //     },
    //     withCredentials: true,
    // };

    // axios(config)
    // .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
}