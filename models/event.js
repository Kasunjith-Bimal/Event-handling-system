const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


let titleLengthChecker = (eventName) => {
    if (!eventName) {
        return false;
    } else {
        if (eventName.length < 5 || eventName.length > 50) {
            return false;
        }
        else {
            return true;
        }
    }

}
let shortDescriptionLengthChecker = (eventShortDescription) => {
    if (!eventShortDescription) {
        return false;
    } else {
        if (eventShortDescription.length < 5 || eventShortDescription.length > 200) {
            return false;
        }
        else {
            return true;
        }
    }

}

let LongDescriptionLengthChecker = (eventLongDescription) => {
    if (!eventLongDescription) {
        return false;
    } else {
        if (eventLongDescription.length < 5 || eventLongDescription.length > 1000) {
            return false;
        }
        else {
            return true;
        }
    }

}
// let passwordLengthChecker = (password) => {
//     if (!password) {
//         return false;
//     } else {
//         if (password.length < 8 || password.length > 20) {
//             return false;
//         }
//         else {
//             return true;
//         }
//     }

// }

let CommentLengthChecker = (comment) => {
    if (!comment[0]) {
        return false;
    } else {
        if (comment[0].length < 2 || comment[0].length > 200 ){
            return true;
        }
        else {
            return false;
        }
    }

}

// let alphaNumearicChecker = (eventName) => {
//     if (!eventName) {
//         return false;
//     } else {
//         const regExp = new RegExp(/^ [a-zA-Z0-9 ]+$/);
//         return regExp.test(eventName);

//     }

// }


// let validatePasswordlChecker = (password) => {
//     if (!password) {
//         return false;
//     } else {
//         const regExp = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/);
//         return regExp.test(password);

//     }

// }
const eventNameValidators = [{
    validator: titleLengthChecker,
    message: 'Event Name  must be at least 8 characters but no more tan 5 0'

}]
const commentValidators = [{
    validator: CommentLengthChecker,
    message: 'Event Name  must be at least 2 characters but no more tan 200'

}]
const eventShortDescriptionValidators = [{
    validator: shortDescriptionLengthChecker,
    message: 'Event Name  must be at least 8 characters but no more tan 200'

}]
const eventLongDescriptionValidators = [{
    validator: LongDescriptionLengthChecker,
    message: 'Event Name  must be at least 8 characters but no more tan 1000'

}]
// const passwordValidators = [{
//     validator: passwordLengthChecker,
//     message: 'password must be at least 8 characters but no more tan 20'

// }, {
//     validator: validatePasswordlChecker,
//     message: 'Must have at lease one uppercase,lowercase,special character and number'

// }]



const eventSchema = new Schema({
    eventName: { type: String, required: true, unique: true, lowercase: true, validate: eventNameValidators },
    eventShortDescription: { type: String, required: true, validate: eventShortDescriptionValidators },
    eventLongDescription: { type: String, required: true, validate: eventLongDescriptionValidators },
    eventDate: { type: String, required: true },
    eventTime: { type: String, required: true },
    eventCreatedBy: { type: String },
    eventCreatedAt: { type: Date, default: Date.now() },
    eventImageLink: { type: String },
    eventLikes: { type: Number, default: 0 },
    eventLikedBy: { type: Array },
    eventDisLikes: { type: Number, default: 0 },
    eventDisLikedBy: { type: Array },
    comments: [{
        comment: { type: String,validate:commentValidators },
        commenttator: { type: String }
    }]
});

// userSchema.pre('save', function (next) {
//     if (!this.isModified('password')) {
//         return next();
//     } else {
//         bcrypt.hash(this.password, null, null, (err, hash) => {
//             if (err) {
//                 return next();
//             } else {
//                 this.password = hash;
//                 next();
//             }

//         });
//     }

// });

// userSchema.methods.compairePassword = function(password){
//     return bcrypt.compareSync(password, this.password);
// }

module.exports = mongoose.model('Event', eventSchema);