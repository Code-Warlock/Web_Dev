var app = angular.module("myApp",[])
app.controller("myCtrl",function($scope){
  $scope.name = "";
  $scope.question = 0;
  $scope.val = "Question Table";
  db = [];
  $scope.db = db;
  $scope.addUser = function(name,question){
    db.push({name : $scope.name,question : $scope.question,update(){this.question >= 10 ? $scope.val = "You have reached your Questions Limit" : this.question++},decrease(){this.question <= 0 ? $scope.val = "You cannot have question value beyond 0" :this.question--}})
  }
  $scope.removeUser = function(each){
    let bool = confirm(`Are you sure you want to remove ${each.name}\nThis action is fatal!!!!`);
    if(bool)
      db.pop(each)
  }
})
