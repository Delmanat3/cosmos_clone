import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Button } from "@mui/material";

import { Component } from "react";


const LogoImg="./assets/img/logo.png"
//STYLING WILL COME BACK AND CHANGE TO SX

 const MainDiv=styled("div")({
    display: "flex"
    })

 const LoginFormSection=styled("section")({
    width:"50%",
    margin:'2rem',
    maxWidth:'22rem'

})
 export const Banner=styled("div")({
    height:"86.5vh",
    padding:'3rem',
    width:'100%',
    backgroundColor:"#501069"
  
})
 const LogoBox=styled("div")({
    width:"100%",
    display:"flex",
    justifyContent:"flex-start"
      

})

 const LoginForm=styled("form")({
   maxWidth:"30rem"  
}
)
export function LoginDesktop(){

    const loginSubmit=(e)=>{
        e.preventDefault();
        const loginBody = new FormData(e.currentTarget)
        console.log(loginBody.get('email'))
        console.log(loginBody.get('password'))
        //come back later/////////////////////////
    }   
return(

        
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }

