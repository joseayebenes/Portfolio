'use strict';

angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope, $http, $modal) {

    $scope.projects = [];

    $http.get('/api/projects').success(function(projects) {
      $scope.projects = projects;
    });

    $scope.socials=[
    {icon:"fa-facebook",url:"#"},
    {icon:"fa-google-plus",url:"#"},
    {icon:"fa-twitter",url:"#"},
    {icon:"fa-linkedin",url:"#"},
    {icon:"fa-dribbble",url:"#"},
    ];

 });