import React,{useState} from "react"
import SelectList from './SelectList'

const SelectsAnidados = () => {
    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");

    const TOKEN = "3bb1cd1f-a45a-4fb3-a2db-97b0517142eb"
  return (
    <div>
        <h2>Selects Anidados</h2>
        <h3>Mexico</h3>
        <SelectList title="estado" url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`} handleChange={(e) => {setState(e.target.value)}} />
        {state && <SelectList title="municipios" url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} handleChange={(e) => {setTown(e.target.value)}} />}
        {town && <SelectList title="colonia" url="" handleChange={(e) => {setSuburb(e.target.value)}} />}
        <pre>
            <code>
                {state} - {town} - {suburb}
            </code>
        </pre>
    </div>
  )
}

export default SelectsAnidados