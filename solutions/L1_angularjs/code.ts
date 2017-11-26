import {movieData} from "./data";
import * as angular from "angular";
let app = angular.module("reviewApp", []);

app.controller("reviewController", function($scope){
  $scope.movie = movieData;
  $scope.rating = 0;
  $scope.changeStarRating = function(newRating){
    $scope.rating = newRating;
  };
});
