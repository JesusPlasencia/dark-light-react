import './App.css'

import NavBar from './components/NavBar'

const App = () => {

  return (
    <>
      <div className='fixed'>
        <NavBar />
        <div className='w-[100vw] h-[100vh] grid place-content-center bg-gradient-to-r from-black via-blue-900 to-black'>
        </div>
      </div>
    </>
  )
}

export { App }
