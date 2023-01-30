import { LateralProps } from "./LateralBarProps"

const LateralBar = ({ isVisible }: LateralProps) => {
    return (
        isVisible ? (
            <section className="grid place-content-center flex-column absolute w-[100vw] h-[95vh] top-11 right-0 bg-gray-400 dark:bg-gray-800">
                <ul className="list-none">
                    <li className="text-white text-xl border-b-2 border-white mb-6">Biography</li>
                    <li className="text-white text-xl border-b-2 border-white mb-6">Experience</li>
                    <li className="text-white text-xl border-b-2 border-white mb-6">Projects</li>
                    <li className="text-white text-xl border-b-2 border-white mb-6">Social Media</li>
                </ul>
            </section>
        ) : null
    )
}

export { LateralBar }