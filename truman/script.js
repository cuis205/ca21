console.log(`⠀⠀⠀⣠⣴⣾⣿⣿⣿⣶⣄⣀⣀⣤⣶⣶⣦⣤⠀⠀⠀⠀⠀
⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀
⢀⣼⣿⡟⠉⠉⠉⠉⠉⠛⠻⣿⣿⣿⣿⣿⠿⠟⠛⠳⠂⠀⠀
⣿⣿⣿⠟⠉⠉⠛⠛⠓⠀⠉⠻⣿⣿⣿⡿⢀⡄⠲⠶⢶⣶⠀
⣿⣿⣷⣤⣤⣄⣀⣀⡘⠁⠀⣠⣿⣿⣯⡀⢹⡀⢀⣀⣠⡽⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀
⣿⣿⣿⣍⡉⠉⠉⠉⠙⠛⠛⠾⠿⠿⠿⠿⠿⠿⣿⣿⣿⠀⠀
⠛⠉⠉⠉⠛⠓⠲⢶⣶⣶⣶⣶⣦⣤⣤⣤⣤⣤⣤⡶⠁⠀⠀
⣴⣾⣿⣿⣿⣷⣦⣄⡈⠙⢿⠿⠛⠋⠉⠉⠉⠙⠁⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⠀⠀⣴⣾⣿⣿⣿⣶⣦⡀⠀⠀⠀
⡿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣧⣀⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀
⣀⣴⣶⣦⡄⠉⣿⣿⣿⣿⣿⡟⠉⣉⡉⠙⢻⣿⣿⡟⠀⠀⠀
⣿⣿⡿⠛⢁⣤⣿⣿⣿⣿⣿⡇⠈⣿⣿⣧⠀⠙⣿⠁⠀of course i still love you⠀⠀⠀`);
   function buildBook(data){
   mecha = DATA;
   //console.log(mecha);
   //Array.from(mecha).forEach((chapters,i) => {
   //console.log(mecha);
   //});

   var uno = document.querySelector('.uno');
   uno.onclick = function (e) {
     var x = e.pageX,
         y = e.pageY;
          $('#bookpop').fadeIn(50);

          var main = document.querySelector("#chaptername");
          var em = document.querySelector("#booktxt");
          main.innerHTML = "Main Menu";
          em.innerHTML = "<i>"+"The Machine Stops"+"</i>"+" "+"is a science fiction short story (12,300 words) by E. M. Forster. The story, set in a world where humanity lives underground and relies on a giant machine to provide its needs, predicted technologies similar to instant messaging and the Internet."

                    opennook();

   };

   $('#bookpop').draggable({ start: function() {

   $(this).css({transform: "none", top: $(this).offset().top+"px", left:$(this).offset().left+"px"});

   } });

   };

function chapto(buildBook){

$('#booktxt').empty();
$('#chaptername').empty();
var chapterone = mecha[0];

 booktxt = document.querySelector('#booktxt');
 booktxt.innerHTML = chapterone.Text;

 chaname = document.querySelector('#chaptername');
 chaname.innerHTML = "I." + chapterone.Subtitle;
  bookop();
//console.log(chapterone.Chapter);
};

function chaptw(buildBook){

$('#booktxt').empty();
$('#chaptername').empty();
var chaptertwo = mecha[1];

 booktxt = document.querySelector('#booktxt');
 booktxt.innerHTML = chaptertwo.Text;

 chaname = document.querySelector('#chaptername');
 chaname.innerHTML = "II." + chaptertwo.Subtitle;
  bookop();
//console.log(chapterone.Chapter);
};

function chapth(buildBook){

$('#booktxt').empty();
$('#chaptername').empty();
var chaptertwo = mecha[2];

 booktxt = document.querySelector('#booktxt');
 booktxt.innerHTML = chaptertwo.Text;

 chaname = document.querySelector('#chaptername');
 chaname.innerHTML = "III." + chaptertwo.Subtitle;
  bookop();
//console.log(chapterone.Chapter);
};



//buildBook(chapto);



function buildPage(data){
smith = DATA.sort(function (a, b) {
  return a.Year - b.Year;
});

  var row;
  // for (var i=0; i<films.length; i++){
  //function scope
 Array.from(smith).forEach((objects,i) => {

    if (i<1){
      row = document.querySelector('.items');
    }

    $( ".items" ).append('<div id="id' +
            (i+1) +
            '" class="inbetweener"> </div>');



     //makes an element
    var tiles = smith[i];
    el = document.createElement('div');
	  //el.style.backgroundColor= '#' + tiles.HEX;

    //images
    var img = document.createElement('img');
    img.src = tiles.Bit;   // The image source from JSON array.
    el.appendChild(img);
    img.setAttribute("class","spin");


    //endimage

    // el.innerHTML=tiles.Film;
    el.setAttribute("class","sizing");
    img.setAttribute("id",`"${tiles.Er}"`);
    //adds the element to the row
    row.appendChild(el);
    //console.log(objects.Year);

	el.addEventListener("click",function(){popUp(objects)});

  });

};


