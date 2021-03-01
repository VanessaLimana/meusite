
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

export default App;