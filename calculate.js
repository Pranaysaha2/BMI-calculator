  
const express = require("express");
const bodyParser= require("body-parser")


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function(req, res){

    var weight= Number(req.body.weight);
    var height = Number(req.body.height);

   // let myJson = req.body;      // your JSON
    //let myValue = req.body.myKey;	// a value from your JSON
	//response.send(myJson);	

    var bmi = weight / Math.pow(height/100, 2);
    if(bmi<18.5)
    {
    index = "Under Weight";
    }
    else if (bmi>=18.5 && bmi<=24.9)
    {
    index = "Normal Weight";
    }

    else if (bmi>24.9 &&  bmi<=29.9)
    {
        index = "over Weight";
    }
    else
    {
     index = "obesity";
    }
    res.send("Bmi: " + bmi + " | BMI Category: " + index);
    //res.send("BMI Category: " + index);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});
