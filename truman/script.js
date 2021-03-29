//window.onload = function() {
//var DATA;

//fetch("")
//.then(function(blob){ return blob.json(); })
//.then(function(json){
  //DATA = json;
  //array2 = buildPage(DATA);
   //});



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
    console.log(objects.Year);

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
    var audio = new Audio("wood_click.ogg");
    audio.play();
    audio.volume = 0.3;
}
//bkg
function amb() {
    var audio2 = new Audio("Sweden.mp3");
       audio2.play();
     }
//popUp
function popUp(objects){
  var stream = document.querySelector('.items');
stream.onclick = function (e) {
    var x = e.pageX,
        y = e.pageY;

 //        $('#infopop').css({
	// 'left': e.pageX + 250,
	// 'top': e.pageY +150,});


  $('#infopop').position({
   my: "left+3 top-1",
    of: e,
    collision: "flipfit" });

    Play();
};

//$('.objects').mouseleave(function() {
  //$('#infopop').fadeOut(50);
//});

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

 btn.onclick = function(event) {
  $('#infopop').css("display","none");
};

};


function callback(data){
 r_temp = data.main.temp;
 r_far = Math.round((r_temp - 32) * 5 / 9);
 var weat = document.querySelector(".weather");
 r_cloud = data.clouds.all;
    console.log(r_cloud);
    console.log(data);

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
  console.log(d);
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
