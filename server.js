var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var multer = require("multer");

var app = express();

var port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static("/public"));
app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
});
app.use(bodyParser.urlencoded({ extended: false}));

var upload = multer({ dest: 'uploads/' })

app.post("/api/fileanalyse",upload.single('upfile'),(req,res)=>{
  res.json({"File Name":req.file.originalname, "Type":req.file.mimetype, "Size":req.file.size});
});



app.listen(port, ()=>{
  console.log("Everything OK");
})
