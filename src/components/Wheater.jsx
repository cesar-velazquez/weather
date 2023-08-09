import axios from 'axios';
import React, { useState } from 'react'

export const Wheater = ({ weather }) => {



    const bgrandom = {
        "01d": "bg-[url(/imgs/bgs/cieloDesp.jpg)]",
        "01n": "bg-[url(/imgs/bgs/cieloDesp.jpg)]",
        "02d": "bg-[url(/imgs/bgs/pocasN.jpg)]",
        "02n": "bg-[url(/imgs/bgs/pocasN.jpg)]",
        "03d": "bg-[url(/imgs/bgs/nubesdisp.jpg)]",
        "03n": "bg-[url(/imgs/bgs/nubesdisp.jpg)]",
        "04d": "bg-[url(/imgs/bgs/ventos.jpg)]",
        "04n": "bg-[url(/imgs/bgs/ventos.jpg)]",
        "09d": "bg-[url(/imgs/bgs/aguacero.jpg)]",
        "09n": "bg-[url(/imgs/bgs/aguacero.jpg)]",
        "10d": "bg-[url(/imgs/bgs/lluvia.jpg)]",
        "10n": "bg-[url(/imgs/bgs/lluvia.jpg)]",
        "11d": "bg-[url(/imgs/bgs/tormenta.jpg)]",
        "11n": "bg-[url(/imgs/bgs/tormenta.jpg)]",
        "13d": "bg-[url(/imgs/bgs/nieve.jpg)]",
        "13n": "bg-[url(/imgs/bgs/nieve.jpg)]",
        "50d": "bg-[url(/imgs/bgs/neblina.jpg)]",
        "50n": "bg-[url(/imgs/bgs/neblina.jpg)]",
    }

    const [iscelsius, setIscelsius] = useState(true)

    const KelvintoCelsius = (temp) => {
        return (temp - 273.15).toFixed(1);
    }
    const KelvintoFar = (temp) => {
        return (((temp - 273.15) * 9 / 5) + 32).toFixed(1);
    }

    const handleChangeUtemp = () => {
        setIscelsius(!iscelsius);
    }
    const resultTemp = iscelsius ? KelvintoCelsius(weather?.main.temp) : KelvintoFar(weather?.main.temp);

    const [searchweather, setSearchweather] = useState(null)
    const TempSearch = iscelsius ? KelvintoCelsius(searchweather?.main.temp) : KelvintoFar(searchweather?.main.temp);

    const resultbgs = bgrandom[searchweather?.weather[0].icon];
    const resultbg = bgrandom[weather?.weather[0].icon];


    const handlesubmit = (event) => {
        event.preventDefault();
        const API_KEY = "347a5b952a500f2ff2856be21336b4fc"
        const countryName = event.target.countryName.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${API_KEY}`;
        axios
            .get(url)
            .then(({ data }) => setSearchweather(data))
            .catch((err) => console.log(err));
    };

    const handleChangeTheme = () => {
        const changeIconHtml = document.getElementById('changeTheme');
        const icon = changeIconHtml.querySelector('i');
        const isDarkMode = document.documentElement.classList.contains('dark');
      
        if (isDarkMode) {
          document.documentElement.classList.remove('dark');
          icon.classList.remove('bx-toggle-right');
          icon.classList.add('bx-toggle-left');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          icon.classList.remove('bx-toggle-left');
          icon.classList.add('bx-toggle-right');
          localStorage.setItem('theme', 'dark'); 
        }      
    }

    return (
        <div className={`bg-orange-500/25  dark:bg-black/90 z-10 brightness-60 text-white min-h-screen flex justify-center items-center px-2 bg-no-repeat bg-cover bg-center ${resultbgs}`}>
            <h1 className='text-black text-center absolute top-0 dark:text-white font-lato text-3xl p-5 m-1 font-bold'>Weather</h1>
            <div>
                <form className='bg-white/25 text-black m-5  dark:bg-black form flex justify-center mb-20  gap-2 h-15 p-5  rounded-2xl ' onSubmit={handlesubmit}>
                    <input className='p-1 h-6 border-black text-black rounded-2xl text-center ' id="countryName" placeholder='escribe un lugar...' type="text" />
                    <button className='hover:bg-red-500 bg-white hover:rounded-3xl hover:text-black font-lato text-[18px] w-20 font-bold dark:bg-red-600 dark:text-white dark:hover:bg-blue-500 rounded-2xl text-black dark:rounded-3xl'>Buscar</button>
                </form>
                <div className="bg-white/25 text-black m-3 dark:bg-black dark:text-white rounded-3xl font-lato font-semibold grid justify-center p-1 ">

                    <a className=' flex gap-5 text-2xl p-3 btn__Mode' id='changeTheme'>
                        <h6 className="text-2xl">Change Theme</h6>
                        <i onClick={handleChangeTheme} className=' text-3xl cursor-pointer bx bx-toggle-left'></i>
                    </a>
                </div>
                {
                    searchweather ? (
                        <section className='text-center grid gap-5'>
                            <h2 className=' bg-white/25 text-black font-lato text-3xl font-bold dark:bg-black dark:text-white rounded-xl p-2'>{searchweather?.name}, {searchweather?.sys.country}</h2>

                            <section className={`grid gap-4 sm:grid-cols-[auto_auto]`}>

                                <section className='bg-white/25 text-black  items-center dark:bg-black dark:text-white p-2 rounded-2xl grid grid-cols-2 text-2xl font-bold'>
                                    <h4 className='text-2xl font-bold font-lato col-span-2'>{searchweather?.weather[0].description}</h4>
                                    <span className='text-4xl font-lato font-bold'>{TempSearch}° {iscelsius ? "C" : "F"}</span>
                                    <div>
                                        <img src={`https://openweathermap.org/img/wn/${searchweather?.weather[0].icon}@4x.png`} alt="" />
                                    </div>
                                </section>

                                <section className='bg-white/25 text-black  p-2 py-4 dark:bg-black dark:text-white rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1 text-2xl font-bold font-lato'>
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
                            <button className='bg-blue-500 dark:bg-black rounded-2xl w-40 m-auto sm:h-9 text-white font-bold p-2' onClick={handleChangeUtemp} > Cambiar a {iscelsius ? "F" : "C"} °</button>
                        </section>
                    ) : (
                        <section className='text-center grid gap-5'>
                            <h2 className='bg-white/25 text-black font-lato text-3xl font-bold dark:bg-black dark:text-white rounded-xl p-2'>{weather?.name}, {weather?.sys.country}</h2>

                            <section className={`grid gap-4 sm:grid-cols-[auto_auto]`}>

                                <section className='bg-white/25 text-black items-center dark:bg-black dark:text-white p-2 rounded-2xl grid grid-cols-2'>
                                    <h4 className='text-2xl font-bold font-lato col-span-2'>{weather?.weather[0].description}</h4>
                                    <span className='text-4xl font-lato font-bold'>{resultTemp}° {iscelsius ? "C" : "F"}</span>
                                    <div>
                                        <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="error" />
                                    </div>
                                </section>

                                <section className='bg-white/25 text-black p-2 py-4 dark:bg-black dark:text-white rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1'>
                                    <article className='flex gap-1 items-center'>
                                        <div className='w-[19px]'>
                                            <img className='bg-white rounded-md ' src="/imgs/wind.png" alt="Viento" />
                                        </div>
                                        <span>{weather?.wind.speed} m/s</span>
                                    </article>

                                    <article className='flex gap-2 items-center'>
                                        <div className='w-[19px]'>
                                            <img className='bg-white rounded-md ' src="/imgs/humidity.png" alt="Humedad" />
                                        </div>
                                        <span>{weather?.main.humidity}%  </span>
                                    </article>

                                    <article className='flex gap-2 items-center'>
                                        <div className='w-[19px]'>
                                            <img className='bg-white rounded-md ' src="/imgs/pressure.png" alt="Presión" />
                                        </div>
                                        <span> {weather?.main.pressure} hPa </span>
                                    </article>
                                </section>
                            </section>
                            <button className='dark:bg-blue-500 bg-black rounded-2xl w-40 m-auto sm:h-9 text-white' onClick={handleChangeUtemp} > Cambiar a {iscelsius ? "F" : "C"} °</button>
                        </section>
                    )
                }</div>
        </div>
    )
}