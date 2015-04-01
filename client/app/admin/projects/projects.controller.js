'use strict';

angular.module('portfolioApp')
  .controller('ProjectsCtrl', function ($scope, $http) {
   

    $scope.projects = [];

    $http.get('/api/projects').success(function(projects) {
      $scope.projects = projects;
    });


  });
