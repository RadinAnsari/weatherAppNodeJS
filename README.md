
# Simple Weather App - Real-time Weather Information using Node.js

This is a minimal and elegant weather application built with Node.js, Express.js, and OpenWeatherMap API. Users can get real-time weather data for any city, including temperature, weather description, and an icon representing the current weather condition.

![Screenshot from 2025-02-02 18-53-14](https://github.com/user-attachments/assets/70b91537-c46e-4e5e-86a3-bf5e65474692)

---

#### 🖥️ Features:

- 🌦️ Get the current weather data for any city.
- 🌡️ Displays temperature in Celsius.
- ☁️ Shows weather description (e.g., sunny, cloudy, rainy).
- 🌈 Provides a weather icon that visually represents the current weather.
- 🚀 Built using Express.js for lightweight server-side logic.
- 🔑 Simple integration with the OpenWeatherMap API for fetching weather data.

---

#### ⚙️ Technologies Used:

- Node.js for the backend server.
- Express.js for routing and API management.
- Axios for making HTTP requests.
- dotenv for securely storing environment variables.
- OpenWeatherMap API for fetching real-time weather data.

---

#### 🚀 Getting Started:

To run the weather app locally, follow these simple steps:

1. Clone this repository:
   
Bash

    git clone https://github.com/RadinAnsari/weatherAppNodeJS.git
    
2. Navigate to the project folder:
   
Bash

    cd weatherAppNodeJS
    
3. Install the required dependencies:
   
Bash

    npm install
    
4. **Create a .env file** in the root directory and add yOpenWeatherMap API keyey**:
   
    API_KEY=your-api-key-here
    
Start the server:r:**
   
Bash

    npm start
    
Access the apppp** in your browser:
    Open your browser and go to http://localhost:3000/weather?city=CityName, replacing CityName with the name of the city you want to check the weather for.

---

####Example Request:t:**

To get the weather konya**, visit:
`bash
http://localhost:3000/weather?city=konya
