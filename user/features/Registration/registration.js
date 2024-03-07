const errors = require("../../../error-handle");

const signup = require("../../model/signupmodel");
const bcrypt = require("bcrypt");


const register = async (req, res, next) => {

  try {
    const { email, password, name ,role } = await req.body;
    let user = await signup.findOne({"verifieduser.email" : email})
   
    const avaiter = req.file.path
    
    if (!email || !password || !name) {
      res.status(100).json({ message: `${errors}`, status: false })
    }
    else if (user) {
      res.json({ Message: "User already exist", status: false });
    }
    else {
      ////////////////////////////////////////////////////////creating data in database ///////////////////////////////////////////////////
      const hashedpassword = await bcrypt.hash(password, 10);
      const newuser = {
        email: `${email}`,
        password: `${hashedpassword}`,
        name: `${name}`,
        avaiter: `${avaiter}`,
        role: `${role}`
      }
       await signup.create({ verifieduser : newuser });

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // const accesstkn = jwttoken(newuser);
      // const acctivationlink = `http://localhost:3000/activation/${accesstkn}`

      /////////////////////////////////////////////////////////////////////Email sending using gmail and nodemailer ////////////////
      // try {
      //   await sendmail({
      //     email: newuser.email,
      //     subject: "Activate your account",
      //     message: `Hello ${newuser.name}, click on the link to activate your account ${acctivationlink}`
      //   })


      // }
      // catch (err) {
      //   new errors.Errorhandler(err.message, 402)
      // }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      res.status(200).json({ "Message" : `user created :email: ${newuser.email}`, status: true })
    }
  }
  catch (err) {
    console.log("imhere error", err)
    return next(new errors.Errorhandler(err.message, 403))
  }
 

}

module.exports = { register }
