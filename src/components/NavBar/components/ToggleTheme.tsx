import SvgIcon from "../../SvgIcon"
import { useState } from "react"
import Settings from "../../Settings";

const ToggleTheme = () => {

    const [isLight, setIsLight] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    const handleTheme = () => {
        let html = document.getElementsByTagName("html")[0]
        if (isLight) {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }
        setIsLight(!isLight)
    }
    
    const handleSettings = () => {
        setIsVisible(!isVisible)
    }

    return (
        <>
            <div className="flex flex-row ">
                <div
                    className="flex flex-row bg-gray-900 rounded-lg dark:bg-white">
                    {isLight &&
                        <>
                            <SvgIcon
                                iconName="sun"
                                svgProp={{
                                    fill: "white",
                                    className: 'transition-transform hover:cursor-pointer duration-150 w-12 h-6 pr-6 mr-2 sm:w-14 sm:h-7 lg:w-16 lg:h-8 dark:fill-gray-900',
                                }}
                                handleClick={handleTheme} />
                        </>
                    }
                    {!isLight &&
                        <>
                            <SvgIcon
                                iconName="moon"
                                svgProp={{
                                    fill: "white",
                                    className:
                                        'transition-transform hover:cursor-pointer duration-150 w-12 h-6 pl-6 ml-2 sm:w-14 sm:h-7 lg:w-16 lg:h-8 dark:fill-gray-900'
                                }}
                                handleClick={handleTheme} />
                        </>
                    }
                </div>
                <SvgIcon
                    iconName="tooth"
                    svgProp={{
                        className:
                            'hover:cursor-pointer w-6 h-6 ml-2 sm:w-7 sm:h-7 lg:w-8 lg:h-8 dark:fill-white'
                    }}
                    handleClick={handleSettings} />
            </div>
            <Settings isVisible={isVisible} />
        </>
    )
}

export { ToggleTheme }