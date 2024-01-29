
import React from 'react'
import {motion as m} from 'framer-motion'
import { fadeAnimation } from '../../Assets/motion'
import Home from '../../Module/Home/Home'
import Navbar from '../../Component/Navbar/Navbar'
import Skills from '../../Component/Skills/Skills'
import TestimonialsSection from '../../Component/TestimonialSections/TestimonialSection'
import Experience from '../../Component/Experience/Experience'
import Footer from '../../Component/Footer/Footer'


function HomePage() {
  return (
    <m.div
    {...fadeAnimation}
    className=' overflow-hidden flex flex-col justify-center items-center bg-[#030014] '>
      <Navbar/>
 <Home/>  
 <Skills/>
 <Experience/>
 <TestimonialsSection/>
 <Footer/>
    </m.div>
  )
}

export default HomePage