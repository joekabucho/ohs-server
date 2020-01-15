const User = require('../users/users.model.js');
 

module.exports = function(app, io){

    User.find({})
        .then((data)=>{ io.emit('/listUsers', data)})
        .catch((err)=>{ console.log('Could Not emit Users')  });
}

