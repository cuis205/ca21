function buildPage(DATA) {
  gordon = DATA;
  var row;

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

    }else if (i<21){
      return true
    }

    //makes an element

    $(".dw").hide();
    var tiles = gordon[i];
    var arx = document.createElement('img');
    arx.src = tiles.Thumb;
    arx.setAttribute("class","size");
    row.appendChild(arx);
    // el.innerHTML=tiles.Film;
    //el.setAttribute("class", "sizing");
   // el.setAttribute("id", "filminfo");
    //adds the element to the row
    //row.appendChild(el);

    arx.addEventListener("click", function() {
      popUp(object);});
  });
}

function popUp(object) {
  window.onclick = function(e) {
  $(".row").hide(1,function(){

  });


    console.log(object);

   titl = object.Name;
   year = object.Year;
  des = object.Description;
    own = object.Owner;

            $("#close-button").show(0);
          $(".dw").show();
ti = document.querySelector("#title");
    ti.innerHTML = titl;
yr = document.querySelector("#year");
    yr.innerHTML = year;
ow = document.querySelector("#own");
    ow.innerHTML = own;
de = document.querySelector("#des");
    de.innerHTML = des;


  if(object.Video.includes('n')){
      var elm = document.querySelector("#full");
      var gri = document.createElement('img');
    gri.src = object.Link;
    gri.setAttribute("class","aight");
    elm.appendChild(gri);

  console.log('bah');
}else if (object.Video.includes('y')){
    var elm = document.querySelector("#full");
    var video = document.createElement("VIDEO");
    video.setAttribute("src", `${object.Link}`);
    video.setAttribute("class","aight");
    video.controls = true;
    elm.appendChild(video);

    $("#main").css("background-color", "black");
    $("#sidebar").css("background-color", "black");
    $(".titlebar").css("color", "white");
    $(".infotext").css("color", "white");
  
    $("#header").css("background-color", "black");
    $("#footer").css("background-color", "black");
  
  
    $("#info").css("color", "white");
    $("#close-button").css("color", "white");
        $("#close-button").css("border", "solid 1px white");
    $(".infobar").css("border-top", "solid 1px white");
      $("#sidebar").css("border-right", "solid 1px white");
    $(".infobar").css("border-bottom", "solid 1px white");
   $(".please").css("color", "white");
    document.getElementById('mod').src='white.png';
}



  }
}


function bye() {
  var btn = document.getElementById("close-button");
  btn.onclick = function (event) {



 // $(".row").removeClass("bye");
  $(".dw").hide(1, function(){
      $(".row").show(0);
      $("#full").empty(0);
      $("#title").empty(0);
      $("#year").empty(0);
      $("#own").empty(0);
      $("#close-button").hide(0);


  revert();




  });
  };
};

function revert(){
    $("#main").css("background-color", "white");
    $("#sidebar").css("background-color", "white");
       $("#sidebar").css("border-right", "solid 1px black");
    $(".titlebar").css("color", "black");
    $(".infotext").css("color", "black");
    $("#info").css("color", "black");
  
  $("#header").css("background-color", "white");
  $("#footer").css("background-color", "white");
  
    $(".please").css("color", "black");
    $("#close-button").css("color", "black");
    $(".infobar").css("border-top", "solid 1px black");
    $(".infobar").css("border-bottom", "solid 1px black");
   $("#close-button").css("border", "solid 1px black");
  document.getElementById('mod').src='black.png';
  
}


function spin(){
  let spin = document.querySelectorAll(".size");
  spin.forEach((item, i) => {
    let rotation=2+Math.random()*1;
    rotation=rotation*(Math.random()>0.5?1:-1);
    item.style.setProperty('--rotate-amount', rotation+'deg');
  });
};


// function white(){
//   let hand = document.querySelectorAll(".hand");
//   var bl = document.createElement('img');
//   bl.src = "black.png";
//   hand.appendChild(bl);
  
// }