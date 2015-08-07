describe('[My Directive]', function () {

  var $scope, element;

  beforeEach(module('myApp'));
  beforeEach(module('templates'));
  beforeEach(inject(function ($rootScope, $compile) {
    element = angular.element('<my-directive first-name="firstName" last-name="lastName"></my-directive>');

    $scope = $rootScope.$new();
    $scope.firstName = 'Fernando';
    $scope.lastName = 'Bernardino';

    $compile(element)($scope);
    $scope.$digest();
  }));

  describe('when my directive is compiled,', function () {
    it('display my full name.', function () {
      expect(element.scope().myFullNameIs()).toBe('Fernando Bernardino');
      expect(element.html()).toContain('Hello, my name is Fernando Bernardino.');
    });
    it('display my first name and my favorite color.', function () {
      expect(element.html()).toContain('My favorite color is Red.');
    });
  });

  describe('when I change my favorite color,', function () {
    it('Blue is my new favorite color.', function () {
      element.scope().changeFavoriteColor('Blue');
      element.scope().$digest();
      expect(element.scope().favoriteColor).toBe('Blue');
      expect(element.html()).toContain('My favorite color is Blue.');
    });
    it('Green is my new favorite color.', function () {
      element.scope().changeFavoriteColor('Green');
      element.scope().$digest();
      expect(element.scope().favoriteColor).toBe('Green');
      expect(element.html()).toContain('My favorite color is Green.');
    });
  });

});
