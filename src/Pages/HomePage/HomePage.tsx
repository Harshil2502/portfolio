import Lottie from 'lottie-react'
import React from 'react'
import contactAnimation from '../../Assets/contactaninmation.json'
function HomePage() {
  return (
    <div className=' text-red-600 font-bold w-screen bg-white h-screen flex items-center justify-center overflow-hidden'>
      <Lottie animationData={contactAnimation }/>     </div>
  )
}

export default HomePage