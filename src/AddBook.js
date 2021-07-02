import React, { Component } from 'react'
import {Text, TextInput, View, TouchableOpacity } from 'react-native'
import { addBookMutation, getAuthorsQuery,ListingsQuery } from './queries/queries'
import {flowRight as compose} from 'lodash'
import { graphql } from 'react-apollo'
import {Picker} from '@react-native-picker/picker'




class AddBook extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:"",
            genre:"",
            auhtorId:""
        }
    }
    // displayAuthors(){
    //     var data = this.props.getAuthorsQuery
    //     if(data.loading){
    //       return(
    //         <Text>Loading Authors...</Text>
    //       )
    //     }
    //     else
    //     {
    //       return data.authors.map(author => {
    //         return(
    //           <Picker.Item value={author.id} key={author.id} label={author.name} />
    //         )
    //       })
    //     }
    //   }

      submitData(){
        //   const {name,genre,auhtorId} = this.state
        //   console.log("name - ",name);
        //   console.log("genre - ",genre);
        //   console.log("authorId - ",auhtorId);
            this.props.addBookMutation({
            variables:{
                name:this.state.name,
                genre:this.state.genre,
                authorId:this.state.auhtorId
            },
        })
      }
    render() {
        const data = this.props
        console.log(data);
        return (
            <View style={{flex:1}}>
                <TextInput
                    placeholder="Book Name"
                    value={this.state.name}
                    onChange={(e) => this.setState({name:e.target.value})}
                />
                <TextInput
                    placeholder="Genre"
                    value={this.state.genre}
                    onChange={(e) => this.setState({genre:e.target.value})}
                />
                <Picker onValueChange={itemValue => this.setState({auhtorId:itemValue})}>
                    <Picker.Item label="SELECT AUTHOR"/>
                    {/* {this.displayAuthors()} */}
                </Picker>
                <TouchableOpacity 
                    style={{
                        alignSelf:'center',
                        marginTop:50,
                        borderWidth:2,
                        padding:5
                    }}
                    onPress={this.submitData.bind(this)}
                >
                    <Text>
                        Add data
                    </Text>
                </TouchableOpacity>
               
            </View>
        )
    }
}
// graphql(addBookMutation,{name:"addBookMutation"})

export default graphql(getAuthorsQuery)(AddBook)