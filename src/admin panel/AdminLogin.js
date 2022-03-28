import React,{ useState, useEffect } from 'react';
import { useStore } from '../context/GlobalState';
import { loadBlockchain } from '../store/asyncActions';

function AdminLogin(){
  
 const[pass,setpass] = useState("")
 const [{accounts, owner_account}, dispatch] = useStore();

  const handleSubmit = (e) => {
    
      e.preventDefault()
      
      if(accounts[0] === owner_account && pass === window.localStorage.getItem("admin_pass")){
         window.localStorage.setItem("admin_login","true");
         window.location.href="/admin"
      }
      
      else{
          alert("Invalid Wallet Address or Password!")
      }
      // window.localStorage.setItem("admin_login","true");
      // window.location.href="/admin"
  }

  useEffect(async()=>{
    await loadBlockchain(dispatch);
  },[accounts[0]]);

    return(
      
    <div className="wrapper fadeInDown">
     <br/><br/><br/>
     <div id="formContent">
   
     <br/>
    <div className="fadeIn first">
      <i className="fa fa-user fa-4x" aria-hidden="true"></i>
    </div>
     <br/>
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="form-row d-flex justify-content-center">
        <div className="form-group col-md-9">
          <div className="form-row">
            
            <div className="form-group col-md-12"> 
              <input type="text" className="form-control fadeIn second" style={{fontSize:'13px'}} disabled value={accounts[0]} />
              <br/>
            </div>
          
            <div className="form-group col-md-12">
              <input type="password" className="form-control fadeIn third"  placeholder="password" onChange={(e)=>setpass(e.target.value)}/>
              <br/>
            </div>
          
            <div className="form-group col-md-12">
              <input type="submit" className="btn btn-success fadeIn fourth" style={{width:'40%'}} value="Log In"/>
            </div>
          
          </div>
        </div>
      </div>
    </form>
   
       <div className="d-flex justify-content-end chng-btn">
         <a  href="/admin/changepassword" style={{marginRight:'4%', color:'red'}}>Change Password</a>
      </div>
      <br/><br/>
     </div>
</div>
    )
}
export default AdminLogin;