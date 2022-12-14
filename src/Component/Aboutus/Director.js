import React from 'react'

const Director = () => {
  return (
    <div>
    <section className="bg-teal-600 px-4 lg:px-10 py-5 mx-auto">
    <div className=" pb-4  text-center font-bold text-4xl text-white ">
        TEAM OF DIRECTORS
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 mx-auto text-center lg:my-2 ">

        <div className="lg:p-4 sm:p-6 lg:w-3/4 sm:w-2/4 lg:my-2 sm:my-2 mx-auto bg-white rounded hover:drop-shadow-lg ">
            <h2 className="font-semibold sm:text-2xl lg:text-4xl text-teal-600">Mrs.Neelam R Singh </h2>

            <h5 className="lg:text-xl sm:text-sm text-gray-600">Proprietor/ Managing Director</h5>

            <p>She is a decisive and action oriented visionary who took over a sick Healthcare Company named Orgomed healthcare in 21st Jan 2020.</p>
        </div>

        <div className="lg:p-4 sm:p-6 lg:w-3/4 sm:w-2/4 lg:my-2 sm:my-2 mx-auto bg-white rounded hover:drop-shadow-lg ">
            <h2 className="font-semibold sm:text-2xl lg:text-4xl text-teal-600">Mr.Ramprakash A Singh </h2>
            <h5 className="lg:text-xl sm:text-sm  text-gray-600">Chief Executive Officer</h5>
            <p>He is a CEO at Orgomed healthcare where he is responsible for overseeing all financial and commercial matters.</p>
            <p></p>
        </div>

    </div>


</section>
    </div>
  )
}

export default Director