const multer = require("multer");
const fs = require("fs")

  const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            console.log("kkksd", file)
            return cb(null, "./user/middleware/uploaads/")
        },
        filename: function (req, file, cb) {
            console.log(file, "KKKKKKNIJII")
            return cb(null, file.fieldname + '---' + Date.now()+'.png');
        }
    });
    const upload = multer({ storage: storage });
    
   

exports.uploder = upload.single("avaiter");
