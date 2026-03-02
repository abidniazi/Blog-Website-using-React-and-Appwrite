import { useEffect, useState } from 'react'

import {useDispatch} from 'react-redux'
import authservice from "./appwrite/auth.js"
import {login,logout} from "./store/authSlice.js"
import { Footer,Header } from './components/index.js'


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
  <div className='min-h-scren flex-wrap content-between bg-gray-400'>
    Blog website
    <div className='w-full block'>
      <Header/>
      {/* Outlet */}
      <Footer/>
    </div>
  </div>
 ) : null
}

export default App
