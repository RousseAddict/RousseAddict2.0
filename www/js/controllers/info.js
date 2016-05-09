app.controller("InfoCtrl", function($scope, $stateParams, $ionicPopup){
    $scope.msg = "Info Ctrl";
    console.log($scope.msg);

    //get the url params
    $scope.id = $stateParams.num;
    console.log($scope.id);
    //load infos corresponding to url params
    $scope.infos = $scope.rousses[$scope.id];
    console.log($scope.infos);



    $scope.share = function(){
    	$scope.link = "http://rousseaddict.tk/#/info/"+$scope.id;
   		var alertPopup = $ionicPopup.alert({
   			title: 'Share !',
     		subTitle: 'Copy link Below',
     		scope: $scope,
     		template: '<input type="text" ng-model="link">'
   		});
    }
});