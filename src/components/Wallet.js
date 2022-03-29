import React,{useEffect, useState} from "react";
import mouseIcon from '../images/icons/mouse.png';
import Loader from '../images/loader.gif';
import { useStore } from '../context/GlobalState';
import { UserMint } from "../store/asyncActions";
import Web3 from "web3";
import { ADDRESS, ABI } from '../contract/SmartContract';
import { loadBlockchain } from '../store/asyncActions';

function Wallet(props){
    // const [{ accounts,owner_account,contract,total_mint,user_reserved,token_price, token_price1,launch_time, connect}, dispatch] = useStore();
    const [quantity,setquantity] = useState(1)
    const [isTransactionInProcess, setTransactionInprocess] = useState(false);
    const [isTransactionSuccessful , setTransactionSuccessful] = useState(false);
    const [transactionError , setTransactionError] = useState("");
    const [addresses, setAddresses] = useState([]);
    // const [account, setAccount] = useState([]);

    const styles = {
        color: 'white'
    }

    const checkAddress = () => {
        for(var i = 0; i < addresses.length; i++) {
            if(addresses[i] == props.account) {
                return true;
            }
        }
        return false;
    }

    // useEffect(async () => {
        // const web3 = new Web3(Web3.givenProvider);
        // setAccount(await web3.eth.getAccounts());
        // await loadBlockchain(dispatch);
    // }, accounts[0])

    const handleSubmit = async (e) =>{

        e.preventDefault();
        
        // await loadBlockchain(dispatch);

        // await fetch("https://api.allorigins.win/raw?url=http://localhost:5000/find/")
        await fetch("http://localhost:5000/find/")
        .then(response => response.json())
        .then(data => {
            for(var i = 0; i < data.length; i++) {
                addresses.push(data[i].address);
            }
        })
        console.log("white address", addresses);
        
        console.log("owner", props.o_account);
        console.log("mint_price", props.mint_price);
        console.log("white_price", props.white_price);
        const web3 = new Web3(Web3.givenProvider);

        //owner
        if(props.account == props.o_account) alert("You are owner!");
        
        // white mint
        else if(checkAddress() == true) {
            const contract = new web3.eth.Contract(ABI, ADDRESS);
            await contract.methods.mintByWhiteAdress(quantity)
            .send({
                from: props.account,
                value: quantity  * props.white_price,
            });
        }
        //Normal mint
        else {
            const contract = new web3.eth.Contract(ABI, ADDRESS);
            await contract.methods.mintByUser(quantity)
            .send({
                from: props.account,
                value: quantity * props.mint_price,
            });
        }
        
    }
    

    return(
     <div>
        <section id="wallet">
            <div className="container">
                {/* <!-- your wallet address  --> */}
                {/* <!-- text / tittle column  --> */}
                <div className="col-12 right__side order-1 pt-5 pt-lg-0">
                    <h3 className="btn__style text-white mb-1 mb-lg-2 text-center">
                        GAME & COLLECTION
                    </h3>
                    <h1 className="title mb-3 mb-lg-4 text-center">Mint</h1>
                </div>
                <div className="row">
                    {/* <!-- your wallet  --> */}
                    <div className="col-12 col-lg-6">
                        <h3 className="text-center text-lg-start text-white text-capitalize">Your Wallet Address</h3>
                        <input type="text" disabled className="p-lg-2 form-control py-2" value={props.account} style={styles} />
                    </div>
                    {/* <!-- number to min  --> */}
                    <div className="col-12 mt-4 mt-lg-0 col-lg-6">
                        <h3 className="text-white text-center text-lg-start">NFTs to Mint: (Max 3)</h3>
                        <input type="text" id="mintBox" className="form-control py-2" style={styles} min="1" max="3" value = {quantity}  onChange={(e)=> setquantity(e.target.value)} required/>
                    </div>
                    {/* <!-- buttons  --> */}
                    <div className="col-12 mt-4">
                        {/* <!-- para  --> */}
                        { props.account ? <p className="para text-center mb-0 mb-lg-1">Total NFTs mint until now: {props.total_mint1}/1145</p> : null} 
                        <p className="para text-center">Minting fee for 1 NFT = 0.07 ETH / 0.06 ETH WL</p>
                        {/* <!-- button  --> */}
                        <div className="btn-wrap text-center">
                            <a href="" className="cus_btn text-uppercase text-white text-center" onClick={handleSubmit}>buy</a>
                                    &nbsp;
                                {isTransactionInProcess && <img width="40px" src={Loader} alt="Loading..." />} 
                                {isTransactionSuccessful == true ? <div style={{color:"green"}}>Mint Successful</div>:null}
                                {!isTransactionSuccessful && <div style={{color:"red"}}>{transactionError}</div>}
                        </div>
                    </div>
                </div>
                <a href="#suburban__NFT" className="mouse text-center"
                    ><img
                        className="d-inline-block"
                        src={mouseIcon}
                        alt="mouse-icon"
                /></a>
            </div>
        </section>
    </div>
    );
}

export default Wallet;