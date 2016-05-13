// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'firebase']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

//Config for android
app.config(function($ionicConfigProvider) {
    //$ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
    $ionicConfigProvider.navBar.alignTitle('center');
}); 

//routes
app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state("home",{
    url:"/home",
    templateUrl:"views/home.html",
    controller:"HomeCtrl"
  })

  $stateProvider.state("gallery",{
    url:"/gallery",
    templateUrl:"views/gallery.html",
    controller:"GalleryCtrl"
  })
  
  $stateProvider.state("info",{
    url:"/info/:num",
    templateUrl:"views/info.html",
    controller:"InfoCtrl"
  })

  $stateProvider.state("upload",{
    url:"/upload",
    templateUrl:"views/upload.html",
    controller:"UploadCtrl"
  })

  $stateProvider.state("connexion",{
    url:"/connexion",
    templateUrl:"views/connexion.html",
    controller:"ConnexionCtrl"
  })

    $stateProvider.state("profile",{
    url:"/profile",
    templateUrl:"views/profile.html",
    controller:"ProfileCtrl"
  })

  $stateProvider.state("about",{
    url:"/about",
    templateUrl:"views/about.html",
    controller:"AboutCtrl"
  })

  $urlRouterProvider.otherwise('/home')

});

//main controller
app.controller("AppCtrl", function($scope, $firebaseArray, $ionicPopup){
    $scope.rootMsg = "App Ctrl";
    console.log($scope.rootMsg);

    var ref = new Firebase("https://rousseaddict.firebaseio.com/Rousses");
    $scope.rousses = $firebaseArray(ref);

    //store locally user info
    $scope.user = {};
    $scope.user.auth = (ref.getAuth() != null);

    $scope.logout = function (){
      ref.unauth();
      var alertPopup = $ionicPopup.alert({
        title: 'Disconnected'
      });
      $scope.user.auth = false;
      console.log(ref.getAuth() == null);
    }
});

