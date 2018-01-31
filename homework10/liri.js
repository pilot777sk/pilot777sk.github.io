var request = require('request');

var fs = require("fs");

var keys = require('./keys.js');

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');



var spotify = new Spotify({
    id: '4923644b8d074dc7a86f90b7c8101803',
    secret: 'cbf5a0ea31fc403ab47334bd71073c53'
});

var getTweets = function() {
    var client = new Twitter(keys.twitterKeys);

    var params = {
        screen_name: 'pilot777sk',
        count: 10
    };

    //console.log(client);

    client.get("statuses/user_timeline", params, function(error, tweets, response) {
        if (!error) {

            for (var i = 0; i < tweets.length; i++) {
                console.log("************");
                console.log(tweets[i].created_at)
                console.log(tweets[i].text);
                console.log("************");
            }
        } else {
            console.log(error);
        }
    });

}
/*var getArtist = function(artist) {
    return artist.name;
}  */

var getSpotify = function(songName) {
        console.log("getSpotify fired", spotify);
        spotify.search({
            type: 'track',
            query: songName
        }, function(err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            }
            if(songName ===""){
            	console.log('++++++++++++++');
            	console.log('Artist: Ace of Base');
            	console.log(Song: The Sign);
            	console.log('++++++++++++++');
            }
            else{
            var songs = data.tracks.items[i];

            console.log(songs);
            for (var i = 0; i < songs.length; i++) {
            	console.log(songs[i]);
                console.log(i);
                console.log('artist: ' + songs[i].artist.map(getArtist));
                console.log('song name: ' + songs[i].name);
                console.log('preview song: ' + songs[i].preview_url);
                console.log('album: ' + songs[i].album.name);
                console.log('++++++++++++++++++++++++++++++++++++')

            }
        }
        });
    }
    /*
    OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=2b051efa

    var getMovie = function(movieTitle) {

        
        request('http://www.omdbapi.com/?t=' + movieName + '&r=json', function(error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode= 200); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.

            var jsonData = JSON.parse(body);

            console.log('Title: ' + jsonData.Title);
            console.log('Year:' + jsonData.Year);
            console.log('Rated:' + jsonData.Rated);
            console.log('IMDB Rating' + jsonData.imdbRating);
            console.log('Country: ' + jsonData.Country);
            console.log('Language:' + jsonData.Language);
            console.log('Plot:' + jsonData.Plot);
            console.log('Actors: ' + jsonData.Actors);
            console.log('Rotten tomatoes rating: ' + jsonData.tomatoRating);
            console.log('Rotten tomatoes URL: ' + jsonData.tomatoURL);
        }

        });
    }
    */
var pick = function(caseData, functionData) {
    //console.log("pick fired", caseData, functionData);
    switch (caseData) {
        case 'my-tweets':
            //console.log("case tweets");
            getTweets();
            break;
        case 'spotify-this-song':
            //console.log("case spotify");
            getSpotify(functionData);
            break;
        case 'movie-this':
            //console.log("case movie");
            getMovie(functionData);
            break;
        default:
            console.log("Liri does not know that");
    }
}


var run = function(argOne, argTwo) {
    pick(argOne, argTwo);
};
console.log(process.argv[2]);
console.log(process.argv[3]);

run(process.argv[2], process.argv[3]);