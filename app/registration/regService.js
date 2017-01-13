// app.controller('regCtrl',['LoginService',function (LoginService) {
//     var vm=this;
//
//     vm.check=function () {
//         LoginService.login(JSON.stringify(vm.userCh),function (data) {
//             vm.isUser=data;
//             console.log(vm.isUser)
//         })
//     }
//
// }])

app.factory('RegService',function ($http) {
    return {
        registration: function (user,callback) {
            $http.post('/registration',user).then(function(res){
                callback(res.data);
            })
        }


    }
})