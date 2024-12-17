import { useEffect, useState } from "react"
import "./Form.css"
import "./table.css"
// import Table from "./Table"

export default function Form() {

    const [upIdx, setUpIdx] = useState()
    const [isEditing, setIsEditing]= useState(false)

    const [dataArray, setDataArray] = useState(()=>{
        const savedData = (localStorage.getItem("dataArray"));
        return savedData ? JSON.parse(savedData): [];
    })
    const [inputData, setInputData] = useState({
        id:"",
        name: "",
        age: "",
        mobile: "",
        email: "",
        address: "",
    })

    const [error, setError] = useState({
        number: "",
        email: ""
    })

    const handleChange = (event: { target: { name: any; value: any } }) => {
        const { name, value } = event.target;
        setInputData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    let updateIndex = upIdx

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        
        const numberExists = dataArray.some((item: { mobile: string })=> item.mobile === inputData.mobile)
        const emailExists = dataArray.some((item: { email: string })=> item.email === inputData.email)
        if (numberExists && !isEditing) {
            setError(prevErr => ({...prevErr, number:"Number already registered"}))
            return
        }else if(emailExists && !isEditing){
            setError(prevErr => ({...prevErr, email:"Email already Registerd"}))
            return
        } else {
            setError(prevErr => ({...prevErr, number:"", email:""}))
        }
        
        let newDataArray 
        if (email)
        if (isEditing){
            const newUpData = {...inputData}
            newDataArray = [...dataArray]
            newDataArray[updateIndex] = newUpData
           
        } else {
            const newId = Date.now(); 
            const newData = { ...inputData, id: newId }; 
            newDataArray = [...dataArray, newData];
        }

        setDataArray(newDataArray)
        setIsEditing(false)
    }

    useEffect (()=>{
        if (dataArray.length > 0) {
        localStorage.setItem("dataArray", JSON.stringify(dataArray))
    } else {
        localStorage.removeItem("dataArray")
    }

}, [dataArray])
    
    function reset() {
        setInputData({
            id: "",
            name: "",
            age: "",
            mobile: "",
            email: "",
            address: "",
        })
    }
    // function handleEdit(index) {
    //     setInputData(prevData =>({...prevData,
    //         id:dataArray[index].id,
    //         name:dataArray[index].name,
    //         age:dataArray[index].age,
    //         mobile:dataArray[index].mobile,
    //         email:dataArray[index].email,
    //         address:dataArray[index].address
    //     }))
    //     setUpIdx(index)
    //     setIsEditing(true)
    // }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>{isEditing ? "Update Form" :"Sign Up Form"}</h1>

                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" value={inputData.name} onChange={handleChange} />

                <label htmlFor="age">Age: </label>
                <input type="number" id="age" name="age" min="1" max="100" value={inputData.age} onChange={handleChange} />

                <label htmlFor="mobile">Mobile: </label>
                <input type="number" name="mobile" id="mobile" value={inputData.mobile} onChange={handleChange} minLength={9999999999} maxLength={9999999999}/>

                {/* Display Error Message  */}
                {error && <p className="error">{error.number}</p>}

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={inputData.email} onChange={handleChange} required />

                {/* Display Error Message  */}
                {error && <p className="error">{error.email}</p>}

                <label htmlFor="address">Address: </label>
                <textarea name="address" id="address" value={inputData.address} onChange={handleChange} required></textarea>

                <input type="submit" value={isEditing ? "Update" :"Submit"} />
                <input type="reset" value="Cancel" onClick={reset} />
            </form>
        </>
    )
}
//  