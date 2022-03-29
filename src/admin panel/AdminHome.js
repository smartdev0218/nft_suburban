import React,{ useEffect, useState } from "react";
import { useStore } from "../context/GlobalState";
import { loadBlockchain } from '../store/asyncActions';
import { ADDRESS, ABI } from '../contract/SmartContract';
import Web3 from "web3";

function AdminHome(){

  // const [{ total_mint, launch_time, token_price, token_price1, user_reserved, accounts }, dispatch] = useStore()
  
  const[account, setAccount] = useState();
  const[total, setTotal] = useState();
  const[mintprice, setMint] = useState();
  const[whiteprice, setWhite] = useState();
  const[reser, setReser] = useState();

  function convertTimestampToDate(timestamp){
    var date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    
    return String(date.toLocaleDateString("en-US") + " " + hours + ":" + minutes);
  }

  useEffect(async()=>{
    // await loadBlockchain(dispatch);
    const web3 = new Web3(Web3.givenProvider);
    const acc = await web3.eth.getAccounts();
    setAccount(acc[0]);
    const contract = new web3.eth.Contract(ABI, ADDRESS);
    const tt = await contract.methods.totalSupply().call();
    setTotal(tt);
    const mp = await contract.methods.mintPrice().call();
    setMint(mp);
    const wp = await contract.methods.whiteMintPrice().call();
    setWhite(wp);
    const rs = await contract.methods.reserved().call();
    setReser(rs);
  },[account]);


   return(
    <div> 
        
    <div class="row">

          <div class="col-md">
              
              <div class="card">
                  <div class="card-header">
                        <h5 class="title">Dashboard</h5>
                   </div>
                   
              <div class="card-body">
                  
                <div className="row">


                  <div className="col-lg-4">
                    <div className="card card-chart">
                      <div className="card-header">
                        <h4 className="card-title">Total Supply</h4> 
                      </div>
                      <div className="card-footer">
                        <div className="float-right">
                           <div className="stats">
                           <h5>1145</h5>
                           </div>
                       </div>
                      </div>
                    </div>
                    <br/>
                  </div>


                  {/* <div className="col-lg-4">
                    <div className="card card-chart">
                      <div className="card-header">
                        <h4 className="card-title">Launch Time</h4> 
                      </div>
                      <div className="card-footer">
                        <div className="float-right">
                           <div className="stats">
                           <h5>{convertTimestampToDate(launch_time)}</h5>
                           </div>
                       </div>
                      </div>
                    </div>
                    <br/>
                  </div> */}


                  <div className="col-lg-4">
                    <div className="card card-chart">
                      <div className="card-header">
                        <h4 className="card-title">Minting Price</h4> 
                      </div>
                      <div className="card-footer">
                        <div className="float-right">
                           <div className="stats">
                           <h5>{mintprice / 10**18}</h5>
                           </div>
                       </div>
                      </div>
                    </div>
                    <br/>
                  </div>
          
                  <div className="col-lg-4">
                    <div className="card card-chart">
                      <div className="card-header">
                        <h4 className="card-title">Whitelist Price</h4> 
                      </div>
                      <div className="card-footer">
                        <div className="float-right">
                           <div className="stats">
                           <h5>{whiteprice / 10**18}</h5>
                           </div>
                       </div>
                      </div>
                    </div>
                    <br/>
                  </div>

                  <div className="col-lg-4">
                    <div className="card card-chart">
                      <div className="card-header">
                        <h4 className="card-title">Total Minted</h4> 
                      </div>
                      <div className="card-footer">
                        <div className="float-right">
                           <div className="stats">
                           <h5>{total}</h5>
                           </div>
                       </div>
                      </div>
                    </div>
                    <br/>
                  </div>
                  
                  <div className="col-lg-4">
                    <div className="card card-chart">
                      <div className="card-header">
                        <h4 className="card-title">Remaining Tokens</h4> 
                      </div>
                      <div className="card-footer">
                        <div className="float-right">
                           <div className="stats">
                           <h5>{1145 - total}</h5>
                           </div>
                       </div>
                      </div>
                    </div>
                    <br/>
                  </div>


                  <div className="col-lg-4">
                    <div className="card card-chart">
                      <div className="card-header">
                        <h4 className="card-title">Users Reserved</h4> 
                      </div>
                      <div className="card-footer">
                        <div className="float-right">
                           <div className="stats">
                           <h5>{reser}</h5>
                           </div>
                       </div>
                      </div>
                    </div>
                    <br/>
                  </div>
                  
                </div>
            
              </div>
          
           </div>
     
      </div>

  </div>
</div>                                         

   )
}

export default AdminHome;