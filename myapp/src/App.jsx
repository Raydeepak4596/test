import React from 'react'
// import { Admindashboard } from './Dashboard/Admindashboard'
import Navbar from './Component/Navbar'
import {Routes,Route} from 'react-router-dom'
import Blog from './Pages/Blog'
import Home from './Pages/Home'
import Admin from './Pages/Admin'
import { Feature } from './Component/Feature'
import { Content } from './Component/Content'
import { Footer } from './Component/Footer'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'
import {Admindashboard} from './Dashboard/Admindashboard'
import { Totalpost } from './Dashboard/Totalpost'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Feature/>
      <Routes>
        <Route exact path='/'  element={<Home/>}/>
        <Route path='/blog'  element={<Blog/>}/>
        <Route path='/admin'  element={<Admin/>}/>
        <Route path='/admin/login'  element={<Login/>}/>
        <Route path='/admin/register'  element={<Register/>}/>
        <Route path='/admindashboard'  element={<Admindashboard/>}/>
        <Route path='/postlist'  element={<Totalpost/>}/>
      </Routes>
      {/* <Content/> */}
      <Footer/>
     {/* <Admindashboard/> */}
    </div>
  )
}

export default App
