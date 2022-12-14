import React from 'react'

const abtus = () => {
  return (
    <div>
    <section className=" mx-auto bg-white grid lg:grid-cols-2 sm:grid-cols-1 ">
      
    <div className="">
    <img className="w-4/4 " src={require('./images/abtus2.jpg')} alt=""/>
    </div>

    <div className="md:px-4 sm:px-16 ">
        <h2 className="text-4xl font-semibold text-teal-400 uppercase">WE are</h2>
        <h2 className="text-4xl font-semibold text-teal-400 uppercase">orgomed Healthcare</h2>
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

export default abtus