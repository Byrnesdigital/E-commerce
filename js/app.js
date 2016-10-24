const redirect_uri = "https://young-reef-87125.herokuapp.com/index.html";
const client_secret = "";
const client_id = "49c21ca8c1754ea7800c50be00dae758";
const playlist_default = "02SelNGqy8Op0dqp1iXZtz";


var Track = {};

var tracks_list = Array();
var shopping_list = Array();

var searchAlbums = function(query) {
    $.ajax({
        method: "GET",
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'album'
        },
        success: function (response) {
            console.log(response);
        }
    });
};


var processInLocalStorage = function(data,option){

    if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      switch (option.operation) {
        case "saveTracks":
            localStorage.setItem(option.nameProcess,JSON.stringify(data));
          break;
        case "productPage":
            localStorage.setItem(option.nameProcess,data);
        break;
        case "pageStatus":
              localStorage.setItem(option.nameProcess,data);
        break;
        case "updateShopping":
              localStorage.setItem(option.nameProcess,JSON.stringify(data));
        break;

      default:

      }
    } else {
      // Sorry! No Web Storage support..
    }
}

var loadData = function(){
  /*var params = getParamsURL();
  var access_token = params.access_token;

  if(!access_token){
    authenticationAPI();
  }
  */
    access_token = null;
    var div_element,content;
    var dataResult = JSON.parse(getTracksByPlaylist("fabiing10",playlist_default,access_token));

    return dataResult;

};


var loadPage = function(page,data = null){
  var dataResult = data;
  if(page == "home"){

    dataResult.forEach(function(row,index){
        div_element = document.createElement("div");
        div_element.setAttribute("class","col-lg-3 col-md-4 col-xs-6 thumb artist-mini");
        a = document.createElement("a");
        a.setAttribute("class","thumbnail");
        a.setAttribute("data_id",row.track_id);
        img = document.createElement("img");
        img.src =row.image_album;
        img.setAttribute("class","img-responsive");
        a.appendChild(img);
        p1 = document.createElement("p");
        p1.textContent = row.track_name;
        p1.setAttribute("class","artist-data artist-mini-name");
        p2 = document.createElement("p");
        p2.textContent = row.popularity_track;
        p2.setAttribute("class","artist-mini-position");
        p2.setAttribute("data-position",row.popularity_track);
        a.appendChild(p1);
        a.appendChild(p2);
        div_element.appendChild(a);
        content = document.getElementById("artist-gallery");
        content.appendChild(div_element);
    });


    var list_gallery = document.querySelectorAll(".artist-mini");//obtiene todos los div con clase artist-mini
    list_gallery = Array.from(list_gallery);//vuelve una lista en arreglo
    var aplha_order_button = document.querySelector("#alph-order-button");//obtiene el botÃ³n de ordenar alfabeticamente
    aplha_order_button.addEventListener("click", function(){//evento del botÃ³n alfabetico
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
        document.querySelector("#artist-gallery").appendChild(element);//Adiciona un nodo como Ãºltimo hijo de un nodo
      });
    });


    var number_order_button = document.querySelector("#num-order-button");//obtiene el botÃ³n de ordenar numericamente
    number_order_button.addEventListener("click", function(){
      document.querySelector("#artist-gallery").innerHTML = "";
      list_gallery.sort(function(a,b){
        if(Number(a.querySelector(".artist-mini-position").getAttribute("data-position")) > Number(b.querySelector(".artist-mini-position").getAttribute("data-position"))){
          return -1;
        }else if(Number(a.querySelector(".artist-mini-position").getAttribute("data-position")) < Number(b.querySelector(".artist-mini-position").getAttribute("data-position"))){
          return 1;
        }else{
          return 0;
        }
      });
      list_gallery.forEach(function(element ,index ,array){
        document.querySelector("#artist-gallery").appendChild(element);
      });
    });

  }

};

