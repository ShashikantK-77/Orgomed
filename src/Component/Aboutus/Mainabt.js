import React from 'react'
import Abtcmpny from './Abtcmpny'
import Director from './Director'
import Vimiva from './Vimiva'
import Whychooseus from './Whychooseus'

const Mainabt = () => {
  return (
    <div>
    
    <div className="Abouthome">
      <div
      className="textpro font-bold lg:text-7xl md:text-4xl sm:text-4xl bg-teal-500 p-4 rounded-md text-white"
      >
        <h2>About Orgomed</h2>
      </div>
    </div>
    <Abtcmpny/>
    <Whychooseus/>
    <Vimiva/>
    <Director/>
    </div>
  )
}

export default Mainabt