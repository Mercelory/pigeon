import React from 'react'
import LeftSideDM from './LeftSideDM'
import RightSIdeDM from './RightSIdeDM'

function DirectMessages() {
  return (
    
    <section id = "#Messages">
        <div className='md:hidden text-center mt-50'>
            <p className='p-5'>Pigeon is now not working on mobile devices :(</p>
        </div>
         <div className="md:flex hidden">
      <div className="pt-15 pl-5 h-screen w-1/4 border-r-1 border-slate-200">
      <LeftSideDM/>
      </div>
      <div className="pt-10 h-screen w-3/4">
      <RightSIdeDM/>
      </div>
      </div>
    </section>
  )
}

export default DirectMessages