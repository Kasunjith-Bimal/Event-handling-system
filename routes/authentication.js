const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
module.exports = (router) => {

    router.post('/user', (req, res) => {
        console.log("kasun")
        console.log(req.body);

        if (!req.body.email) {
            res.json({ success: false, message: 'You must provide email' });
        } else {
            if (!req.body.username) {
                res.json({ success: false, message: 'You must provide username' });
            } else {
                if (!req.body.password) {
                    res.json({ success: false, message: 'You must provide password' });
                } else {
                    if (!req.body.address) {
                        res.json({ success: false, message: 'You must provide address' });
                    }
                    else {
                        if (!req.body.address) {
                            res.json({ success: false, message: 'You must provide telephone number' });
                        }
                        else {
                            let user = new User({
                                email: req.body.email,
                                username: req.body.username,
                                password: req.body.password,
                                address: req.body.address,
                                telephone: req.body.telephone,
                            });

                            user.save((err) => {

                                if (err) {
                                    console.log(err);
                                    if (err.code === 11000) {
                                        res.json({ success: false, message: 'username or email already exists' });

                                    } else {
                                        if (err.errors) {
                                            if (err.errors.email) {
                                                res.json({ success: false, message: err.errors.email.message });

                                            } else {

                                                if (err.errors.password) {
                                                    res.json({ success: false, message: err.errors.password.message });
                                                } else {
                                                    if (err.errors.telephone) {
                                                        res.json({ success: false, message: err.errors.telephone.message });
                                                    } else {
                                                        res.json({ success: false, message: 'could not save user', err });
                                                    }
                                                }

                                            }
                                        } else {
                                            res.json({ success: false, message: 'could not save user', err });
                                        }
                                    }

                                } else {

                                    res.json({ success: true, message: 'Account Register' });
                                }

                            });
                        }
                    }
                }
            }
        }

    });
    router.post('/login', (req, res) =>{
      if(!req.body.username){
        res.json({success:false,message:"User was not provided user name"});
      }else{
        if(!req.body.password){
            res.json({success:false,message:"User was not provided password"});
        }else{

            User.findOne({username:req.body.username},(err,user)=>{

                if(err){
                    res.json({success:false,message:err});
                }else{
                if(!user){
                    res.json({success:false,message:"user name not found"});
                }else{
                    const validPassword = user.compairePassword(req.body.password);
                    if(!validPassword){
                        res.json({success:false,message:"Password is invalid!"});
                    }else{
                        const token =jwt.sign({userId:user._id},config.secret,{expiresIn:'24h'});
                        res.json({success:true,message:"Success!",token:token,user:{username : user.username}});
                    }
                }
                }


            });
        }
       
      }



    });
    return router;
}

