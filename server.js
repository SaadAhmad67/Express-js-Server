const express = require("express");
const cors = require("cors");
const port = 4000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", function(req, res, next){
    console.log("URL:", req.url);
    next();
});

    //In express terminologey the callback function is called middlewares

// app.get("/", function(req, res, next){
//     console.log("I am inside initial get");
//     next();
// });

app.get("/", function(req, res, next){
    res.status(200).send("<h1>Welcome to Express js!</h1>");
});

app.get("/users", function(req, res, next){
    res.status(200).send("<h1>Registration</h1><form action='/users' method='POST'><input type='text' name='fullName' placeholder='Enter full Name'><button>Submit</button>");
});

app.post("/users", function(req, res, next){
    console.log(req.body);
    const {fullName} = req.body;
    res.status(200).send(`<h1>Welcome ${fullName} to express.It is Awesome</h1>`);
});

app.use(function(req, res){
    res.status(404).send("<h1>Error 404, Page Not Found</h1>");
})

app.listen(port, function(){
    console.log(`✅ Server is running on port:${port}`);
});




