import React, { useState } from 'react';

import { CrudForm } from './CrudForm'
import { CrudTable } from './CrudTable'



export const CrudApi = () => {

    const [dataToEdit, setDataToEdit] = useState(null);

    const [db, setDb] = useState([])
    
    const createData = (data) => {
        data.id = Date.now();
        //console.log(data)
        setDb([...db,data])
    }
    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
    }
    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estas seguro que desea eliminar el registro con la ID '${id}'`);
        if (isDelete) {
            let newData = db.filter(el=>el.id !== id)
            setDb(newData)

        } else {
            return; 
        }
    }
  return (
    <div>
        <h2>CRUD APP</h2>
        <article className='grid-1-2'>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit}  />
        </article>
    </div>
  )
}
