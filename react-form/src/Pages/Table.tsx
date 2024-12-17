import React, { useEffect, useState } from "react";



export default function Table(){

    const[dataArray, setDataArray] = useState(()=> {
        const savedData = localStorage.getItem("dataArray")
        return savedData ? JSON.parse(savedData):[]
    })

    useEffect(()=>{
        const savedData = localStorage.getItem("dataArray")
        if(savedData){
            setDataArray(JSON.parse(savedData))
        }
    },[])

    function handleDelete(id:any) {
        setDataArray(dataArray.filter(item => item.id!== id))
    }
    
    useEffect (()=>{
        if (dataArray.length > 0) {
        localStorage.setItem("dataArray", JSON.stringify(dataArray))
    } else {
        localStorage.removeItem("dataArray")
    }

}, [dataArray])

    return (
        <table>
                {dataArray.length > 0 ?
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    : <p className="no-data">No data availble to show </p>
                }
                <tbody>
                    {dataArray.map((data, idx) =>
                        <tr key={data.id}>
                            <td>{idx + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.mobile}</td>
                            <td>{data.email}</td>
                            <td><div className="address">{data.address}</div></td>
                            <td>
                                {/* <button onClick={() =>handleEdit(idx)}> Edit</button> */}
                                <button onClick={() => handleDelete(data.id)}>Delete</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
    )
}