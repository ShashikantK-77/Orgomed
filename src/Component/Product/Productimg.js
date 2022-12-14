import React from "react";
import Products from "./Products";

const Productimg = () => {
  return (
    <div>
      <div className="h-auto py-12 px-12 bg-teal-600 text-center ">
        <p
          className=" text-white text-2xl wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0s"
        >
          <span className="text-xl">
            OUR PRODUCTS
            <br />
          </span>
          We have wide range of pharmaceutical products like Capsule,
          Injections, Tablets, Suspensions, Oinments etc. <br /> all products
          get manufactured in ISO, GI and WHO certified plants.
        </p>
      </div>
      <section className="p-8 text-stone-700 mx-auto place-content-center">
      <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto">
      {Products.map((curElem) => {
        return (
          <div key={curElem.id}>
     
                <div className=" p-2 lg:p-4 mx-auto">
                  <img src={curElem.path} alt="" className="w-4/4  mx-auto" />

                  <h1 className="text-xl lg:text-4xl p-2 font-bold">{curElem.Productname}</h1>
                  <h5>{curElem.Content}</h5>
                  <p>MRP is Rs.<span className="text-xl font-semibold"> {`  ${curElem.mrp}.00/-`}</span> </p>
                </div>
          
          </div>
        );
      })}
      </div>
      </section>
    </div>
  );
};

export default Productimg;
