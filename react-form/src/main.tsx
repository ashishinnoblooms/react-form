import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import Header from './Component/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
     <Header/>
     </BrowserRouter>
  </StrictMode>,
)
