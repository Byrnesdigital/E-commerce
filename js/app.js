const redirect_uri = "localhost";
const client_secret = "";
const client_id = "49c21ca8c1754ea7800c50be00dae758";


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

var authenticationAPI = function(){
  var scopes = 'user-read-private user-read-email';
  $.ajax({
      method: "GET",
      url: 'https://accounts.spotify.com/authorize',
      data: {
          response_type: 'code',
          client_id: client_id,
          scope:encodeURIComponent(scopes),
          redirect_uri:encodeURIComponent(redirect_uri)

      },
      success: function (response) {
          console.log(response);
      }
  });
  /* var url = 'https://accounts.spotify.com/authorize' +
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
  } );*/

}


document.addEventListener("DOMContentLoaded",function(event){//Una vez la página ha cargado.
  authenticationAPI();
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
