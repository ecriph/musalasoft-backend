const express = require('express');
const router = express.Router();
const Gateway = require('../model/gateway');
const Devices= require('../model/devices');

///////////////////////////////////////Gateway////////////////////////////////////////////////////

//get all registered gateways
router.get('/gateways', (req,res,next)=>{

    Gateway.find().then((data)=>{

        res.send(data)

    }).catch(next);
    
});


//register new gateway to db
router.post('/gateways', (req,res,next)=>{

    Gateway.create(req.body).then((data)=>{
        
        res.send(data);

    }).catch(next);
    

});



//delete new gateway to db
router.delete('/gateways/:id', (req,res,next)=>{

    Gateway.findByIdAndRemove({_id:req.params.id}).then((data)=>{
        
        res.send(data);

    }).catch(next);
    

});


//update new gateway to db
router.put('/gateways/:id', (req,res,next)=>{

    Gateway.findByIdAndUpdate({_id:req.params.id}, req.body).then(()=>{
        Gateway.findOne({_id:req.params.id}).then((data)=>{
            res.send(data);

        })

    }).catch(next);
    

});


///////////////////////////////////////////Devices////////////////////////////////////////////////

//get all devices per gateway

router.get('/devices', (req,res,next)=>{
    
    Devices.find({gatewayID:req.query.id}).then((data)=>{

        res.status(200).json({
            count:data.length,
            info:data});

    }).catch(next);


});


//Add a new device to gateway

router.post('/devices', (req,res,next)=>{
 
    Devices.create(req.body).then((data)=>{

        res.send(data);

    }).catch(next);
   

});

//delete devices 
router.delete('/devices', (req,res,next)=>{

    Devices.deleteOne({_id:req.query.id}).then((data)=>{
        
        
        res.send(data);


    }).catch(next);

});

const getDevices = ()=>{

    
}


router.get('/joincollection',(req,res,next)=>{

    Devices.find()
    .populate('gatewayID')
    .then((data)=>{

        res.send(data);

    }).catch(next);

    // Gateway.find()
    // .then(data=>{
        
    //     res.status(200).json({
    //         count:data.length,
    //         Gateway: data.map(info => {
    //             return{ 
                    
    //                 id : info._id,
    //                 name: info.name,
    //                 serial: info.serialNumber,
    //                 devices: Devices.find({gatewayID:info._id}).then((datas)=>{

    //                     res.status(200).json({
    //                         device: datas.map(dinfo=>{
    //                             return{

    //                                 uid: dinfo.uid,
    //                                 vendor: dinfo.vendor,
    //                                 status: dinfo.status
    //                             }
    //                         })
    //                     })
    //                 })
    //             };
    //     })
    // });
        
    // }).catch(next);
   


});


module.exports = router;