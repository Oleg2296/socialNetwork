// app.directive('NavBar',function () {
//     return {
//         templateUrl: '../other/navbar.html'
//     }
// })
app.directive('navMenu',function(){
    return {
        restrict: 'A',
        templateUrl: 'build/other/navbar.html'
    }
})
