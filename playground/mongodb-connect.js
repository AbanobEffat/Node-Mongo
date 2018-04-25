// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj =  new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to the database.');;
  }
  console.log('Connected to MongoDB server.');

  db.collection('todo').insertOne({
    _id: 1,
    name: 'Abanob',
    age: 20,
    gender: 'male'
  }, (err, result) => {
      if(err){
        return console.log('Error while inserting: ', err);
      }
      console.log(JSON.stringify(result.ops));
  })
  db.close();
});
