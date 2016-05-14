app.controller("ConnexionCtrl", function($scope, $ionicPopup, $location, $filter){
    $scope.msg = "Connexion Ctrl";
    console.log($scope.msg);

    $scope.switchlogsign = true;

    var userRef = new Firebase("https://rousseaddict.firebaseio.com/Users");
    
    //create account
    $scope.username;
    $scope.pass;
    $scope.pass2;
    $scope.mail;

    $scope.signup = function(user,pass,pass2,mail){
    	if (pass != pass2){
    		var alertPopup = $ionicPopup.alert({
   			title: 'Incorrect Password',
     		subTitle: 'the password does not match',
   			});
    	}
    	else {
    	  userRef.createUser({
  			email    : mail,
  			password : pass
		  }, function(error, userData) {
  			if (error) {
  				var alertPopup = $ionicPopup.alert({
   					title: 'Error creating user :',
     				subTitle: error,
   				});
    			console.log("Error creating user:", error);
  			} else 
          {
          var alertPopup = $ionicPopup.alert({
            title: 'Successfully',
            subTitle: 'Account created !',
          });
          userRef.child(userData.uid).set({
              user: user,
              email : mail,
              role : "user",
              date: $filter('date')(new Date(),'dd-MM-yyyy'),
              description: ""
          });
  				$scope.switchlogsign = true;
          console.log("Successfully created user account with uid:", userData.uid);
  			  }
		    });
		  }
    }


    //login users
    $scope.login = function(mail,pass){
    	userRef.authWithPassword({
  			email    : mail,
  			password : pass
		  }, authHandler);
    }
    function authHandler(error, authData) {
  		if (error) {
  		  var alertPopup = $ionicPopup.alert({
   		  	title: 'Login Failed',
     	  	subTitle: error,
   		  });
  		  console.log("Login Failed!", error);
  		} else {
  		  var alertPopup = $ionicPopup.alert({
   			title: 'Successfully',
     		subTitle: 'Connected',
   		  });
        $scope.user.auth = true;
        $location.path("/");
  		}
	}
});