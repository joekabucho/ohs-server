const nodemailer = require('nodemailer');
 
 function sendMailToClient(reqParam){
    return new Promise((resolve, reject)=>{

        let options = {
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: 'joekabucho2@gmail.com',
                pass: 'joeedu@12345' 
            }
        }

        let transporter = nodemailer.createTransport((options));
    
        let email = {
            from: reqParam.sender, 
            to: reqParam.reciever,  
            subject: reqParam.subject,  
            text: reqParam.message
        };
    
        transporter.sendMail(email, function (err, data) {
            !err ? resolve() : reject('Something went wrong');
         });
    
    });
}


function inviteUser(reqParam){
    return new Promise((resolve, reject)=>{

        let options = {
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: 'joekabucho2@gmail.com',
                pass: 'joeedu@12345' 
            }
        }

        let transporter = nodemailer.createTransport((options));
    
        let email = {
            from: reqParam.sender, 
            to: reqParam.reciever,  
            subject: "Invitation To OHS web app",  
            text: 'Hello',
            html: 'You have been invited to OHS webapp. Please click on the link below to register:<br><br> <button style="margin-left:70px;border:none;padding:7px;border-radius:5px;background-color:teal;color:white;"><a style="color:white;font-size:14px;font-family:verdana" href="http://localhost/register/' + reqParam.reciever + '/' + reqParam.token + '">Invitation</a></button>'
        };
    
        transporter.sendMail(email, function (err, data) {
            !err ? resolve() : reject('Something went wrong');
         });
    

    });
}

function emailVerification(reqParam){
    return new Promise((resolve, reject)=>{

        let options = {
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: 'joekabucho2@gmail.com',
                pass: 'joeedu@12345' 
            }
        }

        let transporter = nodemailer.createTransport((options));
    
        let email = {
            from: 'joekabucho2@gmail.com', 
            to: reqParam.email,  
            subject: "Verification Code",  
            text: 'Hello',
            html: `
            <div style="border: 1px solid #ededed; border-radius: 4px; background-color: #ffffff; padding: 20px;">
               <div style="background-color: #e0e0e0; text-align:center;">
                    
               </div>
               <h2 style="text-transform: uppercase;"><strong>Use this code to finish your account set up! </strong></h2>
               <hr>
               <h2> ${reqParam.reset_code}</h2>
               <hr>
              <p>Thank you for partnering up with OHS web app, we are happy to have you aboard with us.</p>
           </div>
           <div style="text-align:center">
   
   <p> &copy; 2019 <a href="google.com">OHS</a> </p>
   <p> For Inquiries:</pdsf>
   <p> Phone: +254 720 161 034 | Email : info@ohs.com </p>
</div>
       </div>
   </div>
           <br>
   `
   
        };
    
        transporter.sendMail(email, function (err, data) {
            !err ? resolve() : reject(err);
         });
    

    });
}

function passwordResetCode(reqParam){
    return new Promise((resolve, reject)=>{

        let options = {
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: 'joekabucho2@gmail.com',
                pass: 'joeedu@12345' 
            }
        }

        let transporter = nodemailer.createTransport((options));
    
        let email = {
            from: 'joekabucho2@gmail.com', 
            to: reqParam.email,  
            subject: "Reset Code",  
            text: 'Hello',
            html: `
            <div style="border: 1px solid #ededed; border-radius: 4px; background-color: #ffffff; padding: 20px;">
               <div style="background-color: #e0e0e0; text-align:center;">
                    
               </div>
               <h2 style="text-transform: uppercase;"><strong>Use this code to reset your account password! </strong></h2>
               <hr>
               <h2> ${reqParam.reset_code}</h2>
               <hr>
              <p>Thank you for partnering up with OHS, we are happy to have you aboard with us.</p>
           </div>
           <div style="text-align:center">
   
            <p> &copy; 2019 <a href="google.com">OHS</a> </p>
            <p> For Inquiries:</p>
            <p> Phone: +254 720 161 034 | Email : info@OHS.com </p>
            </div>
                </div>
            </div>
        <br>
         `
        };
    
        transporter.sendMail(email, function (err, data) {
            !err ? resolve() : reject(err);
         });
    

    });
}

 module.exports = { sendMailToClient, inviteUser, emailVerification,passwordResetCode }
