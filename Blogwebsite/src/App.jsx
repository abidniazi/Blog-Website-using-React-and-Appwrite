import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch} from 'react-redux'
import authservice from "./appwrite/auth.js"
import {login,logout} from "./store/authSlice.js"

function App() {
  const [loading, setLoding] = useState(true)
  const dispatch=useDispatch();

  useEffect(()=>{
authservice.getCurrentUser()
.then((userdata)=>{
  if (userdata) {
    dispatch(login({userdata}))
  }else{
    dispatch(logout())
  }
})
.finally(setLoding(false))
  },[])


 return !loading ? (
  <div>
    Blog website
  </div>
 ) : null
}

export default App
