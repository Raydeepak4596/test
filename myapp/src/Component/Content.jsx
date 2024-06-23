import React, { useEffect, useState } from 'react'
import pic from '../Pic/a.jpg'
import axios from 'axios'
export const Content = () => {
    const [data1, setdata1] = useState('')
    const data = async () => {
        try {
            const r = await axios.get(`http://localhost:5200/api/vi/post`)
            const r1 = r.data
            console.log(r1)
            setdata1(r1)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        data()
    }, [])

    const render1=(e,i)=>{
        return(
            <div>
                 <div className='w-15 h-auto  p-4 shadow'  key={i}>
                    <img src={pic} alt="" className='rounded-md' />
                    <div className='text-center mt-4'>
                        <h1 className='text-3xl'>{e.title} </h1>
                        <p className='mt-2'>{e.description}</p>
                        <button type='button' className=' px-8 bg-green-500 mt-3 py-2 rounded-xl'>Read More</button>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='mt-8 text-center   text-3xl'>Blog Post</div>
            <div className='container m-auto flex justify-between'>

               {data1 && data1.map(render1)}



                {/* <div className='w-15 h-auto p-4 shadow'>
                    <img src={pic} alt="" className='rounded-md' />
                    <div className='text-center mt-4'>
                        <h1 className='text-3xl'>Is MERN worth in 2024? </h1>
                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corrupti rem veritatis vitae? At, debitis nostrum!</p>
                        <button type='button' className=' px-8 bg-green-500 mt-3 py-2 rounded-xl'>Read More</button>
                    </div>

                </div> */}
                {/* <div className='w-15 h-auto p-4 shadow'>
                    <img src={pic} alt="" className='rounded-md' />
                    <div className='text-center mt-4'>
                        <h1 className='text-3xl'>Is MERN worth in 2024? </h1>
                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corrupti rem veritatis vitae? At, debitis nostrum!</p>
                        <button type='button' className=' px-8 bg-green-500 mt-3 py-2 rounded-xl'>Read More</button>
                    </div>

                </div> */}



            </div>
        </div>
    )
}
