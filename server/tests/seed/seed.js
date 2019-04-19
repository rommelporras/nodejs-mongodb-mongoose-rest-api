const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  'email': 'rporras@yondu.com',
  'password': 'userOnePass',
  'tokens': [{
    'access': 'auth',
    'token': jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
  }]
}, {
  _id: userTwoId,
  'email': 'r3mmel023@gmail.com',
  'password': 'userTwoPass',
  'tokens': [{
    'access': 'auth',
    'token': jwt.sign({_id: userTwoId, access: 'auth'}, 'abc123').toString()
  }]
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  _creator: userOneId
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333,
  _creator: userTwoId
}];

const populateTodos = (done) => {
  // Todo.remove({}).then(() => done());
  Todo.deleteMany({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => {
    console.log('done');
    done();
  });
};

const populateUsers = function (done) {
  User.deleteMany({}).then(function () {
    const userOne = new User(users[0]).save();
    const userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};