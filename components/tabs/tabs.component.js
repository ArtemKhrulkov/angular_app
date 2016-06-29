angular
    .module('components.tabs', [ 'components.tab','controllers.Tabs' ])
    .component('tabs',{
        transclude: true,
        controller: 'TabsController',
        templateUrl: 'components/tabs/tabs.template.html'
    })