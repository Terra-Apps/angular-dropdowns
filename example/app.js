'use strict';

var app = angular.module('app', ['autorizatieIsuDropdowns']);

app.controller('AppCtrl', function($scope) {
  $scope.ddSelectOptions = [
    {
      text: 'Label',
      divider: true
    }, {
      text: 'Option1',
      value: 'one',
      iconCls: 'someicon'
    }, {
      text: 'Option2',
      someprop: 'somevalue'
    }, {
      divider: true
    }, {
      text: 'Option4',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddSelectSelected = {
    text: "Select an Option"
  };

  $scope.ddMenuOptions = [
    {
      text: 'Label',
      divider: true
    }, {
      text: 'Option1',
      iconCls: 'someicon'
    }, {
      text: 'Option2'
    }, {
      divider: true
    }, {
      text: 'A link',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddMenuSelected = {};
  $scope.ddMenuOptions2 = [
    {
      name: 'times',
      iconCls: 'someicon',
      color: '000'
    }, {
      name: 'check',
      color: '888'
    }, {
      divider: true
    }, {
      name: 'A link',
      href: 'x',
      color: 'fff'
    }
  ];

  $scope.ddMenuSelected2 = {};
  $scope.ddMenuOptions3 = [
    {
      text: 'Option3-1',
      iconCls: 'someicon'
    }, {
      text: 'Option3-2'
    }, {
      divider: true
    }, {
      text: 'A link',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddMenuSelected3 = {};
});
