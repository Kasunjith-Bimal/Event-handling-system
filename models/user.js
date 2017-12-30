const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
let emailLengthChecker = (email) => {
    if (!email) {
        return false;
    } else {
      if(email.length < 5 || email.length > 50){
          return false;
      }
      else{
          return true;
      }
    }

}

let passwordLengthChecker = (password) => {
    if (!password) {
        return false;
    } else {
      if(password.length < 8 || password.length > 20){
          return false;
      }
      else{
          return true;
      }
    }

}

let telephoneLengthChecker = (telephone) => {
    if (!telephone) {
        return false;
    } else {
      if(telephone.length == 10){
          return true;
      }
      else{
          return false;
      }
    }

}

let validateEmailChecker = (email) => {
    if (!email) {
        return false;
    } else {
      const regExp = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      return regExp.test(email);

    }

}


let validatePasswordlChecker = (password) => {
    if (!password) {
        return false;
    } else {
      const regExp = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/);
      return regExp.test(password);

    }

}
const emailValidators =[{
 validator:emailLengthChecker,
 message : 'Email must be at least 8 characters but no more tan 30'

},{
    validator:validateEmailChecker,
    message : 'Must be a valid email'

}]

const passwordValidators =[{
    validator:passwordLengthChecker,
    message : 'password must be at least 8 characters but no more tan 20'
   
   },{
       validator:validatePasswordlChecker,
       message : 'Must have at lease one uppercase,lowercase,special character and number'
   
   }]

const telephoneValidators =[{
    validator:telephoneLengthChecker,
    message : 'Telephone number must be 10 characters'
   
   }]

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true, validate: emailValidators},
    username: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true ,validate:passwordValidators},
    address: { type: String, required: true },
    telephone: { type: String, required: true,validate:telephoneValidators },
});

userSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    } else {
        bcrypt.hash(this.password, null, null, (err, hash) => {
            if (err) {
                return next();
            } else {
                this.password = hash;
                next();
            }

        });
    }

});

userSchema.methods.compairePassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', userSchema);