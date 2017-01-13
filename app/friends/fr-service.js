app.factory('FriendService',function ($http) {
    return {
            addFr: function (user,callback) {
                $http.post('/acceptFriend',user).then(function (res) {
                    callback(res.data)
                })
            }
    }
})