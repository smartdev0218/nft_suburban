
import React,{ useEffect, useState} from 'react';
import { useStore } from '../context/GlobalState'
import { SharingToken } from '../store/asyncActions';
import Loader from '../images/loader.gif';
import { loadBlockchain } from '../store/asyncActions';

function TokenGiveAway(){

    const [{contract,accounts,total_mint,user_reserved},dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInprocess] = useState(false);
    const [isTransactionSuccessful , setTransactionSuccessful] = useState(false);
    const [transactionError , setTransactionError] = useState("");
    const [address,setaddress] = useState("")
    const [quantity,setquantity] = useState()
    const [addresses, setaddresses] = useState([])
    const [quantities, setquantities] = useState([])
     
     const pushData = (e)=> {
       e.preventDefault()
       setaddresses([...addresses, address])
       setquantities([...quantities, quantity])
       console.log("array =", addresses, quantities)
       setaddress("");
       setquantity("");
    }

    const popData = (address,quantity) => {
      console.log(address,quantity)
      let length1 = addresses.length;
      let length2 = quantities.length;
      if(length1 === length2){
        for(var i=0; i<length1;i++){
          if(address === addresses[i] && quantity === quantities[i]){
             addresses.splice(i,1)
             quantities.splice(i,1)
             setquantities([...quantities])
             setaddresses([...addresses])
          }
        }
      }  
      else{
        alert("length not same")
      }    
     
    }

    useEffect(async()=>{
      await loadBlockchain(dispatch);
    },[accounts[0]]);



    const handleSubmit = async () => {
      
      let quant = 0;

      for (var i = 0; i < quantities.length; i++) {
          quant += Number(quantities[i]);
      }

       if((Number(total_mint)+Number(quant)) > 2199 - user_reserved){
        console.log(quant)
        alert("Max Limit To Admin Mint")
       }
    
    else{
        try {
            setTransactionInprocess(true)
            const newTransaction = {
                addresses: addresses,
                quantities: quantities
            }
            console.log("trx obj ",newTransaction)
            
            await SharingToken(contract, accounts, newTransaction,dispatch);
            
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

    }


    return(
        <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="title">Token GiveAway</h5>
                            </div>
                            <div className="card-body">
                              <center>
                              <form style={{textAlign: "center", marginBottom:" 7%"}} onSubmit={(e)=>pushData(e)}>
                              <div className="row">
                                 <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Account Address</label>
                                    <input type="text" required  className="form-control" placeholder="Enter Address" value={address} onChange={(e)=> setaddress(e.target.value)}/> </div>
                                 </div>
                                 <div className="col-md-3">
                                   <div className="form-group">
                                    <label>Quantity</label>
                                    <input type="number" required  min="1" className="form-control" placeholder="Enter Quantity" value={quantity} onChange={(e)=> setquantity(e.target.value)}/> </div>
                                 </div>
                                 <div className="col-md-3">
                                   <div className="form-group" style={{marginTop:'12%', marginRight:'60%'}}>
                                    <button type="submit" className="btn btn-primary">Add</button> </div>
                                 </div>
                              </div>  
                              </form> 

                                 <div className="row">
                                    <div className="col-md-12">
                                      <h6>GiveAway List</h6>
                                    </div>
                                    <div className="col-md-12">
                                    <table className="table">
                                          <thead>
                                            <tr>
                                              <th scope="col">Address</th>
                                              <th scope="col">Quantity</th>
                                              <th scope="col">Delete</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {
                                            addresses.map((value, index) => { 
                                            const quan = quantities[index];
                                            return  <tr>
                                              <td>{value}</td>
                                              <td>{quan}</td>
                                              <td><button type="button" className="btn btn-danger" onClick={()=>popData(value,quan)}><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                                            </tr>
                                          
                                            })  
                                          }
                                          </tbody>
                                          {
                                            addresses.length > 0 && quantities.length > 0  ? 
                                            <div><br/><button type="button" className="btn btn-info" onClick={handleSubmit}>Send GiveAways</button>
                                                &nbsp;
                                              {isTransactionInProcess && <img width="40px" src={Loader} alt="Loading..." />} 
                                              {isTransactionSuccessful == true ? <div style={{color:"green"}}></div>:null}   
                                              {!isTransactionSuccessful && <div style={{color:"red"}}>{transactionError}</div>}
                                            </div> : null 
                                          }
                                        </table> 
                                    </div>
                                  </div>

                              </center>
                            </div>
                        </div>
                    </div>
                </div>  

           </div>                                       
           

    )

}
export default TokenGiveAway;