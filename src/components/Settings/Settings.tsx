import { SettingsProps } from "./SettingsProps"

const Settings = ({ isVisible }: SettingsProps) => {
    return (
        isVisible ? (
            <section className='flex-column absolute w-[60vw] h-[30vh] border-2 rounded-b-xl top-11 border-t-0 right-0 sm:top-12 sm:border-t-3 sm:w-[45vw] md:top-12 md:w-[40vw] md:border-t-0 lg:top-12 lg:w-[30vw] lg:mt-1 border-gray-900 bg-gray-900 dark:bg-white'>
                <div className="h-[10vh] px-2 text-center py-2 my-4 md:my-0.5 lg:my-1">
                    <p className="text-white text-base font-bold sm:text-lg md:text-xl uppercase dark:text-gray-900">Choose Color</p>
                    <button className="rounded text-4xl mt-2">⚪</button>
                </div>
                <div className="h-[10vh] px-2 text-center uppercase py-2 md:my-5 lg:my-4">
                    <p className="text-white text-base font-bold sm:text-lg md:text-xl dark:text-gray-900">Choose Font Size</p>
                    <button className="text-white text-3xl font-bold rounded mx-3 dark:text-gray-900">A</button>
                    <button className="text-white text-4xl font-bold rounded mx-3 dark:text-gray-900">A</button>
                    <button className="text-white text-5xl font-bold rounded mx-3 dark:text-gray-900">A</button>
                </div>
            </section>
        ) : null
    )
}

export { Settings }