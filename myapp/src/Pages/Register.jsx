import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Register = () => {

  const [data, setdata] = useState({
    name: '',
    username: '',
    password: '',
    conferm_password: ''
  })
  const handlechange = (e) => {
    const { name, value } = e.target
    setdata({ ...data, [name]: value })
  }

  const registerbtn = async() => {

    try {
      const da = {
        name: data.name,
        username: data.username,
        password: data.password
      }
      if (da.name === '' || da.username === '' || da.password === '') {
        alert("Please fill")
  
      }
      else {
        
  
        if (da.password === data.conferm_password) {
          const a= await axios.post(`http://localhost:5200/api/vi/admin/register`, da)
          // const b=a.data.message
          alert(a.data.message)
          // settest1(b)
        
        
          setdata({
            name: '',
            username: '',
            password: '',
            conferm_password: ''
          })
        }
        else {
          alert("Please enter match password")
        }
      }
      
    } catch (error) {
      console.log('dddddd')
    }

 
  
}

const navigate = useNavigate()
const loginbtn = () => {
  navigate('/admin/login')

}
return (
  <div>
    <div className='mt-16 w-full h-full flex justify-center items-center'>
      <table className='shadow-md w-1/4 m-auto'>
        <tr><input className='w-full' type="text" name='name' value={data.name} onChange={handlechange} placeholder='Name' /></tr>
        <tr><input className='w-full' type="text" name='username' value={data.username} onChange={handlechange} placeholder='Username' /></tr>
        <tr><input className='w-full' type="text" name='password' value={data.password} onChange={handlechange} placeholder='Password' /></tr>
        <tr><input className='w-full' type="text" name='conferm_password' value={data.conferm_password} onChange={handlechange} placeholder='Conferm Password' /></tr>
        <tr><button onClick={registerbtn} type='button' className='w-full bg-green-400'>Register</button></tr>
        <tr><button onClick={loginbtn}>Login</button></tr>
      </table>
      {/* <h2>{test1}</h2> */}
    </div>
  </div>
)
  }
