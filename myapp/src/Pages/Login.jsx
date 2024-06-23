import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export const Login = () => {
    const [data, setdata] = useState({
        email: '',
        password: ''
    })
    const[isval,setisval]=useState(false)
    const navigate = useNavigate()
    const loginbtn = async () => {
        try {
          const re=  await axios.post(`http://localhost:5200/api/vi/login`, data)
          const re1=re.data.message
          if(re1===true){
            navigate('/admindashboard')
          }
          else{
            alert(re1)
          }
            setdata({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error)

        }


    }

    const registerbtn = () => {
        navigate('/admin/register')
    }
    const handler = (e) => {
        const { name, value } = e.target
        setdata({ ...data, [name]: value })

    }
    // if(isval){
    //     navigate('/admindashboard')
    // }
    // else{
    //     navigate('/')
    // }

    return (
        <div>
            <div className='mt-16 w-full h-full flex justify-center items-center'>
                <table className='shadow-md w-1/4 m-auto'>
                    <tr><input className='w-full' name='email' value={data.email} onChange={handler} type="text" placeholder='Username' /></tr>
                    <tr><input className='w-full' name='password' value={data.password} onChange={handler} type="text" placeholder='Password' /></tr>
                    <tr><button onClick={loginbtn} className='w-full  bg-green-500'>Login</button></tr>
                    <tr><button onClick={registerbtn}>Register</button></tr>
                </table>
            </div>


        </div>
    )
}
