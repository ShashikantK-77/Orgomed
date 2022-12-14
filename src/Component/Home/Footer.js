import React from 'react'
import {NavLink} from  "react-router-dom";

const Footer = () => {
  return (
    <div>
    <footer className="pt-4 dark:bg-teal-400 dark:text-gray-50">
	<div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
		<div className="grid grid-cols-12">
			<div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <img className="w-1/4 " src={require('./images/orgomedfooter.jpg')} alt=""/>
				<a rel="noopener noreferrer" href={"/"} className="flex justify-center space-x-3 md:justify-start">
                <span className="self-center text-2xl font-semibold">Orgomed Healthcare </span>
                  
				</a>
                <p>Survey no 1/2/2, 2/1/1, Vastushanti Residency, wing -C, Shop no -3, Ground floor, Mamtanagar Near Ganpati Mandir, Old Sangvi- Pune 411027</p>
			</div>
		
			<div className="col-span-6 text-center md:text-left md:col-span-3 uppercase py-2">
				<p className="pb-1 text-lg font-medium">Category</p>
				<ul>
                <li>
                <NavLink to={"/"}>home</NavLink>
                </li>
                <li>
                <NavLink to={"/about"}>About us</NavLink>
                </li>
                <li>
                <NavLink to={"/product"}>products</NavLink>
                </li>
                <li>
                <NavLink to={"/contact"}>contact</NavLink>
                </li>
					
				</ul>
			</div>

            <div className="col-span-6 text-center md:text-left md:col-span-3 uppercase py-2">
            <p className="pb-1 text-lg font-medium">Connect</p>
            <ul>
                <li>
                <h2 className='font-bold'>Email:</h2>
                <p>info@Orgomed.com</p>
                </li>
                <li>
                <h2 className='font-bold'>Phone No:</h2>
                <p>+91 9766311085,
                   +91 7387097669
                </p>
                </li>
                <li>
                <h2 className='font-bold'>Gst No:</h2>
                <p>27BOOPS8847A1ZE
                </p>
                </li>
            
                
            </ul>
        </div>
		</div>
		<div className="grid justify-center pt-4 pb-4 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©2022 All rights reserved Orgomed Healthcare </span>
                <a rel="noopener noreferrer" href={"https://reflexarts.in/"}>
					<span>Designed By ReflexArts</span>
				</a>
               
           
           
    

				<a rel="noopener noreferrer" href={"/"}>
					<span>Privacy policy</span>
				</a>
				<a rel="noopener noreferrer" href={"/"}>
					<span>Terms of service</span>
				</a>
			</div>
	
		</div>
	</div>
</footer>
    </div>
  )
}

export default Footer