import { gql } from "@apollo/client";
export const POST_USER = gql`
mutation CreateUser ($Email: String!,$Password: String!,$Status: String!,$UserName: String!){ 
    CreateUserRequest (
        Email: $Email, 
        Password: $Password, 
        Status: $Status, 
        UserName: $UserName
        ){
      token
    } 
}`

