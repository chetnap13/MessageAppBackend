const mongoose = require('mongoose');

const User = require('../models/user.model');

module.exports.register = async (req, res) => {
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(req.body.fullName.length < 3)
    {
        res.status(400).send({
            message:'Invalid Full Name'
        })
    }
    
    if(!emailRegexp.test(req.body.email))
    {
        res.status(400).send({
            message:'Invalid Email Address'
        })
    }
    else{
        var user = new User();
        user.fullName = req.body.fullName;
        user.email = req.body.email;
        user.message = req.body.message;
        var data = await user.save();
        res.send(data);
    }        
    



}