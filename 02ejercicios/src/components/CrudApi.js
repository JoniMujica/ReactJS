import React, { useState, useEffect } from 'react';


import { CrudForm } from './CrudForm'
import { CrudTable } from './CrudTable'
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from './Message';



export const CrudApi = () => {

    const [dataToEdit, setDataToEdit] = useState(null);
    const [db, setDb] = useState(null)

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
 
    let api = helpHttp();
    let url = "http://localhost:5000/santos";

    useEffect(() => {
        setLoading(true);
        helpHttp()
          .get(url)
          .then((res) => {
            //console.log(res);
            if (!res.err) {
              setDb(res);
              setError(null);
            } else {
              setDb(null);
              setError(res);
            }
            setLoading(false);
          });
      }, [url]);
    
    const createData = (data) => {

        let options ={
            body: data,
            headers: {"content-type":"application/json"}
        }
        data.id = Date.now();
        //console.log(data)
        api.post(url,options).then(res=>{
            console.log(res)
            if(!res.err){
                setDb([...db,res])
            }else{
                setError(res)
            }
        })
        
    }
    const updateData = (data) => {

        let endpoint = `${url}/${data.id}`
        //console.log(endpoint);

        //let newData = db.map(el => el.id === data.id ? data : el);
        //setDb(newData);

        let options ={
            body: data,
            headers: {"content-type":"application/json"}
        }
        data.id = Date.now();
        //console.log(data)
        api.put(endpoint,options).then(res=>{
            //console.log(res)
            if(!res.err){
                let newData = db.map(el => el.id === data.id ? data : el);
                //setDb([...db,res])
                setDb(newData)
            }else{
                setError(res)
            }
        })
    }
    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estas seguro que desea eliminar el registro con la ID '${id}'`);
        if (isDelete) {

            let endpoint = `${url}/${id}`
            let options ={
                headers: {"content-type":"application/json"}
            }
            api.del(endpoint,options).then(res=>{
                if(!res.err){
                    let newData = db.filter(el=>el.id !== id)
                    setDb(newData)
                }else{
                    setError(res)
                }
            })
            
        } else {
            return; 
        }
    }
  return (
    <div>
        <h2>CRUD API</h2>
        <article className='grid-1-2'>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            {loading && <Loader />}
            {error && <Message msg={`Error ${error.status} : ${error.statusText}`} bgColor="#dc3545" />}
            {db && <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit}  />}
            
        </article>
    </div>
  )
}
