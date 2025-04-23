const User  = require("../models/user.model");
 const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToken") ;

const signUp = async(req , res) =>{
    try {

        const {name , email, password}= req.body;

        // Ensuring that user provide us all fields.

        if(!name|| !email|| !password){
            return res.status(400).json({
                success: false,
                message : " All fields are required..."
            })
        }
        // Checking that weather this email is available already or not.

        const user= await User.findOne({email});

        if(user){
            return res.status(400).json({
                success: false,
                message: "Email already exist..."
            })
        }

        // Hashing password so that no one could hack it.

        const hashpassword= await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashpassword
        })

        return res.status(201).json({
            success:true,
            message:"Account created sucessfully..."
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to Register..."
        })
    }
}

 const logIn = async(req, res)=>{
    try {
        const { email, password}= req.body;

        // Ensuring that user provide us all fields.

        if( !email|| !password){
            return res.status(400).json({
                success: false,
                message : " All fields are required..."
            })
        }

        const  user= await User.findOne({email});

        if(!user){
            return res.status(400).json({
                success: false,
                message : " Incorrect email and password..."
            })
        }

        const checkPassword= await bcrypt.compare(password, user.password);

        if(!checkPassword){
            return res.status(400).json({
                success: false,
                message : " Incorrect email and password..."
            })
        }
        generateToken(res, user, `Welcome back ${user.name}`);
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Fail to login..."
        })
    }
}

module.exports = { signUp , logIn};