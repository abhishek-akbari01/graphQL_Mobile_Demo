import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import {ApolloClient} from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import BookList from './src/BookList'
import AddBook from './src/AddBook'



const Stack = createStackNavigator()

const apolloClient = new ApolloClient({
  link: new HttpLink({uri:'http://localhost:4000/graphql'}),
  cache: new InMemoryCache()
})



class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="BookList" component={BookList} /> */}
          <Stack.Screen name="AddBook" component={AddBook} />
        </Stack.Navigator>
      </NavigationContainer>
      </ApolloProvider>
    )
  }
}

export default App