'use strict';
/* globals $, angular  */

angular.module('jsTree', [])
  .directive('jstree', function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      scope: {
        settings: '='
      },
      link: function (scope, element, attrs) {
        var treeElement = $(element);

        scope.$watch('settings.content', function () {
          console.log('Settings', scope.settings);

          var tree = treeElement.jstree({
            'json_data': {
              'data': scope.settings.content
            },
            'ui': {
              'initially_select': [scope.settings.selectedNode]
            },
            'plugins': union_arrays(['themes', 'json_data', 'ui'], scope.settings.additionalPlugins)
          });

          var events = scope.settings.events || {};
          tree.bind('select_node.jstree', function (event, data) {
            if (events.onNodeChanged) {
              events.onNodeChanged(event, data);
            }
          });

          tree.bind('loaded.jstree', function (event, data) {
            if (events.onTreeLoaded) {
              events.onTreeLoaded(event, data);
            }
          });

          function union_arrays(x, y) {
            if(!y){
              return x;
            }
            if(!x){
              return y;
            }

            var obj = {};
            for (var i = x.length - 1; i >= 0; --i){
              obj[x[i]] = x[i];
            }
            for (i = y.length - 1; i >= 0; --i){
              obj[y[i]] = y[i];
            }
            var res = [];
            for (var k in obj) {
              if (obj.hasOwnProperty(k)){
                res.push(obj[k]);
              }
            }
            return res;
          }
        });
      }
    };
  });