import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Totalpost = () => {
    const [bol, setbol] = useState(false)
    const [data, setdata] = useState('')
    const[id,setid]=useState(null)
    const[uuid,setuuid]=useState(null)
    const[ed,seted]=useState({
        title:'',
        description:''
    })
   
    const totalpost = async () => {
        const re = await axios.get(`http://localhost:5200/api/vi/totalpost`)
        setdata(re.data)
    }
    useEffect(() => {
        totalpost()
    }, [ed])

   

const editdata=(uuid,i)=>{
    setbol(true)
    setid(i)
    setuuid(uuid)
    seted({
        title:data[i].title,
        description:data[i].description
    })
  

}
    

const savedata=()=>{
   try {
    axios.put(`http://localhost:5200/api/vi/update/${uuid}`,ed)
    setbol(false)
    setid(null)
    setuuid(null)
    seted({
    title:'',
    description:''
    })
   } catch (error) {
    
   }
   
}

const handler=(e)=>{
    const{name,value}=e.target
seted({...ed,[name]:value})

}


const deletebtn=(i)=>{

    try {
 axios.delete(`http://localhost:5200/api/vi/delete/${i}`)
        
    } catch (error) {
        
    }
}

    const renderdata = (e, index) => {
        return (
            <div>
                <ul key={index} className='my-4 shadow-md px-4'>
                    { index === id ? (<div>



                        <div className='w-full h-full '>

                            <div className='w-4/5 m-auto shadow-md'>
                                <input type="text" placeholder='Enter title'  onChange={handler}  value={ed.title} name='title' className=' mt-4 py-4 m-auto w-full px-4 shadow' />
                                <textarea placeholder='Enter description' onChange={handler} value={ed.description} name='description' className='mt-4 p-4 m-auto w-full h-[4rem]'></textarea>
                                <br />
                                {/* <button type='button' onClick={addpost}>Add</button> */}
                            </div>

                        </div>


                    </div>) : (<div>
                        <li>{e.title}</li>
                        <li>{e.description}</li>
                    </div>)}

                    <li>
                      {bol?(<button onClick={savedata} className='bg-green-500 py-2 px-8 rounded-md mb-4'>Save</button>):(<button onClick={() => { editdata(e._id,index) }} className='bg-green-500 py-2 px-8 rounded-md mb-4'>Edit</button>)}  



                        <button onClick={()=>deletebtn(e._id)} className='mb-4 bg-green-500 py-2 px-8 rounded-md'>Delete</button></li>
                </ul>
            </div>
        )
    }

    return (
        <div>{data && data.map(renderdata)}</div>

    )
}
