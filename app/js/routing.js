// app.config(function($routeProvider,$locationProvider){
//     $routeProvider
//         .when("/registration",{
//             template: "i love registration guys",
//             controller: "regCtrl",
//             controllerAs: "reg"
//         })
//         .when("/login1",{
//             templateUrl: "login/login.html",
//             controller: "logCtrl",
//             controllerAs: "log"
//         })
//         .when("/usPage",{
//             templateUrl: "usPage/page.html",
//             controller: "pageCtrl",
//             controllerAs: "page"
//         })
//     // $locationProvider.html5Mode(true);
// })

// app.config(config);


app.config(function($routeProvider,$locationProvider) {
    $routeProvider
        .when('/login1', {
            controller: 'logCtrl'
            , templateUrl: 'build/login/login.html'
            , controllerAs: 'log'
        })

        .when('/registration', {
            controller: 'registrationCtrl'
            , templateUrl: 'build/registration/reg.html'
            , controllerAs: 'reg'
        })
        .when('/uspage', {
            controller: 'pageCtrl'
            , templateUrl: 'build/usPage/page.html'
            , controllerAs: 'page'
        })
        .when('/friends', {
            controller: 'friendCtrl'
            , templateUrl: 'build/friends/friend.html'
            , controllerAs: 'friend'
        })
        .when('/massage', {
            controller: 'massCtrl'
            , templateUrl: 'build/massages/massage.html'
            , controllerAs: 'mass'
        })
        .when('/otherUser', {
            controller: 'OPCtrl'
            , templateUrl: 'build/otherProfile/otherProf.html'
            , controllerAs: 'oProf'
        })
        .when('/peoples', {
            controller: 'peopleCtrl'
            , templateUrl: 'build/peoples/peopels.html'
            , controllerAs: 'people'
        })

        .otherwise({
                redirectTo: '/login1'
            });
});




// config.$inject = ['$routeProvider', '$locationProvider'];
// function config($routeProvider, $locationProvider) {
//     $routeProvider
//         // .when('/',{
//         //
//         // })
//
//     // .otherwise({
//     //     redirectTo: '/'
//     // });
//     // $locationProvider.html5Mode(true);
// }