const signup = require("../../model/signupmodel");
const bcrypt = require("bcrypt");
const jwttoken = require("../../../utiles/createtoken")


const Login = async (req, res, next) => {
    const { email, password } = await req.body;
    try {

        let user = await signup.findOne({ "verifieduser.email": `${email}` })
        console.log(user)
        if (user == null) {
            console.log(user not found)
            res.status(100).json("user not found");
            
            throw new Error("user not valid");
        }
        else if (user.verifieduser.email == email && await bcrypt.compare(password, user.verifieduser.password)) {
            console.log("imhere beata",bcrypt.compare(password, user.verifieduser.password))
            const accesstkn = jwttoken(user)
            res.status(201).json({ accesstoken: accesstkn}); 
           
            
        }
        else {
            res.status(100).json({ message: "wrong password" });
              console.log("im in else")
            throw new Error("wrong password")
        }
    }
    catch (err) {
        throw new Error(`${err}llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll`)
    }
}


module.exports = { Login }
