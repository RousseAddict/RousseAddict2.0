app.controller("ProfileCtrl", function($scope){
    $scope.msg = "Profile Ctrl";
    console.log($scope.msg);


    var userRef = new Firebase("https://rousseaddict.firebaseio.com/Users");

    userRef.child($scope.user.id+'/user').once('value',function(e){
    	$scope.user.name = e.val();
    });
    console.log($scope.user.name);
});