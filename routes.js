var express =  require("express");
var router = express.Router();
var http=require("http");

router.get("/", function(req,res){
    console.log("Hello I am on the basics1");
    res.render("about");
});
router.get("/Products", function(req,res){
    console.log("Hello I am on the basics");
    //json
    var options =
    { "method":"GET",
      "host":"newdbapp-01-cloud-atlas.inmbzp8022.in.dst.ibm.com",
      "path":"/api/TestDb/AllStyles",
      "headers": {"Cache-Control": "no-cache",}
    };
    var x = http.request(options,function(res1)
    {
        
    
        var chunks = [];
        res1.on("data", function (chunk) {
            chunks.push(chunk);
        });
        res1.on("end", function () {
            var body = Buffer.concat(chunks);
            var data = JSON.parse(body);
            console.log(data);
            //res.send(data);
            //return fnc(data);
            res.render("product",{ data:data});
        });

    });
    x.end();
   // res.send("index1");
});
module.exports = router;