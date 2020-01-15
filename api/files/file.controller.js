
const fs = require('fs');
const readline = require('readline');
const fileUpload = require('express-fileupload');
var nodemailer = require('nodemailer');
const Templates = require('./files.model');
const Config = require('../../config/dev');

exports.upload = (req, res)=>{
    
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
      }
     let sampleFile = req.files.sampleFile;
    
    sampleFile.mv('./files/'+sampleFile.name, function(err) {
      if (err) 
        return res.status(500).send(err);
       
      const details ={
        name: sampleFile.name,
        url : Config.Address + '/'+sampleFile.name,
        user : req.body.user,
        uploadedby : req.body.uploadedby,
        amount: req.body.amount,
        filename: req.body.namefile,
        date: new Date()
      }
      let template = new Templates(details);
      template.save();
      res.status(200).json('File uploaded!');

    });
}

exports.view = (req, res) =>{
    fs.readdir('./files/', function(err, items) {
        res.send(items);
      })
}

exports.getUsers = (req, res)=>{
  Templates.find({user: req.body.userid}, function(err,result){
    if(err){
      res.status(500).json("An Error Occcured")
    }
    res.status(200).json(result)
  })
}

exports.getAll = (req,res) =>{
  Templates.find().exec(function(err, result){
    if(err){
      res.status(500).json("An Error Occured")
    }
    res.status(200).json(result)
  })
}

exports.test = (req, res) =>{
  console.log("Called");
}