import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_WEATHER_QUERY } from '../graphql/Queries'

function Home() {

    const [citySearched, setCitySearched] = useState('')
    const [getWeather, { loading, data, error }] = useLazyQuery(GET_WEATHER_QUERY, {
        variables: { name: citySearched }
    })

    if (error) return <h1>Oops! An Error Occured</h1>
    if (data) {
        console.log(data)
    }

    return (
        <div className='home'>
            <h1>Search for weather</h1>
            <input type='text' placeholder='City name' value={citySearched} onChange={(e) => setCitySearched(e.target.value)}/>
            <button onClick={()=>getWeather()}>Search</button>
            {data && (
                <div className='weather'>

                    <h1>{data.getCityByName.name}</h1>
                    <h1>{data.getCityByName.weather.temperature.actual}</h1>
                    <h1>Description: {data.getCityByName.weather.summary.description}</h1>
                    <h1>Wind speed: {data.getCityByName.weather.wind.speed}</h1>

                </div>
            )}

            {loading && <h1>Loading</h1>}
        </div>
    )
}

export default Home
