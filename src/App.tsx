import './App.css'
import Landing from './components/Landing'

import NavBar from './components/NavBar'

const App = () => {

  return (
    <>
      <div className='fixed'>
        <NavBar />
        <Landing />
        {/* <div className='w-[100vw] h-[100vh] grid place-content-center bg-gradient-to-r from-black via-blue-900 to-black'>
        </div> */}
      </div>
    </>
  )
}

export { App }
