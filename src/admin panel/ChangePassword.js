import React,{ useState } from "react";


function ChangePassword(){
   
    const[pass1,setpass1] = useState("")
    const[pass2,setpass2] = useState("")

    const handleSubmit =  (e) => {
        e.preventDefault()
        if(pass1 === pass2){
            localStorage.setItem('admin_pass',pass1)
            alert("Password Changed Successful") 
            window.location.href = '/admin'
        }
        else{
            alert("Password not matched!")
        }
    } 

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
              <input type="password" className="form-control fadeIn second" placeholder="Enter Password" onChange={(e)=>setpass1(e.target.value)}/>
              <br/>
            </div>

            <div className="form-group col-md-12"> 
              <input type="password" className="form-control fadeIn third"  placeholder="Re-type Password" onChange={(e)=>setpass2(e.target.value)}/>
              <br/><br/>
            </div>

            <div className="form-group col-md-12"> 
              <input type="submit" className="btn btn-success fadeIn fourth" value="Change Password"/>
              <br/><br/>
            </div>

          </div>
        </div>
      </div>
     
     
   </form>

 </div>
</div>
  )
}
export default ChangePassword;