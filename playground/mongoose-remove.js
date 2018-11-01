const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const Todo = require('./../server/models/todo');
const User = require('./../server/models/user');

/** WARNING - Soon to be deprecated **/
// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.deleteMany({}).then(result => {
// //   console.log(result);
// // });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

/** WARNING - Soon to be deprecated **/
// Todo.findByIdAndRemove('5bdb146e5648362de83937c6').then((todo) => {
//   console.log(todo);
// });
// Todo.findByIdAndRemove({_id: '5bdb17445648362de8393841'}).then((todo) => {
//   console.log(todo);
// });

// Todo.findOneAndDelete('5bdb14c25648362de83937e3').then((todo) => {
Todo.findOneAndDelete({_id: '5bdb15385648362de8393813'}).then((todo) => {
  console.log(todo);
});
