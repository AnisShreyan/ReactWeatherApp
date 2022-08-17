import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Details from './Components/Details';

function App() {

  const [city, setCity] = useState("")
  const [data, setData] = useState([])

  const [avgTem, setAvgTem] = useState("")
  const [weather, setWeather] = useState("")
  const [highTem, setHighTem] = useState("")
  const [wind, setWind] = useState("")
  const [humidity, setHumidity] = useState("")
  const [lowTem, setLowTem] = useState("")
  const [feelsLike, setFeelsLike] = useState("")
  const [pressure, setPressure] = useState("")
  const [cityName, setCityName] = useState("")
  const [country, setCountry] = useState("")


  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=996aff66b2f4a5ecd0c6ff3a46c77a3b`)
      .then((response) => {
        setData(response.data);

        setAvgTem(Math.round(response.data.main.temp - 273))
        setWeather(response.data.weather[0].description)
        setHighTem(Math.round(response.data.main.temp_max - 273))
        setWind(response.data.wind.speed)
        setHumidity(response.data.main.humidity)
        setLowTem(Math.round(response.data.main.temp_min - 273))
        setFeelsLike(Math.round(response.data.main.feels_like - 273))
        setPressure(response.data.main.pressure)
        setCityName(response.data.name)
        setCountry(response.data.sys.country)

      })
  }, [city])

  const submit = (e) => {
    e.preventDefault();
    setCity(city)
  }

  return (
    <>
      <div className='App'>
        <h1 className='Heading'>React Weather App</h1>
        <form onSubmit={submit} className="form">
          <input type="text" onChange={(e) => setCity(e.target.value)} value={city} placeholder="Enter the City..." />
          <button type='submit'>Check Weather</button>
        </form>
        <Details
          avgTem={avgTem}
          weather={weather}
          highTem={highTem}
          wind={wind}
          humidity={humidity}
          lowTem={lowTem}
          feelsLike={feelsLike}
          pressure={pressure}
          cityName={cityName}
          country={country}
        />
      </div>
    </>
  );
}

export default App;
