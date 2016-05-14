app.controller("ProfileCtrl", function($scope, $ionicPopup){
    $scope.msg = "Profile Ctrl";
    console.log($scope.msg);


    var userRef = new Firebase("https://rousseaddict.firebaseio.com/Users");
    var id = userRef.getAuth().uid
    userRef.child(id+'/user').once('value',function(e){
    	$scope.user.name = e.val();
    });
    userRef.child(id+'/date').once('value',function(e){
        $scope.user.date = e.val();
    });
    userRef.child(id+'/description').once('value',function(e){
    	$scope.user.description = e.val();
    });


    $scope.desc = function(){
        var myPopup = $ionicPopup.prompt({
            title: 'Enter description :',
            template: '<input type="text" ng-model="user.description">',
            scope: $scope
        })
        .then(function(res) {
            console.log('Tapped!');
            userRef.child(id).update({description: $scope.user.description});
        });
    }
});