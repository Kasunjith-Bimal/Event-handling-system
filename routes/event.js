const User = require('../models/user');
const Event = require('../models/event');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = (router) => {

    router.post('/newEvent', (req, res) => {
        if (!req.body.eventName) {
            res.json({ success: false, message: 'Event name is required.' });
        } else {
            if (!req.body.eventShortDescription) {
                res.json({ success: false, message: 'Event Short Description is required.' });
            } else {
                if (!req.body.eventLongDescription) {
                    res.json({ success: false, message: 'Event Long Description is required.' });
                } else {
                    if (!req.body.eventDate) {
                        res.json({ success: false, message: 'Event Date is required.' });
                    } else {
                        if (!req.body.eventTime) {
                            res.json({ success: false, message: 'Event Time is required.' });
                        } else {
                            const event = new Event({
                                eventName: req.body.eventName,
                                eventShortDescription: req.body.eventShortDescription,
                                eventLongDescription: req.body.eventLongDescription,
                                eventDate: req.body.eventDate,
                                eventTime: req.body.eventTime,
                                eventCreatedBy: req.body.eventCreatedBy

                            });
                            event.save((err) => {
                                if (err) {
                                    if (err.errors) {
                                        if (err.errors.eventName) {
                                            res.json({ success: false, message: err.errors.eventName.message });
                                        } else {
                                            if (err.errors.eventShortDescription) {
                                                res.json({ success: false, message: err.errors.eventShortDescription.message });
                                            } else {
                                                if (err.errors.eventLongDescription) {
                                                    res.json({ success: false, message: err.errors.eventLongDescription.message });
                                                } else {
                                                    if (err.errors.eventDate) {
                                                        res.json({ success: false, message: err.errors.eventDate.message });
                                                    } else {
                                                        if (err.errors.eventTime) {
                                                            res.json({ success: false, message: err.errors.eventTime.message });
                                                        } else {
                                                            res.json({ success: false, message: err });
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }

                                } else {
                                    res.json({ success: true, message: 'Event is Created' });
                                }
                            });
                        }
                    }
                }
            }
        }
    });


    router.get('/allEvents', (req, res) => {
        Event.find({}, (err, events) => {
            if (err) {
                res.json({ success: false, message: err });
            }else{
                if(!events){
                    res.json({ success: false, message: "No Event Found" });
                }else{
                    res.json({ success: true, events: events });
                }
            }

        }).sort({'_id':-1});

    });
    router.get('/singleEvent/:id', (req, res) => {

        if(!req.params.id){
            res.json({ success: false, message: "No Event ID Provide" })
        }else{
            Event.findOne({_id:req.params.id}, (err, events) => {
                if (err) {
                    res.json({ success: false, message: err });
                }else{
                    if(!events){
                        res.json({ success: false, message: "No Event Found" });
                    }else{
                        res.json({ success: true, events: events });
                    }
                }
    
            })
        }
        

    });

    return router;
};