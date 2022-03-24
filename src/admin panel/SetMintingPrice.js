import React,{ useEffect, useState} from 'react'
import { useStore } from '../context/GlobalState'
import { SetTokenPrice } from '../store/asyncActions';
import Loader from '../images/loader.gif';
import { loadBlockchain } from '../store/asyncActions';

function SetMintingPrice(){

    const [{accounts,contract}, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInprocess] = useState(false);
    const [isTransactionSuccessful , setTransactionSuccessful] = useState(false);
    const [transactionError , setTransactionError] = useState("");
    const[price,setprice] = useState(0);

    useEffect(async()=>{
        await loadBlockchain(dispatch);
    },[accounts[0]]);
  

    
    const handleSubmit = async (e)=>{
      e.preventDefault();
      console.log("Price =", price)
      
      try {
          setTransactionInprocess(true)
          const newTransaction = {
              _newprice: price,
          }
          console.log("trx obj ",newTransaction)
          await SetTokenPrice(contract, accounts,newTransaction, dispatch);
          
          setTransactionInprocess(false);
          setTransactionSuccessful(true);

          window.location.reload()
         
        }catch (error){
             console.log("error trax = ",error);
             setTransactionInprocess(false);
             setTransactionSuccessful(false);
             setTransactionError(error.message); 
        }
   }
  
  return(

        <div class="row">
    
              <div class="col-md-12">
                  
                  <div class="card">
                      <div class="card-header">
                            <h5 class="title">Set Minting Price</h5>
                       </div>
                       
                  <div class="card-body">
                      <form onSubmit={(e)=>handleSubmit(e)}>
                            
                            <div className="form-row d-flex justify-content-center">
                                <div className="form-group col-md-6">
                                    <div className="form-row">
                                       <div className="form-group col-md-11">   
                                         <label for="inputEmail4"><h6>Enter Minting Price</h6></label>
                                         <input type="text" className="form-control" placeholder="0.02" step="0.001" onChange={(e)=>setprice(e.target.value)} required/>
                                       <br/>
                                       </div>
                                        <div className="form-group col-md-11">
                                          <button type="submit" className="btn btn-primary">SET PRICE</button>
                                          &nbsp;
                                          {isTransactionInProcess && <img width="40px" src={Loader} alt="Loading..." />} 
                                          {isTransactionSuccessful == true ? <div style={{color:"green"}}></div>:null}
                                          {!isTransactionSuccessful && <div style={{color:"red"}}>{transactionError}</div>}
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        
                        </form>
                  </div>
      
               </div>
              </div>
         </div>
    
      )
}
export default SetMintingPrice;