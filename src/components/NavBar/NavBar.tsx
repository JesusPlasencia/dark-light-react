import SvgIcon from '../SvgIcon'
import ToggleTheme from './components'
import './index.css'

const NavBar = () => {
  return (
    <nav className='border border-gray-900 ease-out duration-150 bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 dark:border-0'>
      <div className='flex flex-wrap items-center justify-between mx-auto'>
        <SvgIcon
          iconName='bars'
          svgProp={{ className: 'w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 dark:fill-white' }} />
        <ToggleTheme />
      </div>
    </nav>
  )
}

export { NavBar }