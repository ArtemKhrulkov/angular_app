angular
    .module('components.tab',[ 'components.tabs','controllers.Tab' ])
    .component('tab',{
        transclude: true,
        require: {
            tabsCtrl: '^tabs'
        },
        bindings: {
            title: '@'
        },
        controller: 'TabController',
        templateUrl: 'components/tab/tab.template.html'
    })