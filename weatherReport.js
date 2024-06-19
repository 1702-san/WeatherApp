function showweatherDetails(event) {
      event.preventDefault();
       fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          console.log('data',data);
          weatherInfo.innerHTML = `<h2>Weather in ${data?.name}</h2>
                                  <p>Temperature: ${data?.main?.temp} &#8451;</p>
                                  <p>Weather: ${data?.weather[0]?.description}</p>`;
        }).catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}
 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
 const city = document.getElementById('city').value;
      const apiKey = '5557a386ae9b8288f1f98201514d0b92'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
