const signup = require("../../model/signupmodel");
const bcrypt = require("bcrypt");
const jwttoken = require("../../../utiles/createtoken")


const Login = async (req, res, next) => {
    const { email, password } = await req.body;
    try {

        let user = await signup.findOne({ "verifieduser.email": `${email}` })
        console.log(user.verifieduser.email);
        if (user == null) {
            res.json("user not found");
            throw new Error("user not valid");
        }
        else if (user.verifieduser.email == email && bcrypt.compare(password, user.verifieduser.password)) {
            const accesstkn = jwttoken(user)
            res.json({ accesstoken: accesstkn});
        }
        else {
            res.json({ message: "wrong password" });
            throw new Error("wrong password")
        }
    }
    catch (err) {
        throw new Error(`${err}llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll`)
    }
}


module.exports = { Login }
