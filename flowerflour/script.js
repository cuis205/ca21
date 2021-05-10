function buildPage(DATA) {
  gordon = DATA;

  var row;

  // this for-loop operates on each movie, and builds a block for it
  // for (var i=0; i<films.length; i++){
  //function scope
  Array.from(gordon).forEach((object, i) => {
    if (i < 4) {
      row = document.querySelector("#row1");
    } else if (i < 8) {
      row = document.querySelector("#row2");
    } else if (i < 12) {
      row = document.querySelector("#row3");
    } else if (i < 16) {
      row = document.querySelector("#row4");
    } else if (i < 20) {
      row = document.querySelector("#row5");
    }

    //makes an element


    var tiles = gordon[i];
    var img = document.createElement('img');
    img.src = tiles.Thumb;
    img.setAttribute("class","size");
    row.appendChild(img);
    // el.innerHTML=tiles.Film;
    //el.setAttribute("class", "sizing");
   // el.setAttribute("id", "filminfo");
    //adds the element to the row
    //row.appendChild(el);

    row.addEventListener("click", function() {
      popUp(object);});
  });
}

function popUp(objects) {
  window.onclick = function(e) {
  $("#infopop").fadeIn(350);

  // filmname = film.Film;
  // directorname = film.Director;
  // filmyear = film.Year;
  // filmcol = film.Colour;
  // filmgenre = film.Genre;
  // filmdes = film.Description;
  // filmwrite = film.Writer;
  // gender = film.DirGen;
  // auterat = film.auteurship;

  // movieinfo = document.querySelector("#movieinfo");
  // infopop = document.querySelector("#infopop");


window.onload = function() {
  var btn = document.getElementById("close-button");

  btn.onclick = function(event) {
    $("#infopop").css("display", "none");
  };
};
  }
}

function spin(){
  let spin = document.querySelectorAll(".size");
  spin.forEach((item, i) => {
    let rotation=2+Math.random()*1;
    rotation=rotation*(Math.random()>0.5?1:-1);
    item.style.setProperty('--rotate-amount', rotation+'deg');
  });
};
