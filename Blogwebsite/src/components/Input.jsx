import { ID } from "appwrite";
import React,{useId} from "react";

const Input=React.forwardRef(function Input(
    
    {
        label,
        type="text",
        className="",
        id,
        ...props
    },ref){
    return (
        <div className="w-full">
        {
            label && <label className="inline-block mb-1 pl-1" htmlFor={id}></label>
        }
        <input
        type={type}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
        ref={ref}
        {...props}
        id={id}
        >
        </input>
        </div>
    )
})

export default Input;