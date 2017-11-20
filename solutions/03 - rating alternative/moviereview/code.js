
function renderMovie(data){
  document.querySelector(".infosection h1").textContent = data.title;
  document.querySelector(".infosection p").textContent = data.review;
  document.querySelector(".poster").setAttribute("src", data.imgUrl);

  let actorList = "";
  for(let i=0; i<data.actors.length; i++){
    actorList += "<li>" + data.actors[i] + "</li>";
  }
  document.querySelector(".infosection ul").innerHTML = actorList;
}

function changeStarRating(rating){
  document.querySelector(".stars").setAttribute("data-rating", rating);
}

for(let i=1; i<=5; i++){
  let star = document.querySelector(".stars :nth-child(" + i + ")");
  console.log(".stars :nth-child(" + i + ")", star)
  star.addEventListener("click", function(){
    changeStarRating(i);
  });
}

renderMovie(movieData);
