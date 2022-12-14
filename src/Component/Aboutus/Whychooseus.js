import React from 'react'

const Whychooseus = () => {
  return (
    <div>
    <section
    class=" mx-auto bg-white grid lg:grid-cols-2 sm:grid-cols-1"
  >
   

    <div className="lg:mx-4 md:p-4 sm:p-4 my-auto">
      <h2 className="text-4xl font-bold text-teal-500 ">WHY CHOOSE </h2>
      <h2 className="text-4xl font-bold text-teal-500 uppercase">ORGOMED HEALTHCARE</h2>
      <h2 className='text-2xl font-semibold text-teal-700'>Quality Assurance</h2>
      <p>
      Today we have more than 250 products in orLife Healthcare with DCGI Approval.We have always focused on improving the health of community by offering safe efficacious.
      </p>

      <h2 className='text-2xl font-semibold text-teal-700'>Wide Range</h2>
      <p>
      We are ISO 9001:2015 Certified PCD Pharma Company.We have latest (DCGI Approved) molecules which are potential revenue product for our associates.
      </p>

      <h2 className='text-2xl font-semibold text-teal-700'>Trust & Integrity</h2>
      <p>Our work culture thrives on integrity. We aim to win the trust of our customers by following ethical business practices and by maintaining the quality of our products.</p>

    </div>
    <div className="">
    <img className="w-4/4 " src={require('../Home/images/whychooseus.jpg')} alt=""/>
    </div>
  </section>
    </div>
  )
}

export default Whychooseus