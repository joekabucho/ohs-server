const userService = require('../services/user.service');
const mailService = require("../services/mail.service");
const emailExistence = require('email-existence');
const User = require('./users.model');
//const nodemailer = require('nodemailer');


exports.login = (req, res, next) => {

    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(401).json({ message: 'Email or password is incorrect' }))
        .catch(err => next(err));
 
};

exports.emailVerify = (req,res, next)=>{
    emailExistence.check(req.body.email, function(err, exists){
        
        if(err){
            res.status(500).json("An Error Occured");
        }
        if(!exists){
            res.status(404).json("Email does not exist");
        }
        if(exists){
            User.find({email: req.body.email}, function(err, user){
            if(err){
                res.status(500).json("An error occured")
            }
            if(user.length>0){
                res.status(301).json("The user already exists, please ask for an account password reset code instead.");
            }
            else{
            const code = (Math.random(7)*1000000).toFixed(0);

            var user = new User({
                email: req.body.email,
                reset_code: code,  
            });
            user.save(function(err, result) {
        
                    if(err) {
                        return res.status(500).json(err);
                    }
                     
                    mailService.emailVerification(user).catch(e=>{
                        console.log("THis error occured: "+e)
                    });
                    res.status(200).json("A verification email has been sent to your email");
                });
            }
        });
    } 
});

};


  exports.create = (req, res, next) => {
    emailExistence.check(req.body.email, function(err, exists){
        console.log(exists);
        if(err){
            res.status(500).json("An Error Occured");
        }
        if(!exists){
            res.status(404).json("Email does not exist");
        }
        if(exists){
         User.findOne({email: req.body.email}, function(err, user){
             if(err){
                 res.status(500).json("An error occured during registration");
        }
        if(user.reset_code === req.body.code){
             
            user.role = req.body.role,
            user.department = req.body.department,
            user.name = req.body.name,
            user.password = req.body.password,
            user.reset_code = null;

            user.save().then(function(result, err){
                
                if(err){
                    res.status(500).json("An error occured");
                }
                res.status(200).json(result);
            })
        }
        else{
            res.status(500).json("The account verification code did not match")
            //user.delete();
        }
    })
    }
   })
  };

  exports.getAll = (req, res, next) => {
      userService.getAll()
          .then(users => { res.json(users); })
          .catch(err => next(err));
  };

  exports.getOne = (req, res, next) => {
      userService.getOne(req.params.id)
          .then(user => user ? res.json(user) : res.sendStatus(404))
          .catch(err => next(err));
  };

  exports.update = (req, res, next) => {
      userService.update(req.params.id, req.body)
          .then((user)=> res.json(user))
          .catch(err => next(err));
  };

  exports.delete = (req, res, next) => {
      userService.delete(req.params.id)
          .then(()=> res.json({}))
          .catch(err => next(err));
  };

  exports.invite = (req, res, next) => {
    mailService.inviteUser(req.body)
        .then(e =>res.json({}))
        .catch(err => res.sendStatus(401));
    };
