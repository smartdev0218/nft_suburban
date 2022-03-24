import React, {useEffect, useState} from "react";
import aro4a from '../images/slider__gif__img/aro4a.gif';
import aro3 from '../images/slider__gif__img/aro3.gif'
import { loadBlockchain } from '../store/asyncActions'
import { useStore } from '../context/GlobalState'
import { setupConnection } from "../store/actions";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Wallet from "./Wallet";
import Dashboard from "./Dashboard";

function MainSection(){
    // const [{ accounts }, dispatch] = useStore();
    // const [status, setStatus] = useState("Connect");
    const [account, setAccount] = useState();
    
    const providerOptions = {
        metamask: {
            id: "injected",
            name: "MetaMask",
            type: "injected",
            check: "isMetaMask"
        },
        walletconnect: {
            package: WalletConnectProvider, // required
            options: {
                infuraId: "223f20f418c34a758240a7f416435110", // Required
                network: "mainnet",
                qrcodeModalOptions: {
                    mobileLinks: ["rainbow", "metamask", "argent", "trust", "imtoken", "pillar"]
                }
            }
        },
        // authereum: {
        //     package: Authereum // required
        // },
    };

    const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
    });

    useEffect(() => {
        if(web3Modal.cachedProvider) {
            connectButton();
        }
    })

    const connectButton =  async () => {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        const acc = await web3.eth.getAccounts();
        setAccount(acc[0]);
        console.log(account);
    };
    
    const disconnectButton = async () => {
        await web3Modal.clearCachedProvider();
        setAccount("");
    };

    return(
        <>
        <div id="main_and_text_container">
            <main>
                {/* <!-- slider section  --> */}
                <div className="slider__container">
                    <div
                        id="carousel"
                        className="carousel slide carousel-fade"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div
                                className="carousel-item active text-center"
                                data-bs-interval="3000"
                            >
                                <img
                                    className="d-inline-block"
                                    src={aro4a}
                                    className="d-block"
                                    alt="slider image"
                                />
                            </div>
                            <div
                                className="carousel-item text-center"
                                data-bs-interval="3000"
                            >
                                <img
                                    className="d-inline-block"
                                    src={aro3}
                                    className="d-block"
                                    alt="slider image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* <!-- main section texts  --> */}
            <section id="main__sec__text" >
                <div className="container">
                    <div className="text__wrapper">
                        <div className="text__wrap">
                            <h1 className="text-center text-white mb-0">                 
                                Suburban Colors
                            </h1>
                            <p className="text-center text-white mb-0">
                                <a style={{textDecoration: 'underline'}} href="https://opensea.io/collection/suburbancolors-collection" target={"_blank"}>Official NFT Collection</a> <br/> MINTING LIVE
                                人間 vs ロボット
                            </p>
                            {   !account ?
                                <a
                                id="collect__now"
                                className="
                                    text-underline text-center
                                f    d-block
                                    text-bold
                                "
                                //href="#wallet"
                                onClick={ connectButton }
                                >Connect to a Wallet
                                </a> : 
                                <a
                                    id="collect__now"
                                    className="
                                        text-underline text-center
                                    f    d-block
                                        text-bold
                                    "
                                    //href="#wallet"
                                    onClick={ disconnectButton }
                                >Disconnect
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Wallet account = {account} />
        <Dashboard account = {account} />
        </>
    );
}

export default MainSection;