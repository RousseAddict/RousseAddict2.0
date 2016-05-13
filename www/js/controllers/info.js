app.controller("InfoCtrl", function($scope, $stateParams, $ionicPopup, $firebaseObject, $location){
    $scope.msg = "Info Ctrl";
    console.log($scope.msg);

    //get the url params
    var id = $stateParams.num;

    //load infos corresponding to url params
    var infoRef = new Firebase("https://rousseaddict.firebaseio.com/Rousses/"+id);
    $scope.infos = $firebaseObject(infoRef);
    console.log($scope.infos);



    $scope.like = function(){
        if (infoRef.getAuth() == null){
            $location.path('/connexion');
        }
        else{
            infoRef.child('like').set($scope.infos.like +1);
            var alertPopup = $ionicPopup.alert({
                title: 'Liked !'
            });
        }
    }

    $scope.showComent = false;
    $scope.comment = function(){

    }
    
    $scope.share = function(){
    	$scope.link = "http://rousseaddict.tk/#/info/"+id;
   		var alertPopup = $ionicPopup.alert({
   			title: 'Share !',
     		subTitle: 'Copy link Below',
     		scope: $scope,
     		template: '<input type="text" ng-model="link">'
   		});
    }
});