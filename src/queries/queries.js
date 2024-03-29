import gql from 'graphql-tag'


const ListingsQuery = gql`{
    books{
        name
        id
    }
}
`
const getAuthorsQuery = gql`{
    authors{
        name
        id
    }
}
`
const addBookMutation = gql`
    mutation($name:String!,$genre:String!,$authorId:String!)
    {
        addBook(name:$name,genre:$genre,authorId:$authorId)
        {
            name
            id
        }
    }

`

const getBookQuery = gql`
    query($id:ID){
        book(id:$id){
            id
            name
            genre
            author{
                id
                name
                age
                books{
                    id
                    name
                }
            }
        }
    }
`
export {ListingsQuery,getAuthorsQuery,getBookQuery,addBookMutation}