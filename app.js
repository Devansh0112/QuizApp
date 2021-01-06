const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const { urlencoded } = require("express");

const uri = "mongodb://localhost:27017/quizproject";
const client = new MongoClient(uri, { useUnifiedTopology: true });

app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = 3100;

app.post('/api/fetchQuestions' ,(req, res) => {
    let quizName = req.body.name;
    let col = client.db('quizproject').collection('quizlist');
    col.findOne({"Quiz Name": quizName}).then((data) => {
      res.json(data); 
    });
});

app.listen(PORT, () => {
  console.log(`listening on Port: ${PORT}.`);
  client
    .connect()
    .then((client) => {
      let db = client.db("quizproject");
      let collection = db.collection('quizlist');
      console.log(`connected to --- \nDatabase: ${db.databaseName}\ncollection: ${collection.collectionName}`);
    })
    .catch((err) => console.log(`Error Occurred: ${err}`));
});
