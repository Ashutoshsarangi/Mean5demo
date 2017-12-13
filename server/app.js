var express = require('express');
var multer=require('multer');
var http = require('http');
var fs = require('fs');
var uploading = multer({
  dest: __dirname + '/../public/uploads/',
  limits: {fileSize: 10000000, files:10},
});
var path=require("path");
var router = express.Router();
const keyPublishable ="pk_test_8Eg6YWHXZ262TKe8GqDaL0M4";
const keySecret = "sk_test_9kDmLROb9YjpmUP4C60E0ntf";
const stripe = require("stripe")(keySecret);
router.get('/getData', function (req, res, next) {
    data=[
        {
            name:"Ashutosh",
            address:"Mumbai Andheri East",
            grade:"C",
            gender:"male",
            egg: true,
             ckn: true
        },
        {
            name:"Anshuman",
            address:"Odisha Berhampur",
            grade:"B",
            gender:"female",
           ckn: true
        }
    ];
        console.log("get Method");
    res.send(data);
});
router.post('/save', function (req, res) {
    console.log(req.body);
    console.log("Post Data Save Method");
    res.send({message:"post Data"});
});
router.patch('/update', function (req, res) {
    console.log(req.body);
    console.log("Update Data");
    res.send({message:"Update Data"});
});
router.delete('/delete/:id', function (req, res) {
    console.log(req.params);
    console.log("delete Data");
    res.send({message:"delete Data"});
});
//Paymentgate way Code starts
router.post("/charge", (req, res) => {
    console.log("INside post of payment gateway");
    let amount = 500;
  console.log(stripe);
    stripe.customers.create({
       email: "aubrey.anderson.21@example.com",
      source: "tok_1BT5JhBYTPfFO60dskYbbKOZ"
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: "Sample Charge",
           currency: "usd",
           customer: customer.id
      }))
    .then(charge => res.send("You successfully paid 500 "));
  });
  //refere https://stripe.com/docs for generate token there should be something from angular side.
//Paymentgate Way code ends

//----------------- FIle Upload starts ..............
router.post('/fileUpload',uploading.any(),function(req,res){
    console.log("HEllo inside file upload");
    //console.log(req);
    console.log(req.body);
    console.log(req.files);
    //var attachedfiles  = JSON.stringify(req.files);
    //console.log(attachedfiles);
});

//--------------------File Upload ends.........

router.get('/getFile', function (req, res, next) {
    data=[ 
    { fieldname: 'file1',
    originalname: '0A95F641-CA48-4AB4-9297-B96529DB35DA.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: '/Users/webwerks/Desktop/Ashutosh/server/../public/uploads/',
    filename: 'a9bd2443614c5a10e8d6f83e5220dca3',
    path: '/Users/webwerks/Desktop/Ashutosh/public/uploads/a9bd2443614c5a10e8d6f83e5220dca3',
    size: 375035 },
  { fieldname: 'file2',
    originalname: '2B9B8578-6A38-47CD-BC5E-BD0EC420F7A5.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: '/Users/webwerks/Desktop/Ashutosh/server/../public/uploads/',
    filename: 'b03b5d3401158c14daa6652374e603f2',
    path: '/Users/webwerks/Desktop/Ashutosh/public/uploads/b03b5d3401158c14daa6652374e603f2',
    size: 353175 },
  { fieldname: 'file3',
    originalname: '300AB1D3-E6CA-461B-BE49-2C01ECA995C5.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: '/Users/webwerks/Desktop/Ashutosh/server/../public/uploads/',
    filename: 'fa4a24d24f96295d8323f785edde06d7',
    path: '/Users/webwerks/Desktop/Ashutosh/public/uploads/fa4a24d24f96295d8323f785edde06d7',
    size: 384062 },
    { fieldname: 'file1',
    originalname: '2B9B8578-6A38-47CD-BC5E-BD0EC420F7A5.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: '/Users/webwerks/Desktop/Ashutosh/server/../public/uploads/',
    filename: '739ec91cd4f0787186f3653a8036f0f3',
    path: '/Users/webwerks/Desktop/Ashutosh/public/uploads/739ec91cd4f0787186f3653a8036f0f3',
    size: 353175 }
  ];
    console.log("get downlodable file Method");
    res.send(data);
});
router.post("/postfileDownload",function(req,res){
    console.log("Inside download")
    console.log(req.body);
    //res.send("Done");
    res.download(req.body.name);
})
module.exports = router;