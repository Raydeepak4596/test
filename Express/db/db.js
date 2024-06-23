import mongoose from "mongoose";
const db= async()=>{
 try {
    mongoose.connect(process.env.URL).then(()=>console.log('db is connected'))
   
 } catch (error) {
    console.log('db is not connected',error)
 }
}

export default db