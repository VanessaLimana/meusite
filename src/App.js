/* import React, { Component } from 'react';
import Membro from './components/Membro';

class App extends Component{
    
    render(){
     return(
        <div>
            <Membro nome="visitante" />
        </div>
        );

    }
}
//app do código membro
export default App;
*/

/*import React, { Component } from 'react';
//renderização condicional 

class App2 extends Component{

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
export default App2;
*/
/* App para Lista 
import React, {Component} from 'react'

class App extends Component{

    constructor(props){
        super(props);
        this.state ={
            feed:[
                {id: 1, username:'vanessa', curtidas:200,comentarios:10},
                {id:2, username:'fernando', curtidas:100, comentarios:5},
                {id:3, username:'vanny', curtidas:20, comentarios:20},
            ]
        };

    }

    render(){
        return(
            <div>
                {this.state.feed.map((item)=>{
                    return(
                        <div key={item.id}><h3>{item.username}</h3>
                        <a>comentarios :{item.comentarios} / curtidas{item.curtidas} </a></div>
                    );
                })};

            </div>
        );
    }
}

export default App; /*