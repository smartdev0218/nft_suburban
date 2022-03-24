
import React,{ useEffect, useState } from 'react';
import { useStore } from '../context/GlobalState'
import { loadBlockchain } from '../store/asyncActions';

function ReservedUsers(){

    const [{ contract, web3, accounts, owner_account },dispatch] = useStore();

    useEffect(async()=>{
      await loadBlockchain(dispatch);
  },[accounts[0]]);


    // input address 
    const [address,setaddress] = useState("")
    // list of addresses
    const [addresses, setaddresses] = useState([])
    const [sig, setsign] = useState([])
     
    const creatSignature = async (e) => {
      e.preventDefault();
      if(owner_account == accounts[0]){
        let ss;
        const hash = await contract.methods.getMessageHash(address).call();
        console.log("hash =", hash);
        await web3.eth.personal.sign(hash,accounts[0],(err,res) =>{
          ss = res;
        })

        setaddresses([...addresses,address])
        setsign([...sig,ss])
        document.getElementById('addr').value = "";
      }else{
        alert("You are not an owner")
      }
    }

    
    const handleSubmit = async () => {
      
      var linksArray = [];
      // Loop through all links
      for (var i = 0; i < addresses.length; i++) {
  
        // Store links in variable
        linksArray.push(addresses[i]);
        linksArray.push(sig[i]);

        // Works fine in console
        console.log(linksArray);
      }
  
  
      // Create text document — only saves 1st link in text doc
      var textDoc = document.createElement('a');
  
      textDoc.href = 'data:attachment/text,' + encodeURI(linksArray.join('\n'));
      textDoc.target = '_blank';
      textDoc.download = 'signature_keys.txt';
      textDoc.click();

    }

    return(
        <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="title">Private Sale WhiteListing</h5>
                            </div>
                            <div className="card-body">
                              <center>
                              <form style={{textAlign: "center", marginBottom:" 7%"}} onSubmit={creatSignature}>
                              <div className="row">
                                 <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Account Address</label>
                                    <input type="text" id="addr" required  className="form-control" placeholder="Enter Address" value={address} onChange={(e)=> setaddress(e.target.value)}/> </div>
                                 </div>
                                 <div className="col-md-3">
                                   <div className="form-group" style={{marginTop:'13%', marginRight:'60%'}}>
                                    <button type="submit" className="btn btn-primary">Add</button> </div>
                                 </div>
                              </div>  
                              </form> 

                                 <div className="row">
                                    <div className="col-md-12">
                                      
                                    </div>
                                    <div className="col-md-12">
                                    <table className="table">
                                          <thead>
                                            <tr>
                                              <th scope="col">Address</th>
                                              <th scope="col">Signature</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {
                                            addresses.map((value,index) => { 
                                              let signs = sig[index];
                                              if(addresses.length > 0 && sig.length > 0){ 
                                            return <tr>
                                              <td>{value}</td>
                                              <td>{String(signs).substr(0, 20) + ".................." + String(signs).substr(120, String(signs).length)}</td>
                                             </tr> 
                                              }
                                            })  
                                          }
                                          </tbody>
                                          {
                                            addresses.length > 0  ? 
                                            <div><br/><button type="button" className="btn btn-info" onClick={handleSubmit}>Download Users List File</button>
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
export default ReservedUsers;