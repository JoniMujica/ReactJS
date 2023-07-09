import React, { useState, useEffect } from 'react';

import { CrudForm } from './CrudForm'
import { CrudTable } from './CrudTable'
import { helpHttp } from '../helpers/helpHttp';



export const CrudApi = () => {

    const [dataToEdit, setDataToEdit] = useState(null);

    const [db, setDb] = useState([])
 
    let api = helpHttp();
    let url = "http://localhost:5000/santos";

    useEffect(() => {
        api.get(url).then((res)=>{
            //console.log(res)
            if(!res.err){
                setDb(res);
            }else{
                setDb(null);
            }
        });
    }, []);
    
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
        <h2>CRUD API</h2>
        <article className='grid-1-2'>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit}  />
        </article>
    </div>
  )
}
