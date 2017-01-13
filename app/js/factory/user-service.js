app.factory('UserService',function ($http) {
    return {
       get: function (callback) {
           $http.get('/get').then(function (res) {
                callback(res.data);
           })
       },
        applicFriends: {}
        ,isUser: {}
        ,massage: {}
        ,myFriends: {}
        ,friends: function (user,callback) {
            $http.post('/friends',user).then(function (res) {
                callback(res.data);
            })
        }
        ,friendAppl: function (user,callback) {
            $http.post('/accFriend',user).then(function (res) {
                callback(res.data);
            })
        }

    }
})