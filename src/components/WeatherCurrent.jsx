import React from 'react'

const WeatherCurrent = ({ handlesubmit, validate, 
    handleChangeTheme, isDarkMode, searchweather, 
    TempSearch, iscelsius, handleChangeUtemp, resultbgDarks, 
    resultbgs }) => {
    return (
        // ${isDarkMode== true ? `${resultbgDarks} ` : `} 
        <div className={`text-white min-h-screen h-[117vh]  flex justify-center 
        items-start  bg-no-repeat bg-cover bg-center 
        ${isDarkMode ? `${resultbgDarks}` : `${resultbgs}` } `} >

            <section className='m-auto text-center grid gap-5             
            w-[min(100%,_510px)] dark:w-full 
            dark:min-h-screen h-[100%]
            dark:bg-black/30'>
            </section>


            <section className='absolute 
            px-4 pb-1 grid gap-1
            sm:gap-5 
            '>

                <a href='/'
                    className='text-black text-center font-lato text-[1.3rem]
                sm:text-3xl sm:p-5 p-1 font-bold 
                dark:text-white '>Weather</a>

                <form className='bg-white/70 text-black m-5 sm:mt-[5rem]  
                transition-colors duration-700 dark:bg-black flex 
                flex-wrap justify-center  mb-2  gap-2 h-15 p-5  rounded-2xl  
                ' onSubmit={handlesubmit}>
                    <input className='p-1 h-6 border-black text-black rounded-2xl text-center ' id="countryName" placeholder='escribe un lugar...' type="text" />
                    <button onClick={validate} id='search' className='hover:bg-red-500 bg-white hover:rounded-3xl hover:text-black font-lato text-[18px] w-20 font-bold dark:bg-red-600 dark:text-white dark:hover:bg-blue-500 
rounded-2xl text-black dark:rounded-3xl transition-colors duration-500'>Buscar</button>
                </form>


                <div className="z-0 w-64 m-auto my-4 bg-white/70 text-black transition-colors duration-700 dark:bg-black dark:text-white rounded-3xl font-lato font-semibold grid justify-center p-1 ">
                    <a className=' flex gap-5 text-2xl p-3 btn__Mode' id='changeTheme'>
                        <h6 className="text-xl ">Change Theme</h6>

                        <i onClick={handleChangeTheme} className={` text-3xl cursor-pointer bx ${isDarkMode ? 'bx-toggle-right' : 'bx-toggle-left'} `}></i>

                    </a>
                </div>

                <h2 className=' bg-white/70 text-black font-lato 
                text-xl font-bold transition-colors duration-700 
                dark:bg-black dark:text-white rounded-xl 
                p-2 w-72 m-auto text-center
                '>{searchweather?.name}, {searchweather?.sys.country}</h2>

                <section className={`grid gap-4 sm:grid-cols-[auto_auto]`}>

                    <section className='bg-white/70 text-black  items-center transition-colors duration-700 dark:bg-black  dark:text-white p-2 rounded-2xl grid grid-cols-2 text-xl font-bold mx-8 sm:mx-0'>
                        <h4 className='text-2xl font-bold font-lato col-span-2'>{searchweather?.weather[0].description}</h4>
                        <span className='text-4xl font-lato font-bold'>{TempSearch}° {iscelsius ? "C" : "F"}</span>
                        <div>
                            <img src={`https://openweathermap.org/img/wn/${searchweather?.weather[0].icon}@4x.png`} alt="" />
                        </div>
                    </section>

                    <section className='bg-white/70 text-black  p-2 py-4 transition-colors duration-700 dark:bg-black dark:text-white rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1 text-sm font-bold font-lato mx-8 sm:mx-0'>
                        <article className='flex gap-1 items-center'>
                            <div className='w-[19px]'>
                                <img className='bg-white rounded-md ' src="/imgs/wind.png" alt="Viento" />
                            </div>
                            <span>{searchweather?.wind.speed} m/s</span>
                        </article>

                        <article className='flex gap-2 items-center'>
                            <div className='w-[19px]'>
                                <img className='bg-white rounded-md ' src="/imgs/humidity.png" alt="Humedad" />
                            </div>
                            <span>{searchweather?.main.humidity}%  </span>
                        </article>

                        <article className='flex gap-2 items-center'>
                            <div className='w-[19px]'>
                                <img className='bg-white rounded-md ' src="/imgs/pressure.png" alt="Presión" />
                            </div>
                            <span> {searchweather?.main.pressure} hPa </span>
                        </article>
                    </section>
                </section>
                <button className=' dark:bg-blue-500 bg-black rounded-2xl w-40 m-auto sm:h-9 text-white font-bold p-2
                hover:bg-white hover:text-black transition-colors duration-500' onClick={handleChangeUtemp} > Cambiar a {iscelsius ? "F" : "C"} °</button>
            </section>
        </div>
    )
}

export default WeatherCurrent