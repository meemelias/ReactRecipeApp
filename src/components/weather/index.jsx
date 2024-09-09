import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather(){
    const [search,setSearch] = useState('')
    const[loading,setLoading] = useState(false)
    const[weatherData,setweatherData] = useState(null)
    async function fetchWeatherData(param){
        try {
            setLoading(true)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`)
            const data = await response.json() 

            if(data){
                setLoading(false)
                setweatherData(data)
                console.log(data);
            }
        } catch (e) {
            console.log(e);
        }
    }

    function handleSearch(){
        fetchWeatherData(search)
    }
    function getCurrentDate(){
        return new Date().toLocaleDateString('en-us',{
            weekday:'long',
            month: 'long',
            day: 'numeric',
            year:'numeric'

        })
    }

    useEffect(()=>{
        fetchWeatherData('toronto')
    },[])
    return <div className="container">
        <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        />

        {
            loading ? <div className="second-half">Loading....</div> :
            <div className="second-half">
                <div className="city-name">
                    <h2>{weatherData ?.name},<span>{weatherData?.sys?.country}</span></h2>

                </div>

                <div className="date">
                    <span>{getCurrentDate()}</span>
                </div>
                <div>
                    {weatherData?.main?.temp}
                </div>
                <p className="description"> {weatherData && weatherData.weather[0] ? weatherData.weather[0].description:''}</p>
            </div>
        }
        
    </div>
}