import React from 'react'

const Vimiva = () => {
  return (
    <div>
    <div className="bg-white grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-3">
   

    <section className="w-4/4 bg-white grid lg:grid-cols-1 sm:grid-cols-1">
      <div className="">
      <img className="w-4/4 " src={require('../Home/images/vision.jpg')} alt=""/>
      </div>

      <div className="lg:mx-4 md:p-4 sm:p-4">
        <h2 className="text-4xl font-bold text-teal-800 text-left sm:text-center">Our Vission</h2>
    
        <p>
        We envision to achieve aim of a healthy life and deliver innovative as well as high-quality pharmaceutical products of International standards.
        </p>
        <br />
      </div>
    </section>
    
    

    <section className="w-4/4 bg-white grid lg:grid-cols-1 sm:grid-cols-1">
      <div className="">
      <img className="w-4/4 " src={require('../Home/images/mission.jpg')} alt=""/>
      </div>

      <div className="lg:mx-4 md:p-4 sm:p-4">
        <h2 className="text-4xl font-bold text-teal-800 text-left sm:text-center">Our Mission</h2>
        
        <p>
        We shall strive to ensure that we provide superior quality pharmaceutical products for our customers that helps to improve their lives. Our promise is to maintain the quality and to develop and deliver healthcare products as per the global standards.
        </p>
        <br />
      </div>
    </section>
  


    <section className="w-4/4 bg-white grid lg:grid-cols-1 sm:grid-cols-1">
      <div className="">
      <img className="w-4/4 " src={require('../Home/images/values.jpg')} alt=""/>
      </div>

      <div className="lg:mx-4 md:p-4 sm:p-4">
        <h2 className="text-4xl font-bold text-teal-800 text-left sm:text-center">Our Values</h2>
    

        <p>
          Innovation , Customer centricity , Care for Society.
        </p>
        <br />
      </div>
    </section>
  

  </div>

    </div>
  )
}

export default Vimiva