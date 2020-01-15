const Cart = require('./cart.model');
const Paid = require('./paid.model');
const config = require('../../config/dev');
const options = {
    apiKey: config.apiKey,// use your sandbox app API key for development in the test environment
    username: config.userName,      // use 'sandbox' for development in the test environment
};
const AfricasTalking = require('africastalking')(options);

exports.getAll = (req, res) =>{
    Cart.find().exec(function(err, result){
        if(err){
            res.status(500).json("An Error Occured")
        }
        res.status(200).json(result);
    })
}

exports.getAUsers = (req, res) => {
    Cart.find({user: req.body.userid}, function(err, result){
        if(err){
            res.status(500).json("An Error Occcured")
        }
        res.status(200).json(result);
    })
}

exports.add = (req, res) =>{
    const cart ={
        user: req.body.user,
        items: req.body.items,
        status: req.body.status,
        amount: req.body.amount
    }
    let newCart = new Cart(cart);
    newCart.save().then(function(result, err){
        if(err){
            res.status(500).json("An error occured");
        }
        res.status(200).json(result);
    })
}

exports.addItem = (req, res) =>{

    Cart.findById(req.body._id, function(err, result){
        if(err){
            res.status(500).json("An error occured");
        }
        if(result.length < 1){
            res.status(404).json("Not found");
        }

        result.items =  req.body.items,
        result.user = req.body.user,
        result.status =  req.body.status,
        result.amount = req.body.amount

        result.save(function(err, saved){
            if(err){
                res.status(500).json("An Error Occured")
            }
            res.status(200).json(saved);
        })
    })
}

exports.deleteItem =(req, res) => {
    Cart.findById(req.params.id, function(err, result){
       
        if(err){
            res.status(500).json("An error occured")
        }
        if(result){
           Cart.deleteOne({_id: result._id}, function(err, result){
             
               if(err){
                   res.status(500).json("An error occured")
               }
               res.status(200).json(result)
           })
        }
    })
}

exports.checkout = (req, res) =>{
    const cartid = req.body._id;
    Cart.findById(req.body._id, async function(err, result){
         
        if(err){
            res.status(500).json('An error occured')
        }
        if(result.length <1){
            res.status(404).json("Cart item not found")
        }
        service = AfricasTalking.PAYMENTS;

        const options ={

            productName: config.ATaccount,
            providerChannel: '525900',
            currencyCode: 'KES',
            phoneNumber: req.body.phone,
            amount:Number(req.body.amount),
            metadata: {}
        }
        console.log(options);

        service.mobileCheckout(options).then(response =>{
             console.log("response");
            console.log(response)
             const paid ={
                user: result.user,
                items: result.items,
                status: result.status,
                amount: result.amount,
                date: new Date(),
                transactionId: response.transactionId
             }
             let savePayment = new Paid(paid);
             savePayment.save().then(async function(result, err){
                 if(err){
                     res.status(500).json("An Error Occured")
                 }if(result){
                 await Cart.deleteOne({_id: cartid});
                 res.status(200).json(result);
                 }
             });
        }).catch(error=>{
            res.status(500).json("An error occured");
        });
            
    })
}

exports.getPayments = (req, res)=>{
    Paid.find().exec(function(err,result){
        if(err){
            res.status(500).json("An Error Occured")
        }
        res.status(200).json(result);
    })
}

exports.getUsersPayments = (req, res)=>{
    Paid.find({user: req.body.user},function(err,result){
        if(err){
            res.status(500).json("An Error Occured")
        }
        res.status(200).json(result);
    })
}