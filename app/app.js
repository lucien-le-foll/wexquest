(function(){
    "use strict";

    angular.module('wexquest', ['ngRoute', 'webcam', 'uiGmapgoogle-maps'])
        .controller('mainController', function(){
            var vm = this;

            vm.places = [
                {name : 'Wexford Town', picture : 'wex-town.jpg', complete : false, tags : [
                    {name : 'Opera', found : true, coord : "52.336031, -6.465723"},
                    {name : 'Crescent', found : true, coord : "52.336031, -6.465723"},
                    {name : "Mooney's", found : false, coord : "52.336031, -6.465723"}
                ]},
                {name : 'Gorey', picture : 'gorey.jpg', complete : false, tags : [
                    {name : 'Wells House', found : false, coord : "52.676073, -6.294367"},
                    {name : 'Kia Ora Mini Farm', found : true, coord : "52.676073, -6.294367"},
                    {name : "Courtown Woods", found : false, coord : "52.676073, -6.294367"}
                ]},
                {name : 'Kimore Quay', picture : 'kilmore.jpg', complete : false, tags : [
                    {name : 'Old Boat', found : true, coord : "52.176436, -6.586435"},
                    {name : 'Ballyteige Burrow', found : false, coord : "52.176436, -6.586435"},
                    {name : "Beach", found : false, coord : "52.176436, -6.586435"}
                ]},
                {name : 'Rosslare', picture : 'rosslare.jpg', complete : true, tags : [
                    {name : 'Rosslare Golf', found : true, coord : "52.252093, -6.341748"},
                    {name : 'Carnsor Point', found : true, coord : "52.252093, -6.341748"},
                    {name : "The Oscar Wilde", found : true, coord : "52.252093, -6.341748"}
                ]},
                {name : 'New Ross', picture : 'new-ross.jpg', complete : true, tags : [
                    {name : 'Dunbrody Famine Ship Experience', found : true, coord : "52.394536, -6.944944"},
                    {name : 'Hook Head Safaris', found : true, coord : "52.394536, -6.944944"},
                    {name : "Ring of Hook", found : true, coord : "52.394536, -6.944944"}
                ]}
            ];

            vm.doneLocations = [
                {id : 1, center : {lon : "52.394536", lat : "-6.944944"}},
                {id : 2, center : {lon : "52.252093", lat : "-6.341748"}}
            ];

            vm.changeQuest = function() {
                vm.places[0].complete = true;
                vm.places[0].tags[2].found = true;
                vm.doneLocations.push({id : 3, lon : "52.336031", lat : "-6.465723"});
                console.log(vm.places);
            };

            vm.setMap = function(coord, name){
                vm.mapTitle = name;
                var splt = coord.split(',');
                vm.map = { center: { latitude: splt[0], longitude: splt[1] }, zoom: 12 };
            }
        })
        .config(function($routeProvider, $locationProvider){
            $routeProvider
                .when('/index.html', {
                    templateUrl : 'app/views/home.html'
                })
                .when('/camera', {
                    templateUrl : 'app/views/camera.html',
                })
                .when('/signin',{
                    templateUrl : 'app/views/signin.html'
                })
                .when('/resume', {
                    templateUrl : 'app/views/resume.html'
                })
                .otherwise({redirectTo : '/index.html'});

            $locationProvider.html5Mode(true);
        });
}());
