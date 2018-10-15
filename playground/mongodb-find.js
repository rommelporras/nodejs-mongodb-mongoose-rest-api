// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  // database.db('TodoApp').collection('Todos').find({
  //   _id: ObjectID("5ae983bea3e90152b01e53ab")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));2
  // }, (err) => {
  //   if (err) {
  //     return console.log('Unable to fetch todos', err);
  //   }
  // });

  database.db('TodoApp').collection('Todos').find({
    _id: ObjectID("5ae983bea3e90152b01e53ab")
  }).count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    if (err) {
      return console.log('Unable to fetch todos', err);
    }
  });

  /** Exercise */
  database.db('TodoApp').collection('Users').find({name: 'Rommel'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));2
  }, (err) => {
    if (err) {
      return console.log('Unable to fetch todos', err);
    }
  });

  database.close();
});