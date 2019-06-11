import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import cssobj from './index.scss';

import img from '../public/bg2.png'

console.log(cssobj);

class App extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className={ cssobj.main } >
                <img src={img} alt=""/>
            </div>
        )
    }
}



ReactDOM.render( <App/> ,  document.getElementById('app') )