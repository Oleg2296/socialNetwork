app.factory('PeopleService',function ($http) {
    return{
        peoples : function (callback) {
            $http.get('/get').then(function (res) {
                callback(res.data);
            })
        },
        addFr: function (user,callback) {
            $http.post('/addFr',user).then(function(res){
             callback(res.data);
            })
        }
    }

})