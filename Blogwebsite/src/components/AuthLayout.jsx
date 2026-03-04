import React,{useEffect,useState} from "react";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";


function AuthLayout({ children,authentication=true }) {
    const naviagate = useNavigate();
    const [loader,setLoader] = useState(true);
    const authStatue=useSelector(state=>state.authStatue);
    
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {children}
        </div>
    );
}

export default AuthLayout;