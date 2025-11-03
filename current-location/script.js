const button = document.getElementById('get-location-btn');

// Create a paragraph to show the location info
const info = document.createElement('p');
document.body.appendChild(info);

async function getData(lat, long) {
    // Use HTTPS instead of HTTP for security
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d08716ecd87046cc9c954207250111&q=${lat},${long}&aqi=yes`);
    return await response.json();
}

async function getLocation(position) {
    const res = await getData(position.coords.latitude, position.coords.longitude);
    console.log(res);

    // Display the weather and location info
    info.innerHTML = `
        <strong>Location:</strong> ${res.location.name}, ${res.location.region}, ${res.location.country}<br>
        <strong>Local Time:</strong> ${res.location.localtime}<br>
        <strong>Temperature:</strong> ${res.current.temp_c} °C<br>
        <strong>Condition:</strong> ${res.current.condition.text}
    `;
}

function showError(error) {
    info.textContent = "Unable to retrieve location. Please allow location access.";
}

button.addEventListener('click', () => {
    info.textContent = "Fetching location...";
    navigator.geolocation.getCurrentPosition(getLocation, showError);
});
