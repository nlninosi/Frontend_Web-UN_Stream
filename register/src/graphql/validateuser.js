import { gql } from "@apollo/client";
export const VALIDATE_USER = gql`
mutation validarUser($email:String!,$password:String!){
  ValidateUser(ValidateUserRequest: {
    email: $email,
    password: $password
  }) {
    token
  }
}`