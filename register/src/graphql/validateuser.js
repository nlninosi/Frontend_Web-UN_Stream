import { gql } from "@apollo/client";
export const VALIDATE_USER = gql`
mutation ValidateUser ($Email: String!,$Password: String!){ 
    CreateUserRequest (
        Email: $Email, 
        Password: $Password
        ){
      token
    } 
}`