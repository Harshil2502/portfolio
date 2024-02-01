
import { Router, RouterProvider } from 'react-router-dom';
import navigationRouter, { ROUTES } from './Navigation/Navigation';
import { useState, useEffect } from 'react';
import PreLoader from './Component/PreLoader/PreLoader';
import { AnimatePresence, motion as m} from 'framer-motion'
import { fadeAnimation } from './Assets/motion';
import StarsCanvas from './Component/StarBackGroud/StarBackGroud';

function App() {
  const [screenLoading, setScreenLoading] = useState(false);
 
  useEffect(() => {
    setScreenLoading(true);
    
    setTimeout(() => {
      setScreenLoading(false);
      
    }, 2000);
  }, []);
  return (<AnimatePresence initial={false}mode='wait'>
 { screenLoading ?
<m.div  {...fadeAnimation} className='bg-[#030014]'>
  <PreLoader key={"preloader"}/>
</m.div>
 :
<m.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1, ease:"easeInOut"}}  className='bg-black'>
 <StarsCanvas/>
<RouterProvider router={navigationRouter} />
</m.div>
 
}
  </AnimatePresence>
  );
}

export default App;
