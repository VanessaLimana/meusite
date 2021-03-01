import React, { Component } from 'react';
//renderização 

class renderizacao extends Component{

    constructor(props){
        super(props);
        this.state = {
            status: false //true ou false
        };
        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    sair(){
        this.setState({status: false})
    }
    entrar(){
        this.setState({status: true})
    }
    render(){
        return(
            <div>
            {this.state.status ? 
            <div><h2>bem vindo </h2> 
            <button onClick={this.sair}>Sair</button></div> : 
            <div><h2>Olá, visitante</h2>
            <button onClick={this.entrar}>Entrar no sistema
            </button></div>
            }
        
        </div>
        
        );
    }
}
export default renderizacao;
