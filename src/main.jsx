import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import ClientsList from './pages/CLientsList/ClientsList.jsx'
import Statistics from './pages/Statistics/Statistics.jsx'
import Contact from './pages/Contact/Contact.jsx'
import LegalNoticies from './pages/LegalNoticies/LegalNoticies.jsx'
import GeneralConditions from './pages/GeneralConditions/GeneralConditions.jsx'
import PrivacyPoliciy from './pages/PrivacyPoliciy/PrivacyPoliciy.jsx'
import CookiesPolicy from './pages/CookiesPolicy/CookiesPolicy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/clientsList' element={<ClientsList/>}/>
        <Route path='/statistics' element={<Statistics/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/legalNoticies' element={<LegalNoticies/>}/>
        <Route path='/generalConditions' element={<GeneralConditions/>}/>
        <Route path='/privacyPolicy' element={<PrivacyPoliciy/>}/>
        <Route path='/cookiesPolicy' element={<CookiesPolicy/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
