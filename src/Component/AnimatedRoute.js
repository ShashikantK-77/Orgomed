import React from 'react'
import { useLocation } from 'react-router-dom'
import {
    Routes,
    Route,
  } from "react-router-dom";
  import About from './About';
import Contact from "./Contact";
import Home from "./Home";
import Product from "./Product";
import Error from "./Error";

import {AnimatePresence} from "framer-motion";

const AnimatedRoute = () => {
    const location = useLocation();
  return (
<AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route exact path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/product" element={<Product/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="*" element={<Error/>} />
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoute