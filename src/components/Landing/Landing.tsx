import React from 'react'

const Landing = () => {
    return (
        <div className='grid place-content-center w-[100vw] h-[95vh] top-11 right-0 px-11 py-11 bg-gray-400 '>
            <div>Portfolio</div>
            <div className='w-[40vw] h-[40vh]'>
                <img className='rounded-full' src="/src/assets/images/profile.jpg" alt="Profile" />
            </div>
        </div>
    )
}

export { Landing }