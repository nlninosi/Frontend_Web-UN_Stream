import React, { useState,useEffect } from "react";
import whiteLogo from "../../whiteLogo.svg";
import { POST_USER } from "../../graphql/createuser.js"
import "./style.scss";
import { gql, useMutation } from "@apollo/client";

export const Register = ()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUserName] = useState('')
    const status = "1"
    const [createUser,{ data, loading, error, reset }] = useMutation(POST_USER)
    useEffect(() => console.log(data), [data]);
    const handleSubmit = e =>{
        createUser({variables:{ email , password, status, username}})
    }
    return( <div className="ContenedorBase">
            <div className="header">
                <div className="content">
                    <div className="logo">
                        <img src={whiteLogo} alt="a" />
                    </div>
                    <form className="info">
                        <div className="form">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email" value={email} onChange={evt=> setEmail(evt.target.value)}/>
                        </div>
                        <div className="form">
                            <label htmlFor="username">Nombre de usuario</label>
                            <input type="text" name="username" placeholder="nombre de usuario" value={username} onChange={evt=> setUserName(evt.target.value)}/>
                        </div>
                        <div className="form">
                            <label htmlFor="password">Contraseña</label>
                            <input type="text" name="password" placeholder="contraseña" value={password} onChange={evt=> setPassword(evt.target.value)}/>
                        </div>
                        <button type="button" className="submit" onClick={handleSubmit}>Registrarse</button>
                    </form>
                </div>
            </div>
        </div>);
}