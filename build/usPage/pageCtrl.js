app.controller('pageCtrl',['PageService','UserService',function (PageService,UserService,$location) {
    var vm=this;
    vm.isUser;


    vm.init=function () {
        if(UserService.isUser !== null){
            vm.isUser=UserService.isUser;
        }
    }

    vm.init();

}])