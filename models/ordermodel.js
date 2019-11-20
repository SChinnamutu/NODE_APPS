const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    //user:{type: Object, ref:"User", required:true},
    _id: mongoose.Schema.Types.ObjectId,
    cart:{type: String, required: true },
    address: {type:String, required:true},
    name:{type: String, required:true},
    paymentId: {type: String, required: true}
});

module.exports = mongoose.model('Order', orderSchema);
