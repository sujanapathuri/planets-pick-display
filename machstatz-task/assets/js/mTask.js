var planetsList = [{ "id": "mercury", "isFavourite": false, "name": "Mercury" },
{ "id": "venus", "isFavourite": false, "name": "Venus" },
{ "id": "earth", "isFavourite": false, "name": "Earth" },
{ "id": "mars", "isFavourite": false, "name": "Mars" },
{ "id": "ceres", "isFavourite": false, "name": "Ceres" },
{ "id": "jupiter", "isFavourite": false, "name": "Jupiter" },
{ "id": "saturn", "isFavourite": false, "name": "Saturn" },
{ "id": "pluto", "isFavourite": false, "name": "Pluto" },
{ "id": "haumea", "isFavourite": false, "name": "Haumea" },
{ "id": "makemake", "isFavourite": false, "name": "Makemake" },
{ "id": "eris", "isFavourite": false, "name": "Eris" }];

var planet2 = document.querySelector(".planet2");
var planet1 = document.querySelector(".planet1");
var planet3 = document.querySelector(".planet3");
var planet4 = document.querySelector(".planet4");
var planet5 ;

var listButton = document.querySelector("#LOP");
var favListButton = document.querySelector("#FP");
var goBackButton = document.querySelector("#GB");


var clickedOnce = false;

var forFavList = false;

var favPlantes = [];

var favList = document.getElementsByName("pList");

var isFavListAdded = false;
var isDeletedOnce = false;

listButton.addEventListener("click", function () {

  planet2.style.display = "block";
  planet1.style.display = "none";
  planet3.style.display = "block";

  if (!clickedOnce) {
    for (var i = 0; i < planetsList.length; i++) {
      planet2.innerHTML += "<label>" + planetsList[i].name + "</label>";
      planet2.innerHTML += "<input type='checkbox' name='pList' ><br>";
    }
    clickedOnce = true;
  }
});


goBackButton.addEventListener("click", function () {

  if (isFavListAdded) {
    planet5 = document.querySelector(".planet5");
    planet5.parentNode.removeChild(planet5);
    isFavListAdded = false;
    isDeletedOnce = true;
  }


  favPlantes = [];
  for (var i = 0; i < favList.length; i++) {
    if (favList[i].checked) {
      favPlantes.push(planetsList[i].name);
    }
  }

  planet2.style.display = "none";
  planet1.style.display = "block";
  planet3.style.display = "none";
  planet4.style.display = "none";
});


favListButton.addEventListener("click", function () {

  planet1.style.display = "none";
  planet4.style.display = "block";
  planet3.style.display = "block";

  
  if (isDeletedOnce) {
    planet4.innerHTML += "<ul class='planet5'></ul>"
  }

  for (var i = 0; i < favPlantes.length; i++) {
    planet4.children[1].innerHTML += "<li>" + favPlantes[i] + "</li>";
  }

   isFavListAdded = true;

 
});