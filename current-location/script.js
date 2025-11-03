const button = document.getElementById('get-location-btn');

async function getData(lat,long){
    const promise =await fetch(`http://api.weatherapi.com/v1/current.json?key=d08716ecd87046cc9c954207250111&q=${lat},${long}&aqi=yes`)
    return await promise.json();
}

async function getLocation(params) {
    const res=await getData(params.coords.latitude,params.coords.longitude);
    console.log(res);
}

function showPosition(position) {
    // console.log(position);
}

function showError(error) {
    console.log("error");
}

button.addEventListener('click', async() => {
    const res=navigator.geolocation.getCurrentPosition(getLocation, showError);
})