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
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {children}
        </div>
    );
}

export default AuthLayout;