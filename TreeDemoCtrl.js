'use strict';

angular.module('treeDemo')
  .controller('treeDemoCtrl', function ($scope, $routeParams, $http) {

    $scope.treeSettings = {
      content: [],
      selectedNode: 'node13',
      events: {
        onNodeChanged: function (event, data) {
          var selectedNode = data.inst.get_selected();
          $scope.defaultSelected = selectedNode.attr('id');
          $scope.path = selectedNode.attr('path');

          $scope.$apply();
        }
      }
    };

    function init() {
      $scope.treeSettings.content = [{
        state: 'open',
        data: 'Root 1',
        attr: {
          id: 'node1',
          path: 'Root 1'
        },
        children: [{
          data: 'Child 1',
          attr: {
            id: 'node11',
            path: 'Root 1 / Child 1'
          }
        }, {
          data: 'Child 2',
          attr: {
            id: 'node12',
            path: 'Root 1 / Child 2'
          },
          children: [{
            data: 'Child 1 of child 2',
            attr: {
              id: 'node121',
              path: 'Root 1 / Child 2 / Child 1'
            }
          }, {
            data: 'Child 2 of child 2',
            attr: {
              id: 'node122',
              path: 'Root 1 / Child 2 / Child 2'
            },
          }]
        }, {
          data: 'Child 3',
          attr: {
            id: 'node13',
            path: 'Root 1 / Child 3'
          }
        }]
      }, {
        data: 'Root 2',
        attr: {
          id: 'node2',
          path: 'Root 2'
        }
      }];
    }

    init();
  });