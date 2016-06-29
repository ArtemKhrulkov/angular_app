angular
    .module('controllers.Main', [])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('');

            // States
            $stateProvider
            .state('tabs', {
                url: '/tabs',
                templateUrl: 'tabs.html',
                params: {Tabs: null },
                controller: 'StateTabsController'
            });
        }
    ])
    .controller('StateTabsController', function($state){
        this.Tabs = $state.params.Tabs;
    })
    .controller('MainController', function($scope){
        this.objects = obj;
        $scope.selection = [];

        // toggle selection for a given object
        $scope.toggleSelection = function(objValue) {
            var idx = $scope.selection.indexOf(objValue);

            // is currently selected
            if (idx > -1) {
              $scope.selection.splice(idx, 1);
            }

            // is newly selected
            else {
              $scope.selection.push(objValue);
            }
        };
        // check if selection array is not empty
        $scope.checkObjects = function() {
            if ($scope.selection.length > 0) {
                return true;
            }
            else {
                return false;
            }
            
        };
    })
