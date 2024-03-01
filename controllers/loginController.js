const user = require('../models/users')

const bcrypt = require('bcrypt')

const handlelogin = async (req,res) => {

    const { user, pwd } req.body
    if (!user||!pwd) return res.status(400).json({"message":"Fields cannot "})
    try{
const foundUser = await user.findOne({username: user}).exec()
if (!foundUser) return res.status(401).json({"Messsage":"User not found"
})
const match = await bcrypt.compare(pwd, foundUser.password)
if (match) {
    const {password,...other } = foundUser._doc
    res.json(other)
    res.status(200).json({"Success":"Log in successful"})
    res.json(other)

} else{
    res.status(400).json({"Message":"username/password not correct"})
}
    } catch (error) {
        res.status(500).json({"Message":`${error.message}`})
    }
}

module.exports = {handleLogin}