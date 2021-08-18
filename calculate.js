  
const express = require("express");
const bodyParser= require("body-parser")


const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function(req, res){

    var weight= Number(req.body.weight);
    var height = Number(req.body.height);

 

    var bmi = weight / Math.pow(height/100, 2);
    if(bmi<18.5)
    {
        BMI_Category = "Under Weight";
        Health_risk  = "Malnutrition risk";
    }
    else if (bmi>=18.5 && bmi<=24.9)
    {
        BMI_Category = "Normal Weight";
        Health_risk  = "Low risk";
    }

    else if (bmi>25 &&  bmi<=29.9)
    {
        BMI_Category = "over Weight";
        Health_risk  = "Enhanced risk";
    }
    else if (bmi>30 &&  bmi<=34.9)
    {
        BMI_Category = "Moderately obese";
        Health_risk  = "Medium risk";
    }
    else if (bmi>35 &&  bmi<=39.9)
    {
        BMI_Category = "Severely obese";
        Health_risk  = "High risk";
    }
    else
    {
        BMI_Category = "Very severely obese";
        Health_risk  = "Very high risk";
    }
    res.send("Bmi: " + bmi + " | BMI Category: " + BMI_Category + " | Health_risk: " + Health_risk);
   
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});
