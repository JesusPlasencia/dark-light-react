const Landing = () => {
    return (
        <div className='grid justify-items-center w-full h-full scroll-smooth top-11 right-0 px-11 py-6 bg-gray-400 dark:bg-gray-800'>
            <div className='text-black text-2xl font-bold uppercase text-center dark:text-white'>
                Jesus Plasencia Toledo
                <p className="font-normal text-lg">FullStack Developer</p>
            </div>
            <div className='w-[40vw] h-[20vh] my-4'>
                <img className='rounded-full' src="/src/assets/images/profile.jpg" alt="Profile" />
            </div>
            <div className='w-[75vw] h-[55vh] mt-4'>
                <section className='rounded-md bg-yellow-200 text-justify p-4 my-2'>
                    I am a Fullstack developer in React, NET, Jenkins, Git, I build applications in React Native, I have experience in Data Integration in tools like Boomi. I always move in the direction of learning, to be able to raise my professional level and be able to offer the client a quality product.
                </section>
                <section className='rounded-md bg-red-200 text-center p-4 my-2 font-semibold'>
                    Experience
                </section>
                <section className='rounded-md bg-green-200 text-center p-4 my-2 font-semibold'>
                    Projects
                </section>
                <section className='rounded-md bg-orange-200 text-center p-4 my-2 font-semibold'>
                    Social Media
                </section>
            </div>
        </div>
    )
}

export { Landing }