angular.module('testAnyAngularDirective', [])

  .directive('myDirective', function () {

    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'my-template.html',
      scope: true,
      link: function (scope, element, attrs) {
        scope.favoriteColor = 'Red';

        scope.changeFavoriteColor = function (color) {
          scope.favoriteColor = color;
        };

        scope.myFullNameIs = function () {
          return scope.firstName + ' ' + scope.lastName;
        };
      }
    };

  });
