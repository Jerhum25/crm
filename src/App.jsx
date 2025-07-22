import { Outlet } from 'react-router'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Cookies from './components/Cookies/Cookies'


function App() {
  return (
    <div className='appContainer'>
      <Header/>
      <Outlet/>
      <Cookies/>
      <Footer/>
    </div>
  )
}

export default App
