import React,{useState} from "react"
import SelectList from './SelectList'

const SelectsAnidados = () => {
    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");
  return (
    <div>
        <h2>Selects Anidados</h2>
        <h3>Mexico</h3>
        <SelectList title="" url="" handleChange={(e) => {setState(e.target.vaalue)}} />
        {state && <SelectList title="" url="" handleChange={(e) => {setTown(e.target.vaalue)}} />}
        {town && <SelectList title="" url="" handleChange={(e) => {setSuburb(e.target.vaalue)}} />}
        <pre>
            <code>
                {state} - {town} - {suburb}
            </code>
        </pre>
    </div>
  )
}

export default SelectsAnidados