import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  
  return (
    <>
      <div className='w-full bg-[#333] h-12 '>

        <div className='w-4/5 m-auto py- flex h-full items-center justify-between'>
          <h1 className='text-2xl text-white'>Website</h1>
          <ul className='flex justify-between text-white'>
            <li className='pr-4'>
              <Link to='/' >Home</Link>
            </li>
            <li className='pr-4'>
              <Link to='/blog'>Blog</Link>
            </li>
            <li className='pr-4'>
              <Link to='/admin/login'>Admin</Link>
              
            </li>
            
          </ul>
        </div>
      </div>
      
    </>
  )
}

export default Navbar
