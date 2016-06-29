angular
    .module('controllers.Tab', [])
    .controller('TabController', function(){
        this.$onInit = function() {
            this.tabsCtrl.addTab(this);
            console.log(this);
        };
    })
