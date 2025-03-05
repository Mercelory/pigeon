import SearchMessages from '../DirectMessages/SearchMessages'
import NavBar from '../NavBar'
import ThreadsList from './ThreadsList'

function ThreadsLeft() {
  return (
    <div>
        <SearchMessages />
        <NavBar />
        <ThreadsList />
    </div>
  )
}

export default ThreadsLeft