const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/quizproject";
const client = new MongoClient(uri, { useUnifiedTopology: true });

app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = 3100;
let quizList = [];

app.get('/api/fetchQuestions' ,(req, res) => {
    let col = client.db('quizproject').collection('quizlist');
    col.find({}).toArray((err, response) => {
      if (err) console.log('Some Error Occured...');
      else {
        quizList = response;
        res.json(response);
      }
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
