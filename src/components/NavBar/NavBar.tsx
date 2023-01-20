import SvgIcon from '../SvgIcon'
import ToggleTheme from './components'
import './index.css'

const NavBar = () => {
  return (
    <nav className='border border-t-0 border-gray-900 ease-out duration-150 bg-white px-2 py-2.5 sm:px-4 dark:bg-gray-900 dark:border-0 dark:border-t-0'>
      <div className='flex flex-wrap items-center justify-between mx-auto'>
        <SvgIcon
          iconName='bars'
          svgProp={{ className: 'w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 dark:fill-white' }} />
        <p className='text-2xl font-bold ml-10 fixed uppercase sm:text-3xl dark:text-white'>Portfolio</p>
        <ToggleTheme />
      </div>
    </nav>
  )
}

export { NavBar }