import { useState } from 'react'
import LateralBar from '../LateralBar'
import { Title, ToggleTheme, Bar } from './components'
import './index.css'

const NavBar = () => {

  const [isVisibleLateral, setIsVisibleLateral] = useState(false);

  const handleLateral = () => {
    setIsVisibleLateral(!isVisibleLateral)
  }

  return (
    <nav className='border border-t-0 border-gray-900 ease-out duration-150 bg-white px-2 py-2.5 sm:px-4 dark:bg-gray-900 dark:border-0 dark:border-t-0'>
      <div className='flex flex-wrap items-center justify-between mx-auto'>
        <Bar handleClick={handleLateral} />
        <LateralBar isVisible={isVisibleLateral} />
        <Title />
        <ToggleTheme />
      </div>
    </nav>
  )
}

export { NavBar }