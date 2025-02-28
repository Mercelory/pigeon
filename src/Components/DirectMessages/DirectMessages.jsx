import React from 'react'
import LeftSideDM from './LeftSideDM'
import RightSIdeDM from './RightSIdeDM'

function DirectMessages() {
  return (
    
    <section id = "#Messages">
        <div className='md:hidden text-center mt-50'>
            <p>Pigeon is now not working on mobile devices :(</p>
        </div>
         <div className="md:flex flex-row hidden">
      <div className="md:pt-15 pt-5 pl-5 md:h-screen md:w-[25%] md:border-r-1 border-slate-200 h-[20%] w-screen relative">
      <LeftSideDM/>
      </div>
      <div className="md:pt-10 md:h-screen md:w-[75%] h-[80%] relative">
      <RightSIdeDM/>
      </div>
      </div>
    </section>
  )
}

export default DirectMessages