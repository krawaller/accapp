
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
  We could also have created each <li> individually:

  for(let i=0; i<data.actors.length; i++){
    let node = document.createElement("li");
    node.innerText = data.actors[i];
    document.querySelector(".infosection ul").appendChild(node);
  }

  
  We could also create a big HTML string using joins:
  
  document.querySelector(".infosection ul").innerHTML =
    "<li>" + data.actors.join("</li><li>") + "</li>";


  Or, we could be a ninja and solve it with reduce! :)
  
  document.querySelector(".infosection ul").innerHTML = data.actors.reduce(
    (str,a)=>str + "<li>" + a + "</li>"),
    ""
  );
  */
}

renderMovie(movieData);
