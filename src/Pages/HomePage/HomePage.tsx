import Lottie from 'lottie-react'
import React from 'react'
import {motion as m} from 'framer-motion'
import { fadeAnimation, slideAnimation } from '../../Assets/motion'
import Home from '../../Module/Home/Home'


function HomePage() {
  return (
    <m.div
    {...fadeAnimation}
    className=' overflow-hidden '>
 <Home/>  
    </m.div>
  )
}

export default HomePage