import './App.css'
import Landing from './components/Landing'

import NavBar from './components/NavBar'

const App = () => {

  return (
    <>
      <div className='fixed'>
        <NavBar />
        <Landing />
      </div>
    </>
  )
}

export { App }
