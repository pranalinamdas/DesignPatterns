var Factory = function(name){
this.name=name
}

Factory.prototype.get = function(obj){
    if(obj === 'User'){
        var user = require('./user');
        return new user(this.name);
    }

    if(obj === 'Repo'){
        var repo = require('./repo');
        return new repo();
    }

    if(obj === 'Task'){
        var task = require('./task');
        return new task();
    }
}

module.exports = Factory;