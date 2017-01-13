app.controller('registrationCtrl',['RegService',function (RegService) {

    var vm=this;
    vm.add = function () {
        RegService.registration(vm.newUser,function (data) {
            console.log(data)
        });

    }

}]);


// angular
//     .module('myApp')
//     .controller('RegCtrl', regCtrl);
//
// RegCtrl.$inject = ['RegService'];
//
// function regCtrl(RegService) {
//     var vm=this;
// }
//
