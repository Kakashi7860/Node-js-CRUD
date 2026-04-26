const express = require("express");
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Fake database
let users = [];
let idCounter = 1;

// Add user (POST)
app.post("/addUser", (req, res) => {
  let user = {
    id: idCounter++,
    name: req.body.name,
    age: req.body.age,
  };

  users.push(user);

  res.json({
    message: "User Added",
    data: user,
  });
});







//UPDATE

app.put("/updateUser/:id",(req,res)=>{
    let id = parseInt(req.params.id);

    let user = users.find (u => u.id === id);

    if(!user){
        return res.status(404).send("User Not Found")
    }
    if(req.body.name) user.name = req.body.name;
    if(req.body.age) user.age = req.body.age;

    res.json({
    message: "User Updated",
    data: user,
  });

})





















// Get all users (GET)
app.get("/users", (req, res) => {
  res.json(users);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
