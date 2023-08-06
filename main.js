const isaknderServer = require("express");
const emna = isaknderServer();
const bodyParser = require('body-parser'); 

emna.use(bodyParser.urlencoded({ extended: true }));
emna.use(bodyParser.json());

emna.get("/getData",function(request, response){
    response.send("hello Iskander 🚀")
})

 users = [ // data base 
    {
        login: "saged@gmail.com",
        password: "saged#test"
    },
    {
        login: "khadija@gmail.com",
        password: "khadija#test"
    },
    {
        login: "yassin@gmail.com",
        password: "yassin#test"
    },
    {
        login: "tajjo@gmail.com",
        password: "tajjo#test"
    }
]
emna.post("/signup",function(request, response){
    const newUser=request.body
    users.push(newUser)
    return response.status(201).send({message: "user added"})
})
emna.post("/login",function(request, response) {
    const user = users.find(function(value) {
        return value.login === request.body.login && value.password === request.body.password
    }) ;

    if (user) {
        return response.status(200).send({message: "login success ❤️‍🔥"})
    }
    else{
        return response.status(401).send({message: " user not authorized"})
    }
})

emna.listen(3006, () => console.log("3006!"))