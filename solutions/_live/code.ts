import {movieData} from "./data";
import * as angular from "angular";

let app = angular.module("myawesomeapp", []);

app.controller("myawesomecontroller", function(){
  this.review = movieData;
  this.rating = 3;
  this.changeStarRating = (newRating) => {
    this.rating = newRating;
  };
});


/*

import * as $ from "jquery";


function renderMovie(data: Review){
  ui.title.text(data.title);
  ui.review.text(data.review);
  ui.poster.attr("src", data.imgUrl);

  ui.actors.empty();
  for(let i=0; i<data.actors.length; i++){
    ui.actors.append("<li>" + data.actors[i] + "</li>");
  }
}

function changeStarRating(rating){
  $(".filled").removeClass("filled");
  for(let i=1; i<=rating; i++){
    ui.stars[i-1].addClass("filled");
  }
}

ui.rating.on("click", "span", (e) => {
  let star = $(e.target);
  let rating = parseInt(star.attr("data-rating-id"));
  changeStarRating(rating);
});

renderMovie(movieData);
*/
