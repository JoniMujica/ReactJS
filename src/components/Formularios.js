import React, { useState } from 'react';

/*
export default function Formularios(){

    const[nombre,setNombre] = useState("");
    const[sabor,setSabor] = useState("");
    const[lenguaje,setLenguaje] = useState("");
    const[terminos,setTerminos] = useState(false);

    const handleSubmit = e =>{
        e.preventDefault();
        alert("El formulario se ha enviado!")
    }

    return(
        <>
            <h1>Formularios</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input 
                    type="text"
                    id='nombre'    
                    value={nombre} 
                    onChange={(e)=> setNombre(e.target.value)} 
                />
                <p>Elige tu sabor JS favorito</p>
                <input 
                    type="radio" 
                    id='vanila' 
                    name='sabor'
                    value="vanila" 
                    onChange={(e) => setSabor(e.target.value)}
                    defaultChecked />
                <label htmlFor='vanila'>vanila</label>
                <input 
                    type="radio" 
                    id='react' 
                    name='sabor' 
                    value="react" 
                    onChange={(e) => setSabor(e.target.value)} />
                <label htmlFor='react'>react</label>
                <input 
                    type="radio" 
                    id='angular' 
                    name='sabor' 
                    value="angular" 
                    onChange={(e) => setSabor(e.target.value)} />
                <label htmlFor='angular'>angular</label>
                <input 
                    type="radio" 
                    id='vue' 
                    name='sabor' 
                    value="vue" 
                    onChange={(e) => setSabor(e.target.value)} />
                <label htmlFor='vue'>Vue</label>
                <input 
                    type="radio" 
                    id='svelte' 
                    name='sabor' 
                    value="svelte" 
                    onChange={(e) => setSabor(e.target.value)} />
                <label htmlFor='svelte'>svelte</label>

                <p>Elige tu lenguaje de programacion favorito!</p>
                <select name='lenguaje' onChange={(e)=> setLenguaje(e.target.value)} defaultValue="">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br/>

                <label htmlFor='terminos'>Acepto terminos y condiciones</label>
                <input type="checkbox" id='terminos' name='terminos' onChange={(e) => setTerminos(e.target.checked)}></input>
                <br />
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}
*/

export default function Formularios(){

    const[form,setForm] = useState({});

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value  
        })
    }
    const handleChecked = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked  
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        alert("El formulario se ha enviado!")
    }

    return(
        <>
            <h1>Formularios</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input 
                    type="text"
                    id='nombre'
                    name='nombre'
                    value={form.nombre} 
                    onChange={handleChange} 
                />
                <p>Elige tu sabor JS favorito</p>
                <input 
                    type="radio" 
                    id='vanila' 
                    name='sabor'
                    value="vanila" 
                    onChange={handleChange}
                    defaultChecked />
                <label htmlFor='vanila'>vanila</label>
                <input 
                    type="radio" 
                    id='react' 
                    name='sabor' 
                    value="react" 
                    onChange={handleChange} />
                <label htmlFor='react'>react</label>
                <input 
                    type="radio" 
                    id='angular' 
                    name='sabor' 
                    value="angular" 
                    onChange={handleChange} />
                <label htmlFor='angular'>angular</label>
                <input 
                    type="radio" 
                    id='vue' 
                    name='sabor' 
                    value="vue" 
                    onChange={handleChange} />
                <label htmlFor='vue'>Vue</label>
                <input 
                    type="radio" 
                    id='svelte' 
                    name='sabor' 
                    value="svelte" 
                    onChange={handleChange} />
                <label htmlFor='svelte'>svelte</label>

                <p>Elige tu lenguaje de programacion favorito!</p>
                <select name='lenguaje' onChange={handleChange} defaultValue="">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br/>

                <label htmlFor='terminos'>Acepto terminos y condiciones</label>
                <input type="checkbox" id='terminos' name='terminos' onChange={handleChecked}></input>
                <br />
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}