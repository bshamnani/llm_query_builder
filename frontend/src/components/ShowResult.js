import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ShowResult = props => {
    let params = useParams()
    console.log(params)
    let userQuery = params.query;
    let tableName = params.table;

    let [result, setResult] = useState()

    useEffect(() => {
        func()
      });

    const func  = async() => {
      if(!result)
      {
        console.log({ 'user_query': userQuery, 'table_name': tableName})
        return await fetch('http://localhost:5000/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'user_query': userQuery, 'table_name': tableName})
        })
        .then(data => data.json()).then(data => setResult({result: data.data}));
      }
    }

    if(!result)
    {
        return(
            <div>
                hello
            </div>
        );
    }
    else if (Array.isArray(Object.entries({result})))
    {
        console.log(typeof(Object.entries({result})))
        console.log(((Object.entries({result}))[0][1]).result)
        // console.log(((Object.entries(((Object.entries({result}))[0][1])))).result)
        console.log(((Object.entries({result}))[0][1]).result[0])
        console.log(Object.entries(((Object.entries({result}))[0][1]).result[0]))
    }
    
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                {
                    Object.entries(((Object.entries({result}))[0][1]).result[0]).map((value, index) => (
                        <TableCell>
                            {value[0]}
                        </TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
        <TableBody>
            {((Object.entries({result}))[0][1]).result.map((item, index) => (
            <TableRow key = {index}>
             {Object.entries(item).map((value, index) => (
                    <TableCell key = {index}>{value[1]}</TableCell>
            ))}  
            </TableRow>
        ))} 
        </TableBody>
        </Table>
        </TableContainer>
    );
    }

export default ShowResult