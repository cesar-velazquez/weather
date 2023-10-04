import React from 'react'

const Loader = () => {
    return (
        <div className='bg-orange-300
        bg-cover bg-no-repeat bg-center 
        flex justify-center items-center
        h-screen
        dark:bg-black

        '>
            <div className='animate-bounce rounded-full p-4 border-4 
            bg-[url(/frame.jpg)] bg-cover bg-no-repeat bg-center bg-transparent
            dark:bg-[url(/moon2.jpg)] dark:border-none
            border-opacity-25 h-72 w-72 sm:h-96 sm:w-96 '></div>            
        </div>
    )
}

export default Loader