app.factory("Rousses", function($firebaseArray) {
    var itemsRef = new Firebase("https://rousseaddict.firebaseio.com/Rousses");
    return $firebaseArray(itemsRef);
});

app.factory("Users", function($firebaseArray) {
    var itemsRef = new Firebase("https://rousseaddict.firebaseio.com/Users");
    return $firebaseArray(itemsRef);
});
