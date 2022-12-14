import React from 'react'
import Navbar from './Navbar';
import MainHead from './Home/MainHead'
// import Certification from './Home/Certification';
import Abtus from './Home/Abtus'
import Footer from './Home/Footer';

import {motion} from "framer-motion";
import Stockiest from './Home/Stockiest';
import Certification from './Home/Certification';

const Home = () => {
  return (
    
<motion.div 
initial = {{scaleY:0}}
animate = {{scaleY:1}}
exit = {{scaleY:0}}
transition = {{duration:0.5}}
>
<p className="p-1 text-lg text-white bg-green-700 text-center">The Fastly Growing Healthcare Company</p>
<Navbar/>

<MainHead/>
<Abtus/>
<Certification/>
<Stockiest/>

<Footer/>





</motion.div>

  )
}

export default Home