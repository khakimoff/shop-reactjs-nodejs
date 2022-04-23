const express = require("express");
const fs = require("fs");
    
const app = express();
const jsonParser = express.json();
  
app.use(express.static(__dirname + "/public"));
  
const filePath = "products.json";
app.get("/api/products", function(req, res){
       
    const content = fs.readFileSync(filePath,"utf8");
    const users = JSON.parse(content);
    res.set('Access-Control-Allow-Origin', '*');
    res.send(users);
});
// получение одного пользователя по id

   
app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});

