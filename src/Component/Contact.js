import React from 'react'
import Maincont from './Contact/Maincont';
import Navbar from './Navbar';
import Footer from './Home/Footer';

import {motion} from "framer-motion";
const Contact = () => {
  return (
    <motion.div
    initial = {{scaleY:0}}
    animate = {{scaleY:1}}
    exit = {{scaleY:0}}
    transition = {{duration:0.5}}
    >
    <Navbar/>
    <Maincont/>
    <Footer/>
    </motion.div>
  )
}

export default Contact