import React from 'react'
import pic from '../Pic/a.jpg'
import { Addpost } from './Addpost'
import {Link} from 'react-router-dom'
export const Admindashboard = () => {
  return (
    <>
      {/* Main div for flex== */}
      <div className='flex justify-between w-full h-full'>
        {/* left div for left dashbord */}
        <div className='w-1/4 border- h-[100vh] text-center  justify-center bg-orange-200'>
          <img src={pic} className='rounded-full w-24 h-24 ' alt="" />
          <h2>User Name</h2>
          <div>
            <h2>Add Post</h2>
            
            <Link to='/postlist'><h2>Total Post</h2></Link>

          </div>
        </div>
        {/* right div for right dashboard */}
        <div className='w-3/4'>
          <div className='bg-orange-300'>Dashboard</div>
          <div>
<Addpost/>
          </div>
        </div>

      </div>
    </>
  )
}
