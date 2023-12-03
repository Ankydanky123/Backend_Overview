const express = require('express')
const mysql = require('mysql2')
const app = express();
app.use(express.json({}))
app.get('/',(req,res)=>{
res.send("Hi Ankush I am listening !")
})


// Make Database Connection 
const connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'contact_us'
})

connection.connect((err)=>{
if(err){
    console.log("Error in making connection", err)
}
else{
    console.log("database connected")
}
})



// req => It is the request from the frontend.
// res => It is the response to the frontend .

// Routes 

app.post('/send-message' ,(req,res)=>{

console.log(req.body);

res.send(req.body)                                                                                                                                                                                               
// to write a query to store data into database connected



})


// http://localhost:8000/send-message - > db

app.listen(8000,()=>{
    console.log("Server running at http://localhost:8000")

})

// // normal way to write a function
// function addNumber (){

// }
// // arrow function to do the same thing in js
// const addNumber = () =>{

// }