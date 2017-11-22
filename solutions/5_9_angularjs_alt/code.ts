import {movieData} from "./data";
import * as angular from "angular";
let app = angular.module("reviewApp", []);

app.controller("reviewController", function(){
  this.movie = movieData;
  this.rating = 0;
  this.changeStarRating = (newRating) => {
    this.rating = newRating;
  };
});
