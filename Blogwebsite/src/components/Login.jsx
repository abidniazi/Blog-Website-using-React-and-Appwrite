import React,{use, useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import {Login as authLogin} from "../store/authSlice";
import {Button,Input,Logo} from "./index"
import {useDispatch} from "react-redux";
import authservice, { AuthService } from "../appwrite/auth";
import {useForm} from "react-hook-form";

function Login() {
const dispatch = useDispatch();
const navigate=useNavigate();
const {register,handleSubmit}=useForm();
const [error,setError]=useState("");


const login= async(data)=>{
    setError("");

    try {
        const userData= await authservice.getCurrentUser();
            if(userData) dispatch(authLogin(userData));
            navigate("/");
    
    } catch (error) {
        setError(error.message)
    }
}

    return(
        <div
        className="flex items-center justify-center w-full">
           <div className="">

           </div>
        </div>
    )
}


export default Login;