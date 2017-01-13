app.controller('logCtrl',['LoginService','$location','UserService',function (LoginService,$location,UserService) {
    var vm=this;
    vm.isUser={};
    vm.init=function () {

    };
    vm.check=function () {
        LoginService.login(JSON.stringify(vm.userCh),function (data) {
            if(data.success){
                UserService.isUser=data.user;
                    localStorage.setItem('localUser',JSON.stringify(data.user));
                 $location.path('/uspage');

            }else{
                vm.wrong=true;
            }
        })

    }
    // vm.init();
}])