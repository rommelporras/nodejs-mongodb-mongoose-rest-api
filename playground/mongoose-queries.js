// const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
// const Todo = require('./../server/models/todo');
const User = require('./../server/models/user');

/** Mongoose Queries and ID Validation **/
// const id = '5bd6af9b30c7e626d0d0216f';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('5bd810ab25fe9a459b0f5911').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
  console.log(e)
});