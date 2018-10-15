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

  //deleteMany
  // TodoCollection.deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // TodoCollection.deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  //   console.log(result.result.ok);
  //   console.log(result.result.n);
  // });

  //findOneAndDelete
  // TodoCollection.findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  UsersCollection.deleteMany({name: 'Rommel'});

  UsersCollection.findOneAndDelete({
    _id: new ObjectID('5ae97fff864f583be8cc79f5')
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // database.close();
});