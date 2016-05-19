'use strict';

describe('Directive: userAvatar', function () {

  // load the directive's module
  beforeEach(module('scssApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<user-avatar></user-avatar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the userAvatar directive');
  }));
});
