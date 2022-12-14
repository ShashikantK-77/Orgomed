import React from 'react'

function MainHead() {
  return (
    <div>
    <div className="mainbanner">
<div className="maincircl">
    <h2 className="text-3xl text-center text-green-700">A Leading Name <br /> in Healthcare</h2>
    <img className="w-2/4 mx-auto" src={require('./images/orgomedlogo.png')} alt=""/>
    <p className=" text-lg text-green-700 text-center">Dedicated to all your <br /> Pharmaceutical Needs</p>
</div>
</div>

<section className="p-8 bg-gray-100 w-3/4 mx-auto -mt-8 relative text-center">
<p className="text-2xl ">Welcome To The World of</p>
<h2 className="text-5xl lg:text-5xl md:text-4xl sm:text-3xl font-medium text-teal-400">Orgomed Healthcare</h2>

<p className="mt-6">Orgomed Healthcare committed to provide high standard quality products in the field of Medicine. engaged in improving peoples lives through meaningful and innovative therapeutic solutions for various disease , Exceed life care beond boundaries to fulfill the Dreams.</p>
</section>
    </div>
  )
}

export default MainHead