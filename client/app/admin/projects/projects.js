'use strict';

angular.module('portfolioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/admin/projects',
        templateUrl: 'app/admin/projects/projects.html',
        controller: 'ProjectsCtrl',
        authenticate:true
      });
  });