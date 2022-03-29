import React,{ useEffect, useState} from 'react'
import { useStore } from '../context/GlobalState'
import Loader from '../images/loader.gif';
import { OwnerMint } from '../store/asyncActions';
import { loadBlockchain } from '../store/asyncActions';


function OwnerMinting(){

    // const [{accounts,contract,total_mint,user_reserved}, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInprocess] = useState(false);
    const [isTransactionSuccessful , setTransactionSuccessful] = useState(false);
    const [transactionError , setTransactionError] = useState("");
    const [quantity,setquantity] = useState(0)
    const [account, setAccount] = useState();

    useEffect(async()=>{
        // await loadBlockchain(dispatch);
        const web3 = new Web3(Web3.givenProvider);
        const acc = await web3.eth.getAccounts();
        setAccount(acc[0]);
    },[account]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("HEllo World")

        
         if((Number(total_mint)+Number(quantity)) > 2199 - user_reserved){
            alert("Max Limit To Admin Mint")
        }
        
        else{
            try {
                setTransactionInprocess(true)
                const newTransaction = {
                    quantity: quantity
                }
                console.log("trx obj ",newTransaction)
                
                // await OwnerMint(contract, accounts, newTransaction,dispatch);
                const contract = new web3.eth.Contract(ABI, ADDRESS);
                
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
    <div class="row">
    
              <div class="col-md-12">
                  
                  <div class="card">
                      <div class="card-header">
                            <h5 class="title">Owner Minting</h5>
                       </div>
                       
                  <div class="card-body">
                        <form onSubmit={(e)=>handleSubmit(e)}>
                                    
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="form-group col-md-6">
                                            <div className="form-row">
                                            <div className="form-group col-md-11">   
                                                <label for="inputEmail4"><h6>Enter Qunatity</h6></label>
                                                <input type="text" className="form-control" placeholder="5" min="1" max="10" placeholder="5" onChange={(e)=>setquantity(e.target.value)} required/>
                                               <br/>
                                            </div>
                                                <div className="form-group col-md-11">
                                                <button type="submit" className="btn btn-primary">MINT</button>
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
export default OwnerMinting;