import React, { Fragment, useState } from "react";
import LayoutComponent from "../component/LayoutComponent";
import { useNavigate } from "react-router-dom";
// import "../styles/DefaultLayout.css"
import "../styles/HomeStyle.css"
import CafeService from "../service/CafeService";
import { Link } from "react-router-dom";

function Register(props) {
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
    <form action="/register">
        <h3>Register Here</h3>

        <label>Name
        <input type="text" name="name" placeholder="Email or Phone" id="name"/>
        </label>

        <label>Password
        <input type="password" placeholder="Password" id="password"/>
        </label>

        <label>Confirm Password
        <input type="password" placeholder="Password" id="confirmPass"/>
        </label>
        <br/>
        <Link className="go" to="/login"><h6>Registered User?</h6></Link>
        <button type="submit" id='register' className='btn btn-primary'>Register</button>      
    </form>
        </div>
     );
}

export default Register;