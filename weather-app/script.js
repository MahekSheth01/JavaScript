const button=document.getElementById('search-btn');
const cityInput=document.getElementById('city-inp');
const cityName=document.getElementById('city-name');
const cityTime=document.getElementById('city-time');
const cityTemp=document.getElementById('city-temp');
async function getData(cityName){
    const promise =await fetch(`http://api.weatherapi.com/v1/current.json?key=d08716ecd87046cc9c954207250111&q=${cityName}&aqi=yes`)
    return await promise.json();
}

button.addEventListener('click',async()=>{
    console.log(cityInput.value);
    value=cityInput.value;
    const res=await getData(value);
    console.log(res);
    cityName.innerText=`${res.location.country},${res.location.region}-${res.location.name}`;
    cityTime.innerText=`Local time : ${res.location.localtime}`;
    cityTemp.innerText=`${res.current.temp_c} °C`;
})