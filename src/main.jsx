import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import ClientsList from './pages/CLientsList/ClientsList.jsx'
import Statistics from './pages/Statistics/Statistics.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/clientsList' element={<ClientsList/>}/>
        <Route path='/statistics' element={<Statistics/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
