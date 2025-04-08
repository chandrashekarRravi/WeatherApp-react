import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear from '../assets/clear.png'
import wind from '../assets/wind.png'
import humidity from '../assets/humidity.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'



const Weather = (city) => {
    if (city === '') {
        alert('Please enter a city name');
        return;
    }
    const inputRef = useRef()
    const [weatherData, setWeatherData] = useState(false);
    const allicons = {
        "01d": clear,
        "01n": clear,
        "02d": cloud,
        "02n": cloud,
        "03d": cloud,
        "03n": cloud,
        "04d": drizzle,
        "04n": drizzle,
        "09d": rain,
        "09n": rain,
        "10d": rain,
        "10n": rain,
        "13d": snow,
        "13n": snow,
    }
    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`
            //`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITTE_APP_ID}`;
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                alert(data.message);
                return;
            }
            console.log(data);
            const icon = allicons[data.weather[0].icon] || clear;
            setWeatherData({
                humidity: data.main.humidity,
                wind: data.wind.speed,
                location: data.name,
                temperature: Math.floor(data.main.temp),
                icon: icon
            })
        } catch (error) {
            setWeatherData(false);
            console.error("error fetching weather data", error);
        }
    }
    useEffect(() => {
        search('Delhi')
    }, []);
    return (
        <div className='weather'>
            <div className="Search-bar">
                <input ref={inputRef} type="text" placeholder="Search" />
                <img src={search_icon} alt="" onClick={() => search(
                    inputRef.current.value
                )} />
            </div>
            {weatherData ? <>
                <img src={weatherData.icon} alt="" className='weather-icon' />
                <p className='temperature'>{weatherData.temperature}</p>
                <p className='location'>{weatherData.location}</p>
                <div className="weather-data">
                    <div className="col">
                        <img src={humidity} alt="" />
                        <div>
                            <p>{weatherData.humidity}</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <img src={wind} alt="" />
                        <div>
                            <p>{weatherData.wind} km</p>
                            <span>wind</span>
                        </div>
                    </div>
                </div>
            </> : <></>}
        </div>
    )
}

export default Weather
