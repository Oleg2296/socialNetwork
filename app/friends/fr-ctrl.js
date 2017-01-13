app.controller('friendCtrl', ['FriendService', '$location', 'UserService', function (FriendService, $location, UserService) {
    var vm = this;
    vm.friends;
    vm.applicFr = {};
    vm.checkApp;
    vm.userIdAdd = {};
    vm.applic = function () {
        if (vm.applicFr !== null) {
            vm.checkApp = true;
        } else {
            vm.checkApp = false;
        }
    }

    vm.addFr=function (user) {
        vm.userIdAdd.isFriend=user.id;
        vm.userIdAdd.isUser=UserService.isUser.id;
        console.log(vm.userIdAdd)
        FriendService.addFr(vm.userIdAdd,function (data) {
                console.log(data)
        })
        
    }


    vm.init = function () {
        vm.applicFr = UserService.applicFriends;
        console.log(vm.applicFr)
    }
    vm.init()

}])