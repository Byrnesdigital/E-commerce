document.addEventListener("DOMContentLoaded",function(event){//Una vez la página ha cargado.
  var list_gallery = document.querySelectorAll(".artist-mini");//obtiene todos los div con clase artist-mini
  list_gallery = Array.from(list_gallery);//vuelve una lista en arreglo
  var aplha_order_button = document.querySelector("#alph-order-button");//obtiene el botón de ordenar alfabeticamente
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
  var play = document.querySelectorAll(".reproducir");
  play = Array.from(play);
  console.log("play:  "+play);
  play.forEach(function(element_li, index, array){
    element_li.addEventListener("click", function(){
      var repplay = document.getElementById("reproducir").play();
    });
  });
});
