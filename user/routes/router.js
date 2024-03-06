const express = require("express");
const { register } = require("../features/Registration/registration");
const { Login } = require("../features/Login/loginController");
// const { passwordvalidation, emailvarification } = require("../middleware/validation");
const validateaccesstoken = require("../middleware/validation");
const { updatefield, deletefield, getdata, createfield } = require("../features/signedupcontroller");
const  Uploader = require("../middleware/multer");
const displaydatabases = require("../middleware/displayDatabase.js")
const  router = express.Router();



const up = Uploader.uploder;
console.log(Uploader,"LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLll");

const token ="hello"

router.route("/signup").post(up,register); 
router.route("/login").post(Login);
router.route("/logout").post();
router.route("/showall").get(displaydatabases);
// router.route("/usersigned/update").put([validateaccesstoken],updatefield);
router.route("/usersigned/delete").delete([validateaccesstoken.emailvarification,validateaccesstoken.passwordvalidation],deletefield);
// router.route("/usersigned/list").get([validateaccesstoken],getdata);
// router.route("/usersigned/add").post([validateaccesstoken],createfield)
// router.route("/activation").post(emailVarification)

module.exports=router;