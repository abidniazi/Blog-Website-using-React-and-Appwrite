import React,{useEffect,useState} from "react";
import {useSelector} from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";


function AuthLayout({ children,authentication=true }) {
    const navigate = useNavigate();
    const [loader,setLoader] = useState(true);
    const authStatus=useSelector(state=>state.authStatue);
    useEffect(()=>{
    if(authentication && authStatus!==authentication){
        navigate("/login");
    }else if(!authentication && authStatus!==authentication){
        navigate('/');
    }
    setLoader(false);

    },[authStatus,navigate,authentication])
    
    return  loader ? <h1>loading...   </h1>:<>{children}</>;
    
}

export default AuthLayout;