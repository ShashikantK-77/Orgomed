import React from 'react'

const Certification = () => {
  return (
    <div>
    

   
<section className="certifieds px-12 py-6 bg-teal-400">
<h2 className="  text-4xl font-semibold text-white text-center py-4 text-teal-800
">OUR CERTIFICATES</h2>
<div className="grid grid-cols-3">
<img className="w-9/12 mx-auto border-8 border-teal-800 drop-shadow-xl  hover:w-10/12 hover:duration-1000 hover:ease-in-out" src={require('./images/CERT A.jpg')} alt=""/>

<img className="w-9/12 mx-auto border-8 border-teal-800 drop-shadow-xl  hover:w-10/12 hover:duration-1000 hover:ease-in-out" src={require('./images/CERT B.jpg')} alt=""/>

<img className="w-9/12 mx-auto border-8 border-teal-800 drop-shadow-xl  hover:w-10/12 hover:duration-1000 hover:ease-in-out" src={require('./images/CERT c.jpg')} alt=""/>

    
</div>


</section>

    </div>
  )
}

export default Certification