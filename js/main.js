document.addEventListener("DOMContentLoaded",function(event){//Una vez la página ha cargado.
  var list_gallery = document.querySelectorAll(".artist-mini");//obtiene todos los div con clase artist-mini
  list_gallery = Array.from(list_gallery);//vuelve una lista en arreglo
  var aplha_order_button = document.querySelector("#alph-order-button");//obtiene el botón de ordenar alfabeticamente
  //Estructura para ordenar alfabeticamente
  aplha_order_button.addEventListener("click", function(){//evento del botón alfabetico
    document.querySelector("#artist-gallery").innerHTML = "";//Cambia la sintaxis HTML describiendo los descendientes del elemento
    list_gallery.sort(function(a,b){
      if(a.querySelector(".artist-mini-name").textContent < b.querySelector(".artist-mini-name").textContent){
        return -1;
      }else if(a.querySelector(".artist-mini-name").textContent > b.querySelector(".artist-mini-name").textContent){
        return 1;
      }else{
        return 0;
      }
    });
    list_gallery.forEach(function(element ,index ,array){
      document.querySelector("#artist-gallery").appendChild(element);//Adiciona un nodo como último hijo de un nodo
    });
  });
  var number_order_button = document.querySelector("#num-order-button");//obtiene el botón de ordenar numericamente
  //Estructura para ordenar numericamente
  number_order_button.addEventListener("click", function(){
    document.querySelector("#artist-gallery").innerHTML = "";
    list_gallery.sort(function(a,b){
      if(Number(a.querySelector(".artist-mini-position").getAttribute("data-position")) < Number(b.querySelector(".artist-mini-position").getAttribute("data-position"))){
        return -1;
      }else if(Number(a.querySelector(".artist-mini-position").getAttribute("data-position")) > Number(b.querySelector(".artist-mini-position").getAttribute("data-position"))){
        return 1;
      }else{
        return 0;
      }
    });
    list_gallery.forEach(function(element ,index ,array){
      document.querySelector("#artist-gallery").appendChild(element);
    });
  });
  //Estructura para reproducir el sonido 1
  //var artist_mini_audio = document.getElementById('audio');
  audio.volume = document.getElementById('volume').value;
  document.getElementById("play").onclick = function(){audio.play()}
  document.getElementById("pause").onclick = function(){audio.pause()}
  document.getElementById("stop").onclick = function(){audio.load()}
  //Estructura para reproducir el sonido 3
//  var artist_mini_audio = document.getElementById('audio1');
  audio1.volume = document.getElementById('volume1').value;
  document.getElementById("play1").onclick = function(){audio1.play()}
  document.getElementById("pause1").onclick = function(){audio1.pause()}
  document.getElementById("stop1").onclick = function(){audio1.load()}
  //Estructura para reproducir el sonido 3
//  var artist_mini_audio = document.getElementById('audio2');
  audio2.volume = document.getElementById('volume2').value;
  document.getElementById("play2").onclick = function(){audio2.play()}
  document.getElementById("pause2").onclick = function(){audio2.pause()}
  document.getElementById("stop2").onclick = function(){audio2.load()}
  //Estructura para reproducir el sonido 4
//  var artist_mini_audio = document.getElementById('audio3');
  audio3.volume = document.getElementById('volume3').value;
  document.getElementById("play3").onclick = function(){audio3.play()}
  document.getElementById("pause3").onclick = function(){audio3.pause()}
  document.getElementById("stop3").onclick = function(){audio3.load()}
  //Estructura para reproducir el sonido 5
//  var artist_mini_audio = document.getElementById('audio4');
  audio4.volume = document.getElementById('volume4').value;
  document.getElementById("play4").onclick = function(){audio4.play()}
  document.getElementById("pause4").onclick = function(){audio4.pause()}
  document.getElementById("stop4").onclick = function(){audio4.load()}
  //Estructura para reproducir el sonido 6
//  var artist_mini_audio = document.getElementById('audio5');
  audio5.volume = document.getElementById('volume5').value;
  document.getElementById("play5").onclick = function(){audio5.play()}
  document.getElementById("pause5").onclick = function(){audio5.pause()}
  document.getElementById("stop5").onclick = function(){audio5.load()}
  //Estructura para reproducir el sonido 7
//  var artist_mini_audio = document.getElementById('audio7');
  audio7.volume = document.getElementById('volume7').value;
  document.getElementById("play7").onclick = function(){audio7.play()}
  document.getElementById("pause7").onclick = function(){audio7.pause()}
  document.getElementById("stop7").onclick = function(){audio7.load()}
  //Estructura para reproducir el sonido 8
//  var artist_mini_audio = document.getElementById('audio8');
  audio8.volume = document.getElementById('volume8').value;
  document.getElementById("play8").onclick = function(){audio8.play()}
  document.getElementById("pause8").onclick = function(){audio8.pause()}
  document.getElementById("stop8").onclick = function(){audio8.load()}
  //Estructura para reproducir el sonido 9
//  var artist_mini_audio = document.getElementById('audio9');
  audio9.volume = document.getElementById('volume9').value;
  document.getElementById("play9").onclick = function(){audio9.play()}
  document.getElementById("pause9").onclick = function(){audio9.pause()}
  document.getElementById("stop9").onclick = function(){audio9.load()}
  //Estructura para reproducir el sonido 10
  //var artist_mini_audio = document.getElementById('audio10');
  audio10.volume = document.getElementById('volume10').value;
  document.getElementById("play10").onclick = function(){audio10.play()}
  document.getElementById("pause10").onclick = function(){audio10.pause()}
  document.getElementById("stop10").onclick = function(){audio10.load()}
  //Estructura para reproducir el sonido 11
  //var artist_mini_audio = document.getElementById('audio11');
  audio11.volume = document.getElementById('volume11').value;
  document.getElementById("play11").onclick = function(){audio11.play()}
  document.getElementById("pause11").onclick = function(){audio11.pause()}
  document.getElementById("stop11").onclick = function(){audio11.load()}
  //Estructura para reproducir el sonido 12
  //var artist_mini_audio = document.getElementById('audio12');
  audio12.volume = document.getElementById('volume12').value;
  document.getElementById("play12").onclick = function(){audio12.play()}
  document.getElementById("pause12").onclick = function(){audio12.pause()}
  document.getElementById("stop12").onclick = function(){audio12.load()}
});
