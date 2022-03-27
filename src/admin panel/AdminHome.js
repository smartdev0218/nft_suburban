import React,{ useEffect } from "react";
import { useStore } from "../context/GlobalState";
import { loadBlockchain } from '../store/asyncActions';

function AdminHome(){

  const [{ total_mint, launch_time, token_price, token_price1, user_reserved, accounts }, dispatch] = useStore()
  
  function convertTimestampToDate(timestamp){
    var date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    
    return String(date.toLocaleDateString("en-US") + " " + hours + ":" + minutes);
  }

  useEffect(async()=>{
    await loadBlockchain(dispatch);
  },[accounts[0]]);


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
                           <h5>{token_price / 10**18}</h5>
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
                           <h5>{token_price1 / 10**18}</h5>
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
                           <h5>{total_mint}</h5>
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
                           <h5>{1145 - total_mint}</h5>
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
                           <h5>{user_reserved}</h5>
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