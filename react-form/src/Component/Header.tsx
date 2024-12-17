
import {Routes, Route, Link } from "react-router-dom";
import './header.css'
import Form from "../Pages/Form"
import Table from "../Pages/Table";
import Jokes from "../Pages/Jokes";
import Password from "../Pages/Password";

export default function Header(){
    return (
        <div style={{width:"100%", }}>
        <nav >            
            <ul>
                <li><Link to="/">Form</Link></li>
                <li><Link to="/table">Table</Link></li>
                <li><Link to="/jokes">Jokes</Link></li>
                <li><Link to="/password-validator">Password Validator</Link></li>
            </ul>
        </nav>
       <Routes>
           <Route path="/" element={<Form />} />
           <Route path="/table" element={<Table />} />
           <Route path="/jokes" element={<Jokes/>}/>
           <Route path="/password-validator" element={<Password/>}/>
       </Routes>
       </div>
    )
}