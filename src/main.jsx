import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Show.css'
// import Home from './Home.jsx'
import Show from './Show.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Home /> */}
    <Show/>
  </StrictMode>,
)
