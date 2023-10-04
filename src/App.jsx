import { useEffect, useState } from 'react';
import { Wheater } from './components/Wheater'
import axios from 'axios';
import Loader from './components/Loader/Loader';

function App() {
  const [weather, setWeather] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark')
  const [isloading, setIsloading] = useState(true)

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "347a5b952a500f2ff2856be21336b4fc"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    axios.get(url)
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err))
  }

  const handleChangeTheme = () => {
    setIsDarkMode(!isDarkMode)
}


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
    setTimeout(() => {
      setIsloading(false);
    }, 1000);

    isDarkMode
    ?
    (document.documentElement.classList.add('dark'), localStorage.setItem('theme', 'dark'))
    : (document.documentElement.classList.remove('dark'), localStorage.setItem('theme', 'light'))

  }, [isDarkMode])

  return (
    <div className=''>
      {
        isloading ? (
          <Loader/>
        ): (
          // { 
            weather && <Wheater isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} weather={weather} />  
            // }
        )
      }
    </div>
  )
}

export default App
