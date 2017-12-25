const User = require('../models/user');

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

    })


    router.get('/user', (req, res) => {

        res.send('Api is Working Get ');

    })
    return router;
}

