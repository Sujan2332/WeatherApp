##  *WeatherApp 🌦️*
*A weather application that provides real-time weather updates for any city you search for. The application uses the OpenWeatherMap API to fetch weather data and displays a dynamic video background based on the weather conditions.*

## *Features 🎯*
### *Dynamic Background Videos:*
*Changes according to the current weather (Sunny, Rain, Cloudy, Snow, Thunderstorm, or Default).*
### *Search Functionality:* 
*Type in a city name and hit "Enter" to get instant weather details.*
### *Detailed Weather Information:*
*Temperature, humidity, weather description, and more.*
*Sunrise and sunset timings.*
*Wind speed and direction.*
*Ground and sea level pressures.*

## *Preview 📺*
### *[Weather Application ☁️](https://sujan2332.github.io/WeatherApp/)*

## *Installation 🔧*
### *Clone this repository:*

```
git clone https://github.com/Sujan2332/WeatherApp.git
cd WeatherApp
```

### *Install dependencies:*

```
npm install
```

### *Create a .env file in the root directory and add your OpenWeatherMap API key:*

*makefile*
```
VITE_API_KEY=your_openweathermap_api_key
```

### *Start the application:*

```
npm run dev
```

### *Open your browser and navigate to http://localhost:5173.*

### *File Structure 📂*
```
WeatherApp/
├── public/
├── src/
│   ├── WeatherAPI/
│   │   ├── WeatherAPI.js        # Main Weather Component
│   │   ├── WeatherAPI.css       # Styling for Weather Component
│   │   ├── Sunny.mp4            # Sunny weather video
│   │   ├── Rain.mp4             # Rainy weather video
│   │   ├── Cloudy.mp4           # Cloudy weather video
│   │   ├── Snow.mp4             # Snowy weather video
│   │   ├── Thunderstorm.mp4     # Thunderstorm video
│   │   ├── Default.mp4          # Default background video
├── .env                         # Environment variables
├── package.json
├── README.md                    # Project documentation
```

## *Technologies Used 🛠️*

*Frontend: React.js,*
*Styling: CSS,*
*API: OpenWeatherMap*

## *Usage Instructions 📖*

*Enter the name of a city in the search bar.
Press Enter to fetch weather details.
Enjoy the immersive weather-themed background video!*

## *Future Enhancements 🚀*
*Add support for hourly and weekly weather forecasts.
Implement a responsive design for mobile devices.
Include additional weather conditions.*

## *Contributing 🤝*
*Contributions, issues, and feature requests are welcome!
Feel free to check the issues page to collaborate.*

# *License 📄*
### *This project is licensed under the MIT License. See the LICENSE file for more details.*
