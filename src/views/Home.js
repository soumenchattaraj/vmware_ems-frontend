import React,{useState,useMemo} from 'react'
import {Headers,ColumnHeader} from './Model';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

function Home() {

    
    const[response,setResponse] = useState([]);


    function loadData(){

        axios
        .get(`http://localhost:9000/employee/all`,{
            headers : Headers
        })
        .then(res =>{
            //console.log("Payload:",res.data)
            //console.log("response 1:",res.data.data);
            setResponse(res.data.data);
           
            //console.log("response 2:",res.data.data);
            //console.log("employee data:",response);
        })
        .catch(error=>{
            console.log(error)
        })
    }

   

    return (
        <div align="center" style={{ height: 400, width: '100%' }}>
                <br/>
                <button id="loaddata" onClick={loadData}>Load Data</button>
                <br/>
                <br/>
                <DataGrid
                    columns={ColumnHeader}
                    rows={response}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />

        </div>
    )
}

export default Home
