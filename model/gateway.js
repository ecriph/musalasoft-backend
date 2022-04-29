const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GatewaySchema = new Schema({

    serialNumber:{

        type: String,
        required:[true, 'Serial number is required']

    },

    name:{
        type: String,

    },
     
    ipAdress:{
        type: String,

    }
    

    // deviceNum:{

    //     type: Number,
    //     default:0

    // }

});

const Gateway = mongoose.model('gateway', GatewaySchema);

module.exports = Gateway;