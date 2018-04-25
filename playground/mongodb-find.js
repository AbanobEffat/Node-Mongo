const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to the database.');;
  }
  console.log('Connected to MongoDB server.');
  // db.collection('todo').find({
  //   _id: new ObjectID("5ae03f442a4d8a13d3c8acd9")
  // }).toArray().then((docs) => {
  //   console.log('todo collection');
  //   console.log(docs);
  // }, (err) => {
  //   console.log('Error: ',err);
  // });

  db.collection('todo').find({
    name: 'Andrew'
  }).toArray().then((docs) => {
    console.log('todo collection');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Error: ',err);
  });

  db.close();
});
