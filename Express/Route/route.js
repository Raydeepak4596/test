import mongoose from "mongoose";
import Express from 'express'
import modell from '../Model/model.js'
import { post } from "../Model/model.js";

import bcrypt from 'bcrypt'
const router = Express.Router()

router.post('/admin/register', async (req, res) => {
    try {
        const { name, username, password } = req.body
        const saltpassword = 10
        const email = await modell.findOne({ username })

        if (email) {
            res.json({ message: "username already used" })
            // console.log('email used')

        }
        else {
            bcrypt.hash(password, saltpassword, async (err, result) => {
                if (result) {
                    const data = new modell({ name: name, username: username, password: result })
                    await data.save().then(() => {
                        console.log('data is inserted')
                    })
                }
                else {
                    console.log('password is not hashed')
                }
            })
        }



    } catch (error) {

    }


})


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const Email = await modell.findOne({ username: email })
        if (Email) {
            bcrypt.compare(password, Email.password, async (err, result) => {


                if (result) {
                    res.json({ message: true })

                }
                else {
                    res.json({ message: "password not match" })

                }



            })
        }
        else {
            res.json({ message: 'user not registerd' })

        }
    } catch (error) {
        console.log(error)

    }

})


router.post('/addpost',async(req,res)=>{
    try {
        const{title,description}=req.body
        const addpostdata=new post({
            title:title,
            description:description
        })
       await addpostdata.save().then(()=>{
        console.log('Post is added')
       })

        
    } catch (error) {
        
    }
})

router.get('/post',async(req,res)=>{
try {
    const datapost=await post.find()
    res.json(datapost)
} catch (error) {
    console.log('data not fetch')
}
})


router.put('/update/:id',async(req,res)=>{
    try {
        const idd=req.params.id
        const{title,description}=req.body
        const dfind= await post.findByIdAndUpdate(idd,{title ,description}).then(()=>{
            console.log('success update data')
        })
        res.json(dfind)

    } catch (error) {
        console.log('not update data')
        
    }
})


router.delete('/delete/:id',async(req,res)=>{
try {
    const iid=req.params.id
    const df=await post.findByIdAndDelete(iid)
    res.json(df)
} catch (error) {
    console.log('not delete')
    
}
})



router.get('/totalpost',async(req,res)=>{
    try {
        const totalpost=await post.find()
        res.json(totalpost)
    } catch (error) {
        console.log('data not fetch')
    }
    })

export default router