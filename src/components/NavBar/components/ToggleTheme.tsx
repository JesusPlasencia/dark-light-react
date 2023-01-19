import SvgIcon from "../../SvgIcon"
import { useState } from "react"

const ToggleTheme = () => {

    const [isLight, setIsLight] = useState(true);

    const handleTheme = () => {
        let html = document.getElementsByTagName("html")[0]
        if (isLight) {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }
        setIsLight(!isLight)
    }

    return (
        <>
            <div className="flex flex-row ">
                <div
                    className="flex flex-row bg-black rounded-lg hover:cursor-pointer">
                    {isLight &&
                        <>
                            <SvgIcon
                                iconName="sun"
                                svgProp={{
                                    fill: "white",
                                    className:
                                        `transition-transform
                                    duration-150
                                    w-12 h-6 pr-6 mr-2 sm:w-14 sm:h-7 lg:w-16 lg:h-8 dark:fill-white
                                    `,
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
                                        'transition-transform duration- 150 w-12 h-6 pl-6 ml-2 sm:w-14 sm:h-7 lg:w-16 lg:h-8 dark:fill-white'
                                }}
                                handleClick={handleTheme} />
                        </>
                    }
                </div>
                <SvgIcon
                    iconName="3-dots"
                    svgProp={{
                        className:
                            'w-6 h-6 ml-2 sm:w-7 sm:h-7 lg:w-8 lg:h-8 dark:fill-white'
                    }} />
            </div>

        </>
    )
}

export { ToggleTheme }