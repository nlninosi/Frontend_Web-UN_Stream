import React from "react";
import whiteLogo from "../../whiteLogo.svg";
export class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div className="ContenedorBase">
            <div className="header">
                <div className="content">
                    <div className="logo">
                    </div>
                    <div className="info">
                        <div className="form">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email"/>
                        </div>
                        <div className="form">
                            <label htmlFor="password">Contraseña</label>
                            <input type="text" name="password" placeholder="password"/>
                        </div>
                    </div>
                    <div className="info">
                        <button type="button" className="submit">Iniciar Sesion</button>
                    </div>
                </div>
            </div>
        </div>);
    }
}