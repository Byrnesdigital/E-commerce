const redirect_uri = "https://young-reef-87125.herokuapp.com/index.html";
const client_secret = "";
const client_id = "49c21ca8c1754ea7800c50be00dae758";
const playlist_default = "02SelNGqy8Op0dqp1iXZtz";


var sing = {};
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

var getTracksByPlaylist = function(user_id,playlist_id,accessToken){
  $.ajax({
              url: 'https://api.spotify.com/v1/users/'+user_id+'/playlists/'+playlist_id+'/tracks',
              headers: {
                 'Authorization': 'Bearer ' + accessToken
              },
              data:{
                fields:items(tracks)
              },
              method: 'GET',
              success: function(response) {
                console.log(response);
              },
              dataType: 'json',
              error: function(e) {
                  console.error(e);
              }
          });
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
}

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


document.addEventListener("DOMContentLoaded",function(event){//Una vez la página ha cargado.

  var params = getParamsURL();
  var access_token = params.access_token;

  if(!access_token){
    authenticationAPI();
  }

  console.log(access_token)
  getTracksByPlaylist("fabiing10",playlist_default,access_token);
});

/*
var authenticationAPI = function(){
  var scope = 'user-read-private user-read-email';
   var url = 'https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + client_id +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent(redirect_uri);

  jQuery.ajax( {
    url: 'https://api.spotify.com/v1/users/fabiing10/playlists/02SelNGqy8Op0dqp1iXZtz/tracks',
    type: 'POST',
    data: { content: 'testing test' },
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( "Authorization", "BEARER " + access_token );
    },
    success: function( response ) {
        // response
    }
  } );

}

var getPlaylist = function(URL){
  jQuery.ajax( {
    url: 'https://api.spotify.com/v1/users/fabiing10/playlists/02SelNGqy8Op0dqp1iXZtz/tracks',
    type: 'POST',
    data: { content: 'testing test' },
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( "Authorization", "BEARER " + access_token );
    },
    success: function( response ) {
        // response
    }
} );

};*/
