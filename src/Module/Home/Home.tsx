import React, { useState } from 'react'
import {motion as m} from 'framer-motion'
import ReactTyped from 'react-typed'
import { fadeAnimation } from '../../Assets/motion'
function Home() {
    const strArray =["Developer" , "Engineer","ProblemSolver" , "Harshil"]
    const cl = ["bg-red-400","bg-blue-700","bg-green-700","bg-pink-700"]
const [color , setColor] = useState(1)
console.log(strArray[color], cl[color])
  return (
      
    <m.div {...fadeAnimation} className={`w-full min-h-screen bg-black flex items-center justify-center text-white`}>
       <p className={`font-extrabold text-white space-x-4 text-5xl underline p-5 ${cl[color]} rounded-lg transition-all duration-75 ease-in ` }> I am a <ReactTyped
          strings={strArray}
          typeSpeed={100}
          preStringTyped={(str:number)=>setColor(str)}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true} /> </p>
    </m.div>

  )
}

export default Home