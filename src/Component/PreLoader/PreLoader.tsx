import Lottie from 'lottie-react'
import preloaderanimaton from "../../Assets/preloaderanimation.json"
import React, { useState } from 'react'

function PreLoader() {
  const [load , setLoad] = useState(true)
  setInterval(()=>{
    setLoad(false)
  },100)
  return (
    <div className=' bg-[#030014] w-screen flex items-center justify-center min-h-screen'>
        

<p className={`blink  text-white font-extrabold text-3xl ${load?"opacity-0":"opacity-100"}`}>LOADING...

</p>
        
        </div>
  )
}

export default PreLoader