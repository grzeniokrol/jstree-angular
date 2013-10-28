angular.module('treeDemo', ['jsTree']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/a', {templateUrl: 'treeDemo.html', controller: 'treeDemoCtrl'}).
      otherwise({redirectTo: '/a'});
}]);
