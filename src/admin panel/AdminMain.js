import React from "react";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";

function AdminMain(){
   return(
    <div>   
    {
        window.localStorage.getItem("admin_login") === "true" ? <AdminDashboard/> : <AdminLogin/>
    }
    </div>
   )
}
export default AdminMain;