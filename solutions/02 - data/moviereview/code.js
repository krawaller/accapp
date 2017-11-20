
function renderMovie(data){
  document.querySelector(".infosection h1").textContent = data.title;
  document.querySelector(".infosection p").textContent = data.review;
  document.querySelector(".poster").setAttribute("src", data.imgUrl);

  let actorList = "";
  for(let i=0; i<data.actors.length; i++){
    actorList += "<li>" + data.actors[i] + "</li>";
  }
  document.querySelector(".infosection ul").innerHTML = actorList;

  /*
  
  Here's a cooler way to do it! :)
  
  document.querySelector(".infosection ul").innerHTML = data.actors.reduce(
    (str,a)=>str + "<li>" + a + "</li>"),
    ""
  );
  */
}

renderMovie(movieData);
