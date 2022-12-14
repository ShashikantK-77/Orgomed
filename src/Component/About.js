import React from 'react'
import Navbar from './Navbar';
import Footer from './Home/Footer';
import Mainabt from './Aboutus/Mainabt';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
    initial = {{scaleY:0}}
    animate = {{scaleY:1}}
    exit = {{scaleY:0}}
    transition = {{duration:0.5}}
    >
    <Navbar/>
    <Mainabt/>
    <Footer/>
   
    </motion.div>
  )
}

export default About