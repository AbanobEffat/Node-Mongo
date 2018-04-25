const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to the database.');;
  }
  console.log('Connected to MongoDB server.');

  db.collection('todo').findOneAndUpdate({
    name: 'Andrew'
  }, {
    $set: {
      completed: true
    }//,
    //   $inc: {
    //     age: 1
    // }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  db.close();
});
