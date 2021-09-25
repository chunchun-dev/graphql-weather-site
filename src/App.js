import './App.css';
import Home from './Pages/Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Center, Text } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/react';

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://graphql-weather-api.herokuapp.com/'
  })

  return (
    <ApolloProvider client={client}>
      <Center height={'100vh'} flexDir='column' bgColor='#161a2b' color='white'>
        <Img src='/graphql-icon.svg' width={100}/>
        <Text fontSize='5xl' textAlign='center' lineHeight={1.2} fontWeight='bold'>GraphQL <br/> Weather App</Text>
        <Home/>
      </Center>
    </ApolloProvider>
  );
}

export default App;
