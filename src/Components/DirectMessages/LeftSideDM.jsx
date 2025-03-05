import NavBar from '../NavBar'
import MessagesList from './MessagesList'
import SearchMessages from './SearchMessages'

function LeftSideDM() {
  return (
    <section className=''>
        <SearchMessages/>
        <MessagesList/>
        <NavBar />
    </section>
  )
}

export default LeftSideDM