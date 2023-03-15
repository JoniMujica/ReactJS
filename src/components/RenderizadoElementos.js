import React, {Component} from "react";
import Data from '../helpers/Data.json'

function ElementoLista(props){
    return(
        <li>
            <a href={props.elemento.web} target="_blank">{props.elemento.name}</a>
        </li>
    )
}


export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primavera","Verano","Otonio","Invierno"]
        }
    }
    render(){
        console.log(Data)
        return( 
            <div>
                <h2>Renderizado de elementos</h2>
                <h2>Estaciones del anio</h2>
                <ol>
                    {
                        this.state.seasons.map((el, key)=>(
                        <li key={key}>{el}</li>
                        ))
                    }
                </ol>
                <h3>Frameworks FrontEnd</h3>
                <ul>
                {
                    Data.Frameworks.map((el) => <ElementoLista key={el.id} elemento={el} />)
                }
                </ul>
            </div>
        )
    }
}