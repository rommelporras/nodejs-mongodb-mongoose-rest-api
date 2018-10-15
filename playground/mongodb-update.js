// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  const TodoCollection = database.db('TodoApp').collection('Todos');
  const UsersCollection = database.db('TodoApp').collection('Users');

  // TodoCollection.findOneAndUpdate({
  //   _id: new ObjectID("5b1b8cbf3f8baa2a9b0827a1")
  // }, {
  //    $set: {
  //      completed: true
  //    }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  UsersCollection.findOneAndUpdate({
    _id: new ObjectID("5ae9714ac0494b2d301d05f9")
  }, {
    $set: {
      name: 'Rommel',
      location: 'Philippines'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // database.close();
});