var getTracksByPlaylist = function(user_id,playlist_id,accessToken){

    /*var params = "/?fields=items(track)";
    $.ajax({
        url: 'https://api.spotify.com/v1/users/'+user_id+'/playlists/'+playlist_id+'/tracks'+params,
        headers: {
           'Authorization': 'Bearer ' + accessToken
        },
        method: 'GET',
        success: function(response) {
          console.log(response);
        },
        dataType: 'json',
        error: function(e) {
            console.error(e);
        }
    });*/

    if(!localStorage.getItem("tracks")){

      for (var i =0; i < dataList.items.length; i++ ) {

          //Definir Precio
          var x = String((Math.random() * 3) + 0.5);
          var price = x.substring(0,4);

          var newTrack = {};
          newTrack.track_id = dataList.items[i].track.id;
          newTrack.track_name = dataList.items[i].track.name;
          newTrack.popularity_track = dataList.items[i].track.popularity;
          newTrack.preview_track = dataList.items[i].track.preview_url;
          newTrack.album_name = dataList.items[i].track.album.name;
          newTrack.image_album = dataList.items[i].track.album.images[0].url;
          newTrack.artist_name = dataList.items[i].track.artists[0].name;
          newTrack.artist_id = dataList.items[i].track.artists[0].id;
          newTrack.available = true;
          newTrack.available_cant = 10;
          newTrack.price = price;
          console.log("Nombre => "+dataList.items[i].track.name+"Nombre => ");
          tracks_list.push(newTrack);
      }

      var option = {};
      option.operation = "saveTracks";
      option.nameProcess = "tracks";
      processInLocalStorage(tracks_list,option);
    }

    var dataResult = localStorage.getItem("tracks");

    return dataResult;

};

function generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }


var getParamsURL = function () {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
};

var authenticationAPI = function(){
      var state = generateRandomString(10);
      var scope = 'user-read-private user-read-email';
      var url = 'https://accounts.spotify.com/authorize';
      url += '?response_type=token';
      url += '&client_id=' + encodeURIComponent(client_id);
      url += '&scope=' + encodeURIComponent(scope);
      url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
      url += '&state=' + encodeURIComponent(state);
      window.location = url;

};


