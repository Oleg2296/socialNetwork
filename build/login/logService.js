app.factory('LoginService', function ($http) {
    return {
        login: function (user, callback) {
            var response;
            $http.post('/login', user).then(function(res) {
                if (res.data !== "") {
                    response = {
                        success: true
                        , user: res.data
                    };

                }else{
                    response = {
                        success: false
                    }
                }
                callback(response);
            })
        }
        ,
        isUser: {},
    }
})