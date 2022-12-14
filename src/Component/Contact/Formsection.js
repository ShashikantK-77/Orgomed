import React from 'react'

const formsection = () => {
  return (
    <div>
    <section class="mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:mx-16 md:mx-8 sm:mx-4">

      

<div class="w-full ">
  <div class="p-6  sm:rounded-md">
    <h2 class="text-center text-4xl mb-4 font-semibold text-sky-600">Feel free to contact us</h2>
    <form  method="post" action="./contactpage.php">
      <label class="block mb-6">
        <span class="text-gray-700">Your name</span>
        <input
          type="text"
          name="fname"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-0
          "
          placeholder="Your Name"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Address</span>
        <input
          name="City"
          type="text"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Please Mention Your Address"
          required
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Email address</span>
        <input
          name="email"
          type="email"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="info@orgomedhealthcare.com"
          required
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Message</span>
        <textarea
          name="msg"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring-inset
            focus:ring-sky-600
            focus:ring-opacity-50
          "
          rows="3"
          placeholder="Tell us what you're thinking about..."
        ></textarea>
      </label>
      <div class="mb-6">
        <button
          type="submit"
          class="
            h-10
            px-5
            text-indigo-100
            bg-sky-600
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-700
          "
        >
          Contact Us
        </button>
      </div>
      <div>
       
      </div>
    </form>
  </div>
</div>


 <div class="p-4">

  <img className="w-3/4 mx-auto" src={require('../Home/images/contactccc.png')} alt=""/>

 </div>
</section>
    </div>
  )
}

export default formsection