import { gql } from "@apollo/client";
export const POST_USER = gql`
mutation crearUser($email: String!,$password: String!,$status: String!,$username: String!){
    CreateUser(CreateUserRequest: {
    Email: $email, 
    Password: $password, 
    Status: $status, 
    UserName: $username
  }) {
    token
  } 
}`
