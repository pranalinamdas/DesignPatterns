var User = function(name){
this.name=name
}

User.prototype.save = function(){
    console.log("saving namen from user: "+this.name);
    return 'hello user';
}

module.exports = User;