document.addEventListener("DOMContentLoaded",function(event){

  var dataResult;

  if(localStorage.getItem("tracks")){
       dataResult = JSON.parse(localStorage.getItem("tracks"));
  }else{
       dataResult = loadData();
  }


  if(localStorage.getItem("pageStatus") == "product"){
    var x = Math.floor((Math.random() * 90) + 1);
    var count = 0;
    dataResult.forEach(function(row,index){
        if(row.track_id == localStorage.getItem("productId")){
          $('.artist').html(row.track_name);
          $(".img-track").attr("src", row.image_album);
          $("#audio").attr("src", row.preview_track);
          $('.price').html(row.price);
          $('#popularity').html(row.popularity_track);
          $('#quantity').html(row.available_cant);
          $('.orderbutton').attr("product-id",row.track_id);
          $('.add-product').attr("product-id",row.track_id);
        }
        //Create related tracks
        if(count>=x & count<=(x+3)){
          div_element = document.createElement("div");
          div_element.setAttribute("class","col-sm-3 col-xs-6");
          a = document.createElement("a");
          a.setAttribute("class","thumbnail");
          a.setAttribute("data_id",row.track_id);
          img = document.createElement("img");
          img.src =row.image_album;
          img.setAttribute("class","img-responsive portfolio-ite");
          a.appendChild(img);
          div_element.appendChild(a);
          content = document.getElementById("relacionados");
          content.appendChild(div_element);
        }
        count++;
    });



    //Add product to shopping cart
    var add_product = document.querySelector(".add-product");
    add_product.addEventListener("click", function(){
      if(localStorage.getItem("productsShop")){
        items = JSON.parse(localStorage.getItem("productsShop"));
        items.forEach(function(row,index){
          shopping_list.push(row);
        });
      }
      var product_id = this.getAttribute("product-id");
      shopping_list.push(product_id);
      var option = {operation:"updateShopping",nameProcess:"productsShop"};
      processInLocalStorage(shopping_list,option);
      $(".info-box").html("");
      $(".info-box").html("<p class='success-box'>Se ha agregado correctamente al carro de compras</p>");
      $(".view-product").fadeIn();
      $(".add-product").fadeOut();
    });


    var audio = document.getElementById('audio');
    document.getElementById("play").onclick = function(){audio.play();};
    document.getElementById("pause").onclick = function(){audio.pause();};
    document.getElementById("stop").onclick = function(){audio.load();};



  }else if(localStorage.getItem("pageStatus") == "Home"){
      //load Home page
      loadPage("home",dataResult);
  }else if(localStorage.getItem("pageStatus") == "Shopping"){


    if(localStorage.getItem("productsShop")){
      baseProducts = loadData();
      dataProducts = JSON.parse(localStorage.getItem("productsShop"));

      var total = 0;
      dataProducts.forEach(function(data,index){
        baseProducts.forEach(function(row,index){

          if(data === row.track_id){
            tr_element = document.createElement("tr");
            tr_element.setAttribute("class","product-list");
            td = document.createElement("td");
            td.setAttribute("class","quantity");
            td.textContent = 1;
            td1 = document.createElement("td");
            td1.setAttribute("class","itemName");
            td1.textContent = row.track_name;
            td2 = document.createElement("td");
            td2.setAttribute("class","itemPrice");
            td2.textContent = row.price;
            td3 = document.createElement("td");
            td3.setAttribute("class","remove");

            span = document.createElement("span");
            span.setAttribute("class","glyphicon glyphicon-remove");
            span.setAttribute("track_id",row.track_id);
            td3.appendChild(span);

            tr_element.appendChild(td);
            tr_element.appendChild(td1);
            tr_element.appendChild(td2);
            tr_element.appendChild(td3);
            content = document.getElementById("shopping_table");
            content.appendChild(tr_element);

            total = total + parseFloat(row.price);
            console.log(data)
          }
        }); //End baseProducts Foreach
      }); //End Dataproducts Foreach

      tr_element = document.createElement("tr");
      tr_element.setAttribute("class","product-list");
      td = document.createElement("td");

      td1 = document.createElement("td");

      td2 = document.createElement("td");
      td2.setAttribute("class","itemPrice");
      td2.textContent = total+" (USD)";
      td3 = document.createElement("td");
      td3.setAttribute("class","button");

      button = document.createElement("button");
      button.setAttribute("class","btn btn-primary btn-sm");
      button.setAttribute("data-toggle","modal");
      button.setAttribute("data-target","#myModal");

      button.textContent= "Comprar";
      td3.appendChild(button);

      tr_element.appendChild(td);
      tr_element.appendChild(td1);
      tr_element.appendChild(td2);
      tr_element.appendChild(td3);
      content = document.getElementById("shopping_table");
      content.appendChild(tr_element);

      //Function Button Buy
      //Add product to shopping cart
      var buy_products = document.querySelector(".buy-product");
      buy_products.addEventListener("click", function(){

        baseProducts = loadData();
        dataPorducts = JSON.parse(localStorage.getItem("productsShop"));

        var total = 0;

        baseProducts.forEach(function(row,index){

            var newTrack = {};
            newTrack.track_id = row.track_id;
            newTrack.track_name = row.track_name;
            newTrack.popularity_track = row.popularity_track;
            newTrack.preview_track = row.preview_track;
            newTrack.album_name = row.album_name;
            newTrack.image_album = row.image_album;
            newTrack.artist_name = row.artist_name;
            newTrack.artist_id = row.artist_id;
            newTrack.available = row.available;
            newTrack.price = row.price;
            dataPorducts.forEach(function(data,index){
            if(data === row.track_id){
              newTrack.available_cant = parseInt(row.available_cant) - 1;
            }else{
              newTrack.available_cant = row.available_cant ;
            }
          }); //End Data Foreach
          tracks_list.push(newTrack);
        }); //End Base Foreach
        //localStorage.clear();
        localStorage.removeItem('tracks');
        var option = {};
        option.operation = "saveTracks";
        option.nameProcess = "tracks";
        processInLocalStorage(tracks_list,option);

        localStorage.removeItem('productsShop');

        window.location = "index.html";
      });



    }else{

    }






  }else{

  }

  var tracks_buttons =  Array.from(document.querySelectorAll(".thumbnail"));

  tracks_buttons.forEach(function(row,index){

    row.addEventListener("click", function(){
      var option = {};
      option.operation = "productPage";
      option.nameProcess = "productId";
      var product_id = this.getAttribute("data_id");
      processInLocalStorage(product_id,option);
      //Create status and redirect page
      var option_redirect = {operation:"pageStatus",nameProcess:"pageStatus"};
      processInLocalStorage("product",option_redirect);
      window.location = "productpage.html";

    });
  });










});
