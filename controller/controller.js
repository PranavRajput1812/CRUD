const {json} = require('express')

const user = require('../model/user.schema.js')


//Create method for Register
exports.register = async (req,res)=>{
    try {
        const {name,email,password} = req.body;
        if (!name || !email || !password ) {
            throw new Error("Name ,Email and Password required")
        }
      
        const DbResult = await user.create({
            name,
            email,
            password
        })
        res.status(201).json({
            success : true,
            message : "User Register Successfully",
            DbResult
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

//Method for login

exports.login = async (req,res)=>{
    const {email,password} = req.body;
    try {
       
        if (!email || !password ) {
            throw new Error("Email and Password required")

        }
        const userExist = await user.findOne({email});
      //password checking.
        if (userExist) {
            if(userExist.password == password){
            res.status(200).json({
                success:true,
                message:"Login Successfully"
            })
        }
        //if pasword not match
        else{
            res.status(404).send({msg:"You have Entered Wrong Password"})
        }
    }
    // Email Accound Different
    else{
        res.status(404).send({msg:"No Account Find Associated to this Email"})
    }

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}