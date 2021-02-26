import React, { Component } from 'react';

class Equipe extends Component{ //sempre vaai esxtender o componente ele é um componente e uma classe
    render(){ // vai renderizar - metodo render, vai renderizar oq tem na tela
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
            <Social/>
            </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2> {this.props.nome} </h2>
                <h3> Cargo: {this.props.cargo} </h3>
                <h3> Idade: {this.props.idade} </h3>
            </div>
        );
     }
}

const Social = (props) =>{
    return(
        <div>
            <a>Facebook </a>
            <a>LinkedIn </a>
        </div>
        );

    }

function App(){
    return(
        <div>
        <h1>Conheça nossa equipe:</h1>
        <Equipe nome="Vanessa" cargo="Desenvolvedora" idade="27"/>
        <Equipe nome="Fernando" cargo="Marmorista" idade="29"/>
    </div>
    );
}
export default App;
