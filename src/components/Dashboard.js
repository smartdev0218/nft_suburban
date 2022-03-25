import React,{useState,useEffect} from 'react';
import {ADDRESS} from '../contract/SmartContract';
import mouseIcon from '../images/icons/mouse.png';
import { useStore } from '../context/GlobalState'
import { getAssets } from '../store/asyncActions';


function Dashboard(props){
    var axios = require('axios').default;
    //const http = require("https");
    //const request = require('request');

    const [{ accounts, connect }, dispatch] = useStore();
    const [myasset, setmyasset] = useState([]);
    
    // setTimeout(async ()=>{
    //     const options = {
    //         method: 'GET',
    //         url: 'https://api.opensea.io/assets?owner='+accounts[0]+'&asset_contract_address='+ADDRESS+'&order_direction=desc&offset=0&limit=50'
    //     };

        
    //     await axios.request(options).then(function (response) {
    //         console.log(response.data);
    //         console.log("addres = ", accounts[0])
    //         setmyasset(response.data.assets);
    //       }).catch(function (error) {
    //         console.error(error);
    //     });
    // },5000)

    


    

     useEffect(async ()=> {
        //setTimeout(async ()=>{
            if(connect === 1){
            const options = {
                method: 'GET',
                url: 'https://api.opensea.io/api/v1/assets?owner='+accounts[0]+'&asset_contract_address=0x48ca05b6D3f56e80A5b18D64b52dF0859B7729E1&order_direction=desc&offset=0&limit=20',
                headers: {'X-API-KEY': '324b4d3eef92428ba1047dbc3d55c2db'}
              };
              
              await axios.request(options).then(function (response) {
                console.log(response.data.assets);
                setmyasset(response.data.assets);
              }).catch(function (error) {
                console.error(error);
              });
            }

        //},5000)
     },[connect])




    return(
        <div>
           {/* <!-- items list --> */}
            <section id="items_list">
                <div className="container">
                    {/* <!-- row  --> */}
                    <div className="row">
                        {/* <!-- column  --> */}

                        <div className="col-md-12 pt-5 pt-lg-0">
                            <h3 className="btn__style text-white mb-1 mb-lg-2 text-center">
                                MY ASSETS
                            </h3>
                            <br/>
                        </div>
                        
                        {/* <!-- column  --> */}

                       {
                       connect === 1 ? 
                        myasset.length != 0 ?    
                        myasset.map((na) => ( 

                        <div className="col-12 col-md-6 col-xl-3 bg-dark p-3 p-lg-4 p-xl-6">
                            <div className="img-wrap text-center">
                                <img src={na.image_url} alt="image items" width="280px"/>
                            </div>
                            <h3 className="text-center text-white mt-2 mt-lg-4">{na.name}</h3>
                            <p className="para mt-3 mt-lg-4 text-center">
                                {na.description}
                            </p>
                            <div className="btn-wrap text-center">
                                <a href={`https://opensea.io/assets/${ADDRESS+`/`+na.token_id}`} className="text-white text-center btn btn-primary">View on OpenSea</a>
                            </div>
                        </div>
                          ))
                        :
                        <div className="col-md-12 pt-5 pt-lg-0">
                            <br/>   <br/>   <br/>   <br/>
                            <h3 className="btn__style text-white mb-1 mb-lg-2 text-center">No Assets</h3>
                        </div>
                        :
                        <div className="col-md-12 pt-5 pt-lg-0">
                            <br/>   <br/>   <br/>   <br/>
                            {
                                ! props.account ? <h3 className="btn__style text-white mb-1 mb-lg-2 text-center">Your Wallet is not connected.</h3>
                                 : <h3 className="btn__style text-white mb-1 mb-lg-2 text-center">Your Wallet is connected.</h3>
                            }
                        </div>
                        }
                     
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default Dashboard;