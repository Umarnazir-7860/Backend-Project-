const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

router.get('/', (req, res) => {
    res.send('Owner Router Working');
});

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV === 'development'){
router.post('/create', async(req,res)=>{
     let owners = await ownerModel.find();
     if(owners.length > 0){
        return res.send(503).send('You Dont have permission to create more owners');
     }
    let {fullname,email,password} = req.body;
    let createdOwner= await ownerModel.create({
    fullname:fullname,
    email:email,
    password:password,
    gstin:gstin

    })
    res.send('Owner Created');
})
}

module.exports = router;