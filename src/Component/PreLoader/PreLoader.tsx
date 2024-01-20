import Lottie from 'lottie-react'
import preloaderanimaton from "../../Assets/preloaderanimation.json"
import React from 'react'

function PreLoader() {
  return (
    <div className=' bg-black w-screen flex items-center justify-center min-h-screen'>
        

<Lottie animationData={preloaderanimaton}/>
        
        </div>
  )
}

export default PreLoader