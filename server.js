const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res)

{
res.sendFile("D:/_MY DESKTOP/Calculator/index.html");
}

);

app.post("/",function(req,res)
{
console.log(req.body);
var n1=Number(req.body.num1[0]);
var n2=Number(req.body.num1[1]);
var n3=n1+n2;

res.send("Answer is "+n3.toString())


}
);


app.listen(3000, function(){

console.log("Server has started on port 3000");

});


