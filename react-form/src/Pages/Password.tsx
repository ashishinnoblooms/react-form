import { useState } from 'react'
import validator from 'validator'
import './password.css'

export default function Password(){
    const [err, setErr] = useState("")

    function handleChangePass(value:any){
        if(validator.isStrongPassword(value,{minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers:1, minSymbols:1})){
            setErr("This is a strong Password")
        } else {
            setErr("This is not a strong Password")
        }
    }

    return(
        <div className='container '>
            <h2 className='pass-h'>Password strength validator</h2>
            <div className='pass-container'>
            <label htmlFor="password" className='pass-p'>Type your password here:
            </label>
            <input type="text" id='password' name='password' onChange={(e)=> handleChangePass(e.target.value)} />
            {err === ''? null : <p className='pass-p' style={{color:"redtextFail"}}>{err}</p>}
            </div>
        </div>
    )
}