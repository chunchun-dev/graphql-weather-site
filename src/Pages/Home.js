import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_WEATHER_QUERY } from '../graphql/Queries'
import { Box, Center, Text, Flex } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import StatBlock from '../components/StatBlock'
import { Spinner } from '@chakra-ui/spinner'


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
        <Box p={20} borderRadius={15} paddingTop={10} textAlign='center'>
            <Text fontSize='4xl' lineHeight='1'>Search for weather</Text>
            <Flex marginTop={5}>
                <Input bg='purple.900' borderRadius={20} border='none' type='text' placeholder='City name' value={citySearched} onChange={(e) => setCitySearched(e.target.value)}/>
                <Button onClick={()=>getWeather()} bgColor='#b90061'>Search</Button>
            </Flex>
            {data && (
                <Box marginTop={5}>
                    <Flex>
                        <StatBlock statName='Temperature' stat={`${Math.round(data.getCityByName.weather.temperature.actual/10)}°C`}/>
                        <StatBlock statName='Feels like' stat={`${(data.getCityByName.weather.temperature.feelsLike/10).toFixed(1)}°C`}/>
                        <StatBlock statName='Clouds' stat={`${data.getCityByName.weather.clouds.all}`}/>
                    </Flex>
                    <h1>Description: {data.getCityByName.weather.summary.description.toUpperCase()}</h1>

                </Box>
            )}

            {loading && <Spinner color='#b90061'/>}
        </Box>
    )
}

export default Home
