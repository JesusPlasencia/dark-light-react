import SvgIcon from "../../SvgIcon"

const Bar = ({handleClick}: any) => {
  return (
      <>
          <SvgIcon
              iconName='bars'
              svgProp={{ className: 'w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 dark:fill-white' }}
              handleClick={handleClick}
              />
      </>
  )
}

export { Bar }