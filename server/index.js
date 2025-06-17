// index.js
const express = require('express');
const mongoose =require("mongoose")
const data = require("./models/employs")
const cors =require('cors')
const app = express();
const port = 8080;

// Middleware to parse JSON
app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/company")

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  data.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ message: "Login successful" }); // ✅ Fixed
        } else {
          res.json({ message: "Incorrect password" }); // ✅ Fixed
        }
      } else {
        res.json({ message: "User not found" }); // ✅ Fixed
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});


app.post("/register", async(req ,res)=>{
   const value=await data.create(req.body)
    .then(employ=>res.json(employ))
    .catch(err=>res.json(err))
// console.log(req.body);
    res.send(value)

})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