//ending
function spin(){
  let spin = document.querySelectorAll(".spin");
  spin.forEach((item, i) => {
    let rotation=4+Math.random()*1;
    rotation=rotation*(Math.random()>0.5?1:-1);
    item.style.setProperty('--rotate-amount', rotation+'deg');
  });
};

function inbt(){
  let inbtw = document.querySelectorAll(".inbetweener");
  inbtw.forEach((item, i) => {
    let space= 25*(i+1);
    item.style.width = space + 'px';
  });
};

//sounds
function Play(){
    var audio1 = new Audio("wood_click.ogg");
    audio1.play();
    audio1.volume = 0.2;
}
//bkg
function amb() {

  let testaud = document.querySelectorAll(".audioam");
  var audio2 = new Audio("Sweden.mp3");
      if(audio2.paused){
    audio2.play();
    audio2.volume = 0.3;
      $('.audioam').empty();
    testaud.innerHTML = " Eject";
  } else {
    audio2.pause();
      $('.audioam').empty();
    testaud.innerHTML = " Load Disc";
  }
};
//book sounds
function opennook() {
         var audio3 = new Audio("click.ogg");
            audio3.play();
            audio3.volume = 0.3;
          }

          function bookop() {
                   var audio4 = new Audio("open_flip1.ogg");
                      audio4.play();
                      audio4.volume = 0.5;
                    }

                    function bookclose() {
                             var audio5 = new Audio("close_put2.ogg");
                                audio5.play();
                                audio5.volume = 0.7;
                              }
//popUp
function popUp(objects){
  var stream = document.querySelector('.items');
stream.onclick = function (e) {
    var x = e.pageX,
        y = e.pageY;


    Play();
};

//$('.objects').mouseleave(function() {
  //$('#infopop').fadeOut(50);

  $('#infopop').draggable({ start: function() {

  $(this).css({transform: "none", top: $(this).offset().top+"px", left:$(this).offset().left+"px"});

  } });

$('#infopop').fadeIn(50);


   objname = objects.Name;
   objyear = objects.Year;
   objdes = objects.Description;
   objl = objects.Link;
   nobit = objects.Image;

   objinfo = document.querySelector('#objinfo');
   infopop = document.querySelector('#infopop');

   var imgt = document.createElement('img');
   imgt.src = objects.Image;

  var pain =  `<img src='${nobit}' width='100px' class= 'nobit'>`;
   // The image source from JSON array.



   var bruh = document.createElement('a');
   bruh.innerHTML = "Info Page";
   bruh.setAttribute("href", objl + ".html");

   objinfo.innerHTML =  pain + '</br>' + '</br>'  +
  "<strong>"+  objname +"</strong>"+ ' ' +
   objyear
    +  '</br>' +  '</br>'  + objdes +
    "</br>" +  '</br>' + "<a href=" + objl + ">" + "Smithsonian Info Page" + "</a>";

};



window.onload = function(){
var btn = document.getElementById('close-button');
var btn2 = document.getElementById('close-button2');
 btn.onclick = function(event) {
  $('#infopop').css("display","none");
};
btn2.onclick = function(event) {
  $('#booktxt').empty();
  $('#chaptername').empty();
 $('#bookpop').css("display","none");
   bookclose();
};

};

function callback(data){
 r_temp = data.main.temp;
 r_far = Math.round((r_temp - 32) * 5 / 9);
 var weat = document.querySelector(".weather");
 r_cloud = data.clouds.all;
    //console.log(r_cloud);
    //console.log(data);

  if(r_cloud < 50){

    	weat.innerHTML = '☁' + " " + r_temp + '°F' + "|" + r_far + '°C' ;
  }else{
        	weat.innerHTML = '' + " " + r_temp + '°F' + "|" + r_far + '°C' ;
  };

};

$.ajax({
    url:"https://api.openweathermap.org/data/2.5/weather?id=5134086&units=imperial&appid=1e830da7191978393386d3d7e98d3d89",
    type: "GET",
    dataType: "jsonp",
        jsonp : "callback",
        jsonpCallback: "callback"
        })



function timmy() {
  var blinky = '<span>:</span>';

  var time = document.querySelector(".time");
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  time.innerHTML =
    ("0" + h).substr(-2) + blinky + ("0" + m).substr(-2);
};

setInterval(timmy, 1000);

function scrall(){
  let scrEl = document.getElementById("scr-el")
  scrEl.addEventListener('scroll', event => {
  let scrolled = (scrEl.scrollLeft / (scrEl.scrollWidth - scrEl.clientWidth) ) * 100
  document.getElementById("myBar").style.width = scrolled + "%"
});
};


//$(function() {
  //$(".ending").typed({
  //  strings: ["People never touched one another. The custom had become obsolete, owing to the Machine."],

  //  typeSpeed: 0,
  //  showCursor:false,
  //  smartBackspace:false,
//  });
//});
//};
