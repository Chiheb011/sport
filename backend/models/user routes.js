const express =require('express')
const router = express.Router();
const User = require('../models/user');
app.post("/login", (req, res) => {

    console.log('Here into login', req.body);
    let email = req.body.email;
    let pwd = req.body.pwd;
    let result;
    for (let i = 0; i < users.length; i++) {

        if (email == users[i].email && pwd == users[i].pwd) {
            result = users[i];
            break;
        }
    }


    res.status(200).json({
        result: result,

    })
})
// business logic to post login
router.post("/login", (req, res) => {

    console.log('Here into login', req.body);
    User.findOne({eamil : req.body.email}).then(
        (emailresult) => {
            console.log(' finded user by email', emailresult);
            if (!emailResult) {
                res.status.json({
                    message: '0'
                });
            }
        }
           
            return bcrypt.compare(req.body.pwd , emailResult.password);
        
           
           ).then(
               (pwdResult)=>
           )


res.status(200).json({
    result: result,

})


// bus to signup
router.post("/signup", (req, res) => {

    console.log('Here player values', req.body);
    const userObj = new User({
        attribModelDB: valueFormAttribute,
        fName: req.body.fName,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        role:req.body.role,
    });
    userObj.save((err, result) => {
        if (err) {
            console.log('here error into save', err);
        } else {

            res.status(200).json({
                message: "added succes"

            });
        }
        users.push(req.body)


    })
})



module.exports=router;