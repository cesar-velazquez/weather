import { useEffect, useState } from 'react';
import './App.css'
import { Wheater } from './components/Wheater'
import axios from 'axios';



function App() {
  const [weather, setWeather] = useState(null)




  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "347a5b952a500f2ff2856be21336b4fc"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    axios.get(url)
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [])

  return (
    <div>
      { weather && <Wheater  weather={weather} />  }
      

    </div>
  )
}

export default App
