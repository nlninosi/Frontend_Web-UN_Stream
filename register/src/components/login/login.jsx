import React, { useState } from "react";
import whiteLogo from "../../whiteLogo.svg";
import { VALIDATE_USER } from "../../graphql/validateuser.js"
import "./style.scss";
import { gql, useMutation } from "@apollo/client";

export const Login = ()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [validateUser] = useMutation(VALIDATE_USER)
    const handleSubmit = e =>{
        validateUser({variables:{ email , password}})
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
                            <label htmlFor="password">Contraseña</label>
                            <input type="text" name="password" placeholder="contraseña" value={password} onChange={evt=> setPassword(evt.target.value)}/>
                        </div>
                        <button type="button" className="submit" onClick={handleSubmit}>Registrarse</button>
                    </form>
                </div>
            </div>
        </div>);
}