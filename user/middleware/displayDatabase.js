
const signup= require("../model/signupmodel")


const displayDatabase =async(req,res)=>{
    try{
        const collection = await signup.find({})
    const sendDb = collection.forEach((element,index)=>{
        delete element.verifieduser.password
        console.log(element)
      })
       console.log(collection)
        if (collection != null){
            res.status(200).json(collection)
        }
        else{
            res.status(100).json({"message":"blank"})
        }
    }
    catch{
        console.log("imhere error", err)
        return next(new errors.Errorhandler(err.message, 403))
    }
}
module.exports = displayDatabase