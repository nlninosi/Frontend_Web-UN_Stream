import React from "react";
export class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            username: ""
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    handleUserNameChange(event) {
        this.setState({usermame: event.target.value});
    }
    render(){
        return( <div className="ContenedorBase" ref={this.props.containerRef}>
            <div className="header">
                <div className="content">
                    <div className="logo">

                    </div>
                    <div className="info">
                        <div className="form">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleEmailChange}/>
                        </div>
                        <div className="form">
                            <label htmlFor="username">Nombre de usuario</label>
                            <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleUserNameChange}/>
                        </div>
                        <div className="form">
                            <label htmlFor="password">Contraseña</label>
                            <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                        </div>
                    </div>
                    <div className="info">
                        <button type="button" className="submit">Registrarse</button>
                    </div>
                </div>
            </div>
        </div>);
    }
}