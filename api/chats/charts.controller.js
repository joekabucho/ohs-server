var Pusher = require('pusher');

var pusher = new Pusher({

  appId: '922730',
  key: '540b04d4eec26aee761c',
  secret: '20d9d9ec13d0eb973e64',
  cluster: 'ap2',
  encrypted: true

});

exports.send = (req, res)=>{
    const channel = req.body.receiver_id;
     pusher.trigger(channel, 'my-event', {
        "message": req.body.message
      });
      res.status(200).json("Message was sent");
}