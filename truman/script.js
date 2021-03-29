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

    if (i<10){
      row = document.querySelector('.items');
    }


     //makes an element
    var tiles = smith[i];
    el = document.createElement('div');
	  //el.style.backgroundColor= '#' + tiles.HEX;

    //images
    var img = document.createElement('img');
    img.src = tiles.Bit;   // The image source from JSON array.
    el.appendChild(img);
    img.setAttribute("id","spin");

    //endimage

    // el.innerHTML=tiles.Film;
    el.setAttribute("class","sizing");
    el.setAttribute("id",`"${tiles.Year}"`);
    //adds the element to the row
    row.appendChild(el);
    console.log(objects.Year);

	el.addEventListener("click",function(){popUp(objects)});

  });

};

//ending

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
};

$('.objects').mouseleave(function() {
  $('#infopop').fadeOut(250);
});

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

window.onload = function(){
  var spin =  document.querySelector('#spin');
  var num = ['40','23','-3','9','-9'];
  var rnum = Math.floor(Math.random()*num.length);
  $(spin).css({
    "-webkit-transform": 'rotate(' + (Math.floor(Math.random()*10)-num[rnum]) + 'deg)',
    "-moz-transform": 'rotate(' + (Math.floor(Math.random()*10)-num[rnum]) + 'deg)',
  });

};

$(function() {
  $(".ending").typed({
    strings: ["People never touched one another. The custom had become obsolete, owing to the Machine."],

    typeSpeed: 0,
    showCursor:false,
    smartBackspace:false,
  });
});
//};
