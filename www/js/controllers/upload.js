app.controller("UploadCtrl", function($scope, $firebaseObject, $filter){
    $scope.msg = "Upload Ctrl";
    console.log($scope.msg);

    var refImg = new Firebase("https://rousseaddict.firebaseio.com/Upload");
    var ImgObj = $firebaseObject(refImg);
    $scope.date = new Date();
    $scope.description;


    function saveimage(e1) {
        var filename = e1.target.files[0];
        var fr = new FileReader();
        fr.onload = function (res) {
            $scope.image = res.target.result;
            ImgObj.image = res.target.result;
            ImgObj.$save().then(function (val) {
            }, function (error) {
                console.log("ERROR", error);
            })
        };
        fr.readAsDataURL(filename);
    }

    document.getElementById("file-upload").addEventListener('change', saveimage, false);

    this.loadimage = function () {
        ImgObj.$loaded().then(function (obj) {
            $scope.profileImage = obj.image;
            console.log("loaded", $scope.profileImage);
            document.getElementById("profileImage").src = obj.image;
            
        }, function (error) {
            console.log("ERROR", error);
        });
    };
    this.loadimage();

    $scope.validate = function(desc){
        var id = $scope.rousses.length
        var ref = new Firebase("https://rousseaddict.firebaseio.com/Rousses");
        ref.child(id).set({
        					image: $scope.profileImage, 
        					like: 0,
        					description: desc,
        					date: $filter('date')(new Date(),'dd-MM-yyyy'),
        					num: id
        				});
        console.log("Rousses saved in Gallery !")
    }
});