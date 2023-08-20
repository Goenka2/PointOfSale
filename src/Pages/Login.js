import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
// import "../styles/DefaultLayout.css"
import "../styles/HomeStyle.css"
import CafeService from "../service/CafeService";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";


function Login(props) {
        let navigate =useNavigate;
    let [formdetails,setformDetails]=useState({email:"",password:""});
    let login=()=>{
        if(formdetails.email==="" || formdetails.password===""){
            alert("please fill required fields")
            return;
        }
        console.log("here")
        CafeService.signinCafe(formdetails)
        .then((result)=>{
            setformDetails({email:"",password:""});
            navigate("/restaurantPage")
        })
    }
    return (
        <div>
        
        <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form action="/login">
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>
        <br/>
        <Link className="go" to="/register"><h6>New User?</h6></Link>
        <div className="social">
        <button id='login' name='login' onClick={login}>Log In</button>
        </div>
        </form>
        </div>
     );
}

export default Login;