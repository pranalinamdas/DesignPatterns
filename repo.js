var Repo = function(){

}

Repo.prototype.save = function(){
    console.log("saving repo: ");
    return "hello repo";
}

module.exports = Repo;