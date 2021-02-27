import React, {Component, component} from 'react';

class App extends Component{

constructor(props){
    super(props);
    this.state = {
        hora: '00:00:00'
        };
    } 
    componentDidMount(){ //web service, api... 
        setInterval(() => {
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 1000);
   
    }
    componentDidUpdate(){
        console.log('atualizando?');
    }
    /*
    shouldComponentUpdate(){ //vai retornar um true ou false 
    } */

 render(){
     return(
        <div>
            <h2>Meu tempo {this.props.hora} </h2>
        </div>
        );
        }
    }
export default App;
