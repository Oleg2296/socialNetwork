
app.controller('myCtrl',['UserService','$location',function (UserService,$location) {
    var vm = this;
    vm.users="Oleh WTF";
    vm.isUser={};
    vm.friendsAppl={};
    vm.myFriends=function () {
        UserService.friends(vm.isUser,function (data) {
            UserService.myFriends=data;
        })
    }
    vm.init=function () {
        if (localStorage.getItem('localUser')!==null){
            vm.localUser=JSON.parse(localStorage.getItem('localUser'));
            UserService.isUser=vm.localUser;
            vm.isUser=vm.localUser;
            vm.myFriends();
            $location.path('/uspage');
        }else{
            $location.path('/login1');
        }
        if(vm.isUser !== null){
            UserService.friendAppl(JSON.stringify(vm.isUser),function (data) {
                vm.friendsAppl=data;
                UserService.applicFriends=data;
            })

        }
    }
    vm.clear=function () {
        localStorage.removeItem('localUser');
        vm.friendsAppl={};
    }
    vm.get=function () {
        UserService.get(function (data) {
            // vm.users=data;
            // console.log(vm.users)
            // console.log(vm.friendsAppl);
        })
    };
    vm.init();

}])