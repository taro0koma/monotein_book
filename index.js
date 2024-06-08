//http://localhost:5000/
const fs = require('fs');
const express = require("express");
const app = express();
// const coronaData = 

app.use(express.urlencoded({ extended: true }));
const activities =
require("./activites.json");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function (req, res) {
  console.log("req.bodyの中身:", req.body.activity);
  fs.writeFile(__dirname + "/data.txt", req.body.activity, function () {
    res.send("投稿完了")
  });
});

app.post("/update",function(req,res){
  activities[0].activity=
req.body.updatedActivity;
  res.send(activities);
});

app.post("/delete",function(req,res){
  activities.splice(req.body.number,1);
  res.send(activities);
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`Listening on ${port}(http://localhost:5000/)`);
});
//ページ106/197