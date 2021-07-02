import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Text, TouchableOpacity, View } from 'react-native'
import { ListingsQuery } from './queries/queries'


class BookList extends Component {
    displayBooks(){
        var data = this.props.data
        if(data.loading){
            return(
                <Text>Loading.....</Text>
            )
        }
        else
        {
            return data.books.map(book => {
                return(
                    <Text 
                        key={book.id} 
                        style={{alignSelf:"center",padding:5,fontSize:20,borderWidth:2,margin:5}}
                    >
                        {book.name}
                    </Text>
                )
            })
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                {this.displayBooks()}
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={{marginTop:50}}>
                        <Text style={{fontSize:22,color:'blue',fontWeight:'bold',borderWidth:2,padding:2}}>ADD BOOK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const BookListWrapper = graphql(ListingsQuery)(BookList)

export default BookListWrapper
