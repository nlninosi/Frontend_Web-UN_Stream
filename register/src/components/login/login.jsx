import React from "react";
import whiteLogo from "../../whiteLogo.svg";
export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : ""
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    render(){
        return ( 
        <div className="ContenedorBase" ref={this.props.containerRef}>
            <div className="header">
                <div className="content">
                    <div className="logo">

                    </div>
                    <form className="info">
                        <div className="form">
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="email" value={this.state.email} onChange={this.handleEmailChange}/>
                            <label htmlFor="password">Contraseña</label>
                            <input type="text" name="password" placeholder="contraseña" value={this.state.password} onChange={this.handlePasswordChange}/>
                        </div>
                    </form>
                    <div className="sub">
                        <button type="button" className="submit">Iniciar Sesion</button>
                    </div>
                </div>
            </div>
        </div>);
    }
}