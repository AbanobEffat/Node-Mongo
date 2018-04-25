const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to the database.');;
  }
  console.log('Connected to MongoDB server.');

  db.collection('todo').deleteOne({
    name: 'Abanob'
  }).then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Error: ',err);
  });


  db.collection('todo').deleteMany({
    name: 'Abanob'
  }).then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Error: ',err);
  });

  db.collection('todo').findOneAndDelete({
    name: 'Andrew'
  }).then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Error: ',err);
  });

  db.close();
});
