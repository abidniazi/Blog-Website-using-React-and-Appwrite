import React from "react";
import authservice from "../appwrite/auth";
import {useForm} from "react-hook-form";
import {Button,Input,Logo} from "./index"
import {Link,useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Login} from "../store/authSlice";
function Signup() {
const dispatch = useDispatch();
const navigate=useNavigate();
const {register,handleSubmit}=useForm();
const [error,setError]=useState("");

const create=async(date)=>{
    setError("");

      try {
       const userData= await authservice.createAccount(data);
        if
      } catch (error) {
        setError(error.message);
      }
}

return(
    <div>
        signup
    </div>
)
}

export default Signup;