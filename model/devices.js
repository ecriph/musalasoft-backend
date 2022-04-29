const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DevicesSchema = new Schema({

    uid:{

        type: Number,
        required:[true, 'UID number is required']

    },

    vendor:{
        type: String,

    },
     
    dateCreated:{
        type: String,

    },

      
    gatewayID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'gateway',
    },

    status:{
        type: String,
    }

});

const Devices = mongoose.model('device', DevicesSchema);

module.exports = Devices;