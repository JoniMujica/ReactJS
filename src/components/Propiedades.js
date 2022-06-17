import React from "react";
export default function  Propiedades(props){
    return(
        <div>
            <h2>prop.porDefecto</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "verdadero" : "falso"}</li>
                <li>{props.arreglo.join(",")}</li>
                <li>{props.objeto.Nombre + " " + props.objeto.Correo}</li>
                <li>{props.arreglo.map(props.function).join(",")}</li>
                <li>{props.elementoReact}</li>
            </ul>

        </div>
    )
}

Propiedades.defaultProps ={
    porDefecto: "Las Props",
}