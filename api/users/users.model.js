const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const User = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String },
    email:{ type: String },
    role: { type: String },
    department: { type: String },
    reset_code: {type: Number},
    password: {  type: String}
});
User.pre('save', function (next) {
    if(this.password) {
        if(this.isModified('password') || this.isNew) {
             
                this.hash(this.password, (hashErr, hash) => {
                    if(hashErr) {
                        return next(hashErr);
                    }
                    this.password = hash;
                    return next();
                });
            
        }
        else {
            return next();
        }
    }
    else {
        return next();
    }
});

User.methods = {
    hash(password, callback){
        return bcrypt.hash(password,null, null, function(err, hash){
            if(err) {
                return callback(err);
            }
            else {
                
                return callback(null, hash)
            }
        });
},
authenticate(password, callback){
    bcrypt.compare(password, this.password, function(err, result) {
        if(err) {
            return callback(err);
        }
        console.log(result);
        callback(null, result);
    });
}
};

module.exports = mongoose.model('User', User);
