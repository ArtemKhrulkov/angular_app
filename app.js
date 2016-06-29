/*
*
* @author: Хрульков А.В.
* 
*/

'use strict';
// declare global object
var obj = [
    {
        'label': 'События', 
        'content': 'Все события тут'
    }, 

    {
        'label': 'Аналитика',
        'content': 'Аналитика тут'
    },

    {
        'label': 'События2', 
        'content': 'Все события тут2'
    },

    {
        'label': 'События3', 
        'content': 'Все события тут3'
    },

    {
        'label': 'События4', 
        'content': 'Все события тут4'
    },   
];

// Define the `app` module with dependencies
angular.module('app', [
  'ui.router',
  'controllers.Main',
  'controllers.Tabs',
  'controllers.Tab',
  'components.tabs',
  'components.tab',
]);


