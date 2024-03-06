const jwttoken = require('../utiles/createtoken')
const unVerified = require("../user/model/unVerified")
const bcrypt = require("bcrypt");
const Savejwt = async (req, res, next) => {
    const { email, password, name } = req.body
    const avaiter = await req.file.path
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = {
        email: `${email}`,
        password: `${hashedpassword}`,
        name: `${name}`,
        avaiter: `${avaiter}`
    }

    const accestoken = jwttoken(user)
    console.log(user,accestoken,":LPPPPPPPPPwdpqkwdpqkdpqkdqpdqkdpqdkqpdqkdpdkp")
    unVerified.create({ jwttoken: accestoken , userdata : user })
}
module.exports = Savejwt