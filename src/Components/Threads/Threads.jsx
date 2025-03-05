import ThreadsLeft from './ThreadsLeft'
import ThreadsRight from './ThreadsRight'
function Threads() {
  return (
   
    <section id = "#Messages" className=''>
    <div className='md:hidden text-center mt-50 '>
        <p className='p-5'>Pigeon is now not working on mobile devices :(</p>
    </div>
     <div className="md:flex hidden">
  <div className="p-3 h-screen w-1/4 border-r-1 border-indigo-50">
  <ThreadsLeft/>
  </div>
  <div className="h-screen w-3/4">
  <ThreadsRight/>
  </div>
  </div>
</section>
  )
}

export default Threads