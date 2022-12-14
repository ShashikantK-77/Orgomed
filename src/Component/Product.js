import React from 'react'
import Footer from './Home/Footer';
import Mainpro from './Product/Mainpro';
import Navbar from './Navbar';

import {motion} from "framer-motion";

const Product = () => {
  return (
    <motion.div
    initial = {{scaleY:0}}
    animate = {{scaleY:1}}
    exit = {{scaleY:0}}
    transition = {{duration:0.5}}
    >
<Navbar/>
<Mainpro/>

<Footer/>
</motion.div>
  )
}

export default Product