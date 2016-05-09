app.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    //$ionicConfigProvider.navBar.align('center');
});	

app.controller("HomeCtrl", function($scope){
    $scope.msg = "Home Ctrl";
    console.log($scope.msg);
});