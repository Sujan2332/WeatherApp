import React, { useEffect, useState, useCallback } from 'react';
import "../WeatherAPI/WeatherAPI.css";
import SunnyVideo from './Sunny.mp4';
import RainVideo from './Rain.mp4';
import CloudyVideo from './Cloudy.mp4';
import Default from "./Default.mp4"
import SnowVideo from './Snow.mp4';
import ThunderstormVideo from './Thunderstorm.mp4';

const WeatherAPI = () => {
    const [data, setData] = useState({});
    const [city, setCity] = useState("");
    const [backgroundVideo, setBackgroundVideo] = useState(null);
    const apiKey = import.meta.env.VITE_API_KEY;
    console.log("Background Chnagewd")
    const fetchApi = useCallback(async () => {
        if (city === "") {
            setBackgroundVideo("default");
            return;
          }
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const apiData = await fetch(apiUrl);
        const result = await apiData.json();
        // Check if the API response has the necessary weather data
        if (result.weather && result.weather.length > 0) {
            const weatherDescription = result.weather[0].main.toLowerCase();
            // Update background video based on the weather description
            switch (weatherDescription) {
                case 'clear':
                    setBackgroundVideo("sunny");
                    break;
                case 'rain':
                case 'shower':
                    setBackgroundVideo("rain");
                    break;
                case 'clouds':
                    setBackgroundVideo("cloudy");
                    break;
                case 'snow':
                    setBackgroundVideo("snow");
                    break;
                case 'thunderstorm':
                    setBackgroundVideo("thunderstorm");
                    break;
                default:
                    setBackgroundVideo("default"); // Default if no video available
                    break;
            }
        } else {
            setBackgroundVideo(null); // Reset if no weather data available
        }
        setData(result)
    }, [city, apiKey]);

    useEffect(() => {
        fetchApi();
    }, [city, fetchApi]); // Run when city changes

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            fetchApi(); // Call fetchApi when Enter key is pressed
        }
    };

    const backgroundVideos = {
        sunny: SunnyVideo,
        rain: RainVideo,
        cloudy: CloudyVideo,
        snow: SnowVideo,
        thunderstorm: ThunderstormVideo,
        default: Default, // If no default image or video
    };

    return (
        <div 
            className="weatherapi" 
            style={{
                backgroundImage: backgroundVideo ? 'none' : ``,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "overlay",
                position: "relative",
                minHeight: "100vh",
            }}>
            {backgroundVideo && (
                <video 
                    autoPlay 
                    loop 
                    muted 
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: -1,  // Place video behind content
                    }}
                >
                    <source src={backgroundVideos[backgroundVideo]} type='video/mp4'/>
                </video>
            )}
            <h1>Weather Report</h1>
            <input className="search" type="text" value={city} onChange={(e) => setCity(e.target.value)} onKeyPress={handleKeyPress} placeholder="Enter city" style={{fontWeight:"900"}}/>
            {data.main && (
                <div id="cards" style={{marginBottom :" 20px"}}>
                    <h2>Weather in {data.name} of The Country {data.sys.country}</h2>
                    <p><strong>Temperature:</strong> {data.main.temp}°C</p>
                    <p><strong>Humidity:</strong> {data.main.humidity}%</p>
                    <p style={{ textTransform: "uppercase" }}><strong style={{ textTransform: "capitalize" }}>Weather Description:</strong> {data.weather[0].description}</p>
                    <p><strong>Feels Like:</strong> {data.main.feels_like}°C</p>
                    <p><strong>Ground Level:</strong> {data.main.grnd_level}</p>
                    <p><strong>Pressure:</strong> {data.main.pressure} hPa</p>
                    <p><strong>Sea Level:</strong> {data.main.sea_level} hPa</p>
                    <p><strong>Maximum Temperature:</strong> {data.main.temp_max}°C</p>
                    <p><strong>Minimum Temperature:</strong> {data.main.temp_min}°C</p>
                    <div>
                        <div id="Sun">
                            <h3>Sun & Time Info:</h3>
                            <p><strong>Sunrise:</strong> {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                            <p><strong>Sunset:</strong> {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                            <p><strong>TimeZone:</strong> {data.timezone}</p>
                            <p><strong>Visibility:</strong> {data.visibility} meters</p>
                        </div>
                        <div id="wind">
                            <h3>Wind:</h3>
                            <p><strong>Speed:</strong> {data.wind.speed} m/s</p>
                            <p><strong>Degree:</strong> {data.wind.deg}°</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WeatherAPI;
