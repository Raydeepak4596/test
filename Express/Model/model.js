import mongoose, { model } from "mongoose";
const schema=mongoose.Schema
const newschema=new schema({
    name:String,
    username:String,
    password:String

})
const newschemapost=new schema({
   
    title:String,
    description:String

})
const modell=new model('profile',newschema)
const post=new model('post',newschemapost)
export default modell
export {post}