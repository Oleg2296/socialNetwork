app.controller('peopleCtrl', ['PeopleService', 'UserService', function (PeopleService, UserService) {
    var vm = this;
    vm.users;
    vm.isUser;
    vm.meAdd = {};
    vm.lol = function (user1,user2) {

    }

    vm.addFriend = function (user) {
        vm.meAdd.user_id1 = vm.isUser.id;
        vm.meAdd.user_id2 = user.id;
        PeopleService.addFr(vm.meAdd, function (data) {
            console.log(data);
        })
        // console.log(vm.meAdd);
    }
    vm.init = function () {
        PeopleService.peoples(function (data) {
            vm.users = data;
            // console.log(vm.users)
        })
        vm.isUser=UserService.isUser;
        console.log(vm.isUser);
    }

    vm.init()

}])