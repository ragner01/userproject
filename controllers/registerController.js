const User = require(`../models/Users`)

const bcrypt = require(`bcrypt`)

const handleRegister = async (req, res)=> {
    const { user, email,image,pwd } =req.body
    if (!user || !email || !pwd) return res.status(401).json({"Message":
"Field cannot be empty" })

try{
    const existingUser = await User.findOne({username: us}).exec()
    const existingEmail = await User.findOne({ email: email}).exec()

    if (existingUser|| existingEmail) return res.status(401).json({
        "Message": "username/email already taken" })
   const createUser = await User.create({
    "username": user,
    "email": email,
    "image": image,
    "password": hashedPwd
   })
   res.status(500).json({"Message": `${error.message}`})
}

}

module.exports = {handleRegister}