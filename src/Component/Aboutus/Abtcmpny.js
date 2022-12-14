import React from 'react'

const Abtcmpny = () => {
  return (
    <div>
    <section
    class=" mx-auto bg-white grid lg:grid-cols-2 sm:grid-cols-1"
  >
    <div class="">
    <img className="w-4/4 " src={require('../Home/images/abtus.jpeg')} alt=""/>
    </div>

    <div class="lg:mx-4 md:p-4 sm:p-4 my-auto">
      <h2 class="text-4xl font-bold text-teal-500 ">WELCOME TO</h2>
      <h2 class="text-4xl font-bold text-teal-500 uppercase">ORGOMED HEALTHCARE </h2>
      <p>
      We at ORGOMED HEALTHCARE believe in improving quality of life by offering healthcare solutions that cares for you. We are a Pune based Pharmaceutical company incorporated by Mrs.Neelam R Singh in April 2018. We always work for giving a healthier touch to your lives. We offer speciality product in the field of Diabetology, Cardiology, Dermatology, Gynaecology & General Segment. Our aim is to serve people to achive their goal of healthy life with assured quality at affordable price.
      </p>
      <br/>
      <p> We believe that learning never stops and our team would focus on learning and research so that we can deliver quality innovative solutions. We are committed to meet the needs of our customers. Customer satisfaction is the goal of every individual at ORGOMED HEALTHCARE.</p>
   <br/>
   </div>
  </section>
    </div>
  )
}

export default Abtcmpny