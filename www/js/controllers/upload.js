app.controller("UploadCtrl", function($scope, $ionicPopup){
    $scope.msg = "Upload Ctrl";
    console.log($scope.msg);

    $scope.up = {};

    $scope.upload = function(){
    	console.log("started upload");
    	console.log($scope.up);
    	$scope.rousses.$add($scope.up);
    }
});