angular
    .module('controllers.Tabs', [])
    .controller('TabsController', function(){
        var tabs = this.tabs = [];
        // select the current tab
        this.select = function(tab) {
            angular.forEach(tabs, function(tab) {
                tab.selected = false;
            });
            tab.selected = true;
        };
        // add new tab
        this.addTab = function(tab) {
            if (tabs.length === 0) {
                this.select(tab);
            }
            tabs.push(tab);
        };            
    })
