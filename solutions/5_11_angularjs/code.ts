
import {movieData1, movieData2} from "./data";
import {Review} from "./interfaces";
import * as angular from "angular";

let app = angular.module("reviewApp", []);

app.controller("appController", function(){
  this.movie1 = movieData1;
  this.movie2 = movieData2;
});

app.component("review", {
  bindings: {
    movie: '<'
  },
  controller: class ReviewComponent {
    rating = 0;
    movie: Review;
    changeStarRating(newRating){
      this.rating = newRating;
    }
  },
  controllerAs: 'reviewCtrl',
  template: `
    <div class="container">
      <div>
          <img class="poster" ng-src="{{reviewCtrl.movie.imgUrl}}">
      </div>
      <div class="infosection">
          <h1>{{reviewCtrl.movie.title}}</h1>
          <div class="stars">
            <!-- the stars can be done with ng-repeat instead! :) -->
            <span
              ng-repeat="star in [1,2,3,4,5]"
              ng-class="{filled: reviewCtrl.rating >= star}"
              ng-click="reviewCtrl.changeStarRating(star)">&#9733;</span>
          </div>
          <p>{{reviewCtrl.movie.description}}</p>
          <ul>
            <li ng-repeat="actor in reviewCtrl.movie.actors">{{actor}}</li>
          </ul>
      </div>
    </div>
  `
});
