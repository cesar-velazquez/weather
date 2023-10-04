import axios from 'axios';
import React, { useEffect, useState } from 'react'
import WeatherSearch from './WeatherSearch';
import WeatherCurrent from './WeatherCurrent';
import bgrandom from '../Data/bgrandom.json'
import bgdarkmode from '../Data/bgdarkmode.json'

export const Wheater = ({ weather, isDarkMode, setIsDarkMode }) => {    

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
        "10n": "bg-[url(/imgs/bgs/tormenta.jpg)]",
        "11d": "bg-[url(/imgs/bgs/tormenta.jpg)]",
        "11n": "bg-[url(/imgs/bgs/tormenta.jpg)]",
        "13d": "bg-[url(/imgs/bgs/nieve.jpg)]",
        "13n": "bg-[url(/imgs/bgs/nieve.jpg)]",
        "50d": "bg-[url(/imgs/bgs/neblina.jpg)]",
        "50n": "bg-[url(/imgs/bgs/neblina.jpg)]",
    }

const bgdarkmode = {
    "01d": "bg-[url(/imgs/bgDark/despejadaN.jpg)]",
    "01n": "bg-[url(/imgs/bgDark/despejadaN.jpg)]",
    "02d": "bg-[url(/imgs/bgDark/pocasnubesN.jpg)]",
    "02n": "bg-[url(/imgs/bgDark/pocasnubesN.jpg)]",
    "03d": "bg-[url(/imgs/bgDark/dispN.jpg)]",
    "03n": "bg-[url(/imgs/bgDark/dispN.jpg)]",
    "04d": "bg-[url(/imgs/bgDark/vientN.jpg)]",
    "04n": "bg-[url(/imgs/bgDark/vientN.jpg)]",
    "09d": "bg-[url(/imgs/bgDark/aguaceroN.jpg)]",
    "09n": "bg-[url(/imgs/bgDark/aguaceroN.jpg)]",
    "10d": "bg-[url(/imgs/bgDark/lluviaMN.jpg)] ",
    "10n": "bg-[url(/imgs/bgDark/lluviaMN.jpg)] ",
    "11d": "bg-[url(/imgs/bgDark/tormentaN.png)] ",
    "11n": "bg-[url(/imgs/bgDark/tormentaN.png)] ",
    "13d": "bg-[url(/imgs/bgDark/nieveN.jpg)]",
    "13n": "bg-[url(/imgs/bgDark/nieveN.jpg)]",
    "50d": "bg-[url(/imgs/bgDark/neblinaN.jpg)]",
    "50n": "bg-[url(/imgs/bgDark/neblinaN.jpg)]"
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

    // BackGround Images
    const resultbgs = bgrandom[searchweather?.weather[0].icon];      
    const resultbg = bgrandom[weather?.weather[0].icon];
    
    const resultbgdark = bgdarkmode[weather?.weather[0].icon];
    const resultbgDarks = bgdarkmode[searchweather?.weather[0].icon]    

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
        setIsDarkMode(!isDarkMode)
    }

    const validate = (e) => {
        const valor = document.getElementById('countryName');
        if (valor.value === "") {
            alert("ingresa el lugar que deseas consultar");
        }
    }

    useEffect(() => {
        
    }, [])
    return (        
        <div className=''>

                {
                    searchweather ? (
                        <WeatherCurrent
                        // resultBacks={resultBacks}
                        handlesubmit={handlesubmit}
                        validate={validate}
                        handleChangeTheme={handleChangeTheme}
                        isDarkMode={isDarkMode}
                        searchweather={searchweather}
                        TempSearch={TempSearch}
                        iscelsius={iscelsius}
                        handleChangeUtemp={handleChangeUtemp}
                        resultbgs={resultbgs}
                        resultbgDarks={resultbgDarks}
                        />        
                    ) : (
                        <WeatherSearch 
                        resultbg={resultbg} 
                        resultbgdark={resultbgdark}
                        handlesubmit={handlesubmit}
                        validate={validate}
                        handleChangeTheme={handleChangeTheme}
                        isDarkMode={isDarkMode}
                        weather={weather}
                        resultTemp={resultTemp}
                        iscelsius={iscelsius}
                        handleChangeUtemp={handleChangeUtemp}
                        />                        
                    )
                }            
        </div>
    )
}