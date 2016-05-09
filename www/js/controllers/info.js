app.controller("InfoCtrl", function($scope, $stateParams){
    $scope.msg = "Info Ctrl";
    console.log($scope.msg);

    $stateParams.num = infos.num
});