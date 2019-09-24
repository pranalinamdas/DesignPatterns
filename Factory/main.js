var Factory = require('./factory');

var factory = new Factory('pranali');

var user = factory.get('User');
console.log(user.save());

// var repo = factory.get('Repo');
// console.log(repo.save());

// var task = factory.get('Task');
// console.log(task.save());
