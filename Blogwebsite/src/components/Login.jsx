import React,{use, useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import {Login as authLogin} from "../store/authSlice";
import {Button,Input,Logo} from "./index"
import {useDispatch} from "react-redux";
import { AuthService } from "../appwrite/auth";
import {useForm} from "react-hook-form";

function Login() {
const dispatch = useDispatch();
const navigate=useNavigate();
const {register,handleSubmit}=useForm();
const [error,setError]=useState("");


const login= async(data)=>{
    setError("");

    try {
        
    } catch (error) {
        
    }
}

    return(
        <div>
            login
        </div>
    )
}


export default Login;