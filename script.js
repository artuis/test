var SpotifyWebApi = require('spotify-web-api-js');
var spotifyApi = new SpotifyWebApi();

var client_id = 'e02d32c1b0bd4912ac276af9821e6f36'; // Your client id
var client_secret = '7325643c19d54ae281990a8f2eb64d86'; // Your secret

// your application requests authorization
var encoded = btoa(client_id + ':' + client_secret);
$.ajax({
  url: 'https://accounts.spotify.com/api/token',
  type: 'POST',
  data: {
       grant_type : "client_credentials"
  },
  headers: {
      Authorization: 'Basic ' + encoded
  },
  dataType: 'json'
  }).then(function(data) {
    console.log(data.access_token);
    spotifyApi.setAccessToken(data.access_token);
    spotifyApi.getPlaylist("1vFqDEkllm3fDKGfHO0FEm").then(function(response) {
      console.log(response.external_urls.spotify);
      

    })

  });

  

