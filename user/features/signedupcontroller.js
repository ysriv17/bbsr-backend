
const signup = require('../model/signupmodel')

const updatefield = async (req, res) => {
    const user = await signup.findOne({ _id: req.body.userid }).pretty();

    if (user) {
        const updateduser = await signup.updateOne({ _id: req.body.userid }, req.body);
        res.status(200).json({ message: `${updateduser} is updated` });
    }
    res.status(200).json({ message: `not updated` });
};

const deletefield = async (req, res) => {
    const user = await signup.findOne({ _id: req.body.userid });
    if (user) {
        const userdelete = await signup.deleteOne(user)
        res.status(402).json({ message: ` ${userdelete} is deleted` })
    }
    else {
        res.json({ message: "NOT FOUND" })
    }

};
const getdata = async (req, res) => {
    console.log(req.query)
    const { pagination, search } = req.query;
    console.log(pagination)
    if (pagination) {
        const user = await signup.find({ name: search }).sort({ "name": 1 }).limit(pagination);
        res.status(300).json({ message: "get the data", detail: `${user}` })
    }

    else {
        console.log('LLLLLLLLLLLLLLLLLL')
        const user = await signup.find({ name: search}).sort({ "name": 1 }).limit(10);
        res.status(300).json({ message: "get the data", detail: `${user}` })
    }
    

};

const createfield = async (req, res) => {
    const { name, email, password, age } = req.body;
    console.log(req.body, email, name)

    const yeu = await signup.create(req.body)
    return res.send({
        message: "done sucessfully",
        deatils: `${yeu}`
    }).status(400);
}
module.exports = {
    updatefield, deletefield, getdata, createfield
}