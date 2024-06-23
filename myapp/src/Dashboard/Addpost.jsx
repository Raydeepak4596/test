import axios from 'axios'
import React, { useState } from 'react'

export const Addpost = () => {
    const[data,setdata]=useState({
        title:'',
        description:''
    })

const handler=(e)=>{
    const{name,value}=e.target
    setdata({...data,[name]:value})
}

const addpost=()=>{
    try {
        axios.post(`http://localhost:5200/api/vi/addpost`,data)
        setdata({title:'',description:''})
    } catch (error) {
        
    }
}
    return (
        <div className='w-full h-full '>

            <div className='w-4/5 m-auto shadow-md'>
                <input type="text" placeholder='Enter title' onChange={handler} value={data.title} name='title' className=' mt-4 py-4 m-auto w-full px-4 shadow' />
                <textarea placeholder='Enter description' onChange={handler} value={data.description} name='description' className='mt-4 p-4 m-auto w-full h-[15rem]'></textarea>
                <br />
                <button type='button' onClick={addpost}>Add</button>
            </div>
            
        </div>
    )
}
