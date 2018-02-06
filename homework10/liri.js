require("dotenv").config();

var request = require('request');

var fs = require("fs");

var keys = require('./keys.js');

console.log(keys);

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitterKeys);


var getTweets = function() {

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
    //songName = process.argv[3];

    spotify.search({
            type: 'track',
            query: songName
        },
        function(err, data) {


            if (err) {
                console.log('Error occurred: ' + err);
                return;
            }
            if (songName === "") {
                console.log('++++++++++++++');
                console.log("Artist: Ace of Base");
                console.log("Song: The Sign");
                console.log('++++++++++++++');
            } else {
                var songs = data.tracks.items;
                for (var i = 0; i < songs.length; i++) {

                    console.log(i);
                    console.log("Song: " + songs.song);
                    console.log("Artist(s):" + songs[i].artists[i].name);
                    console.log("Album: " + songs[i].album.name);
                    console.log("Preview link: " + songs[i].preview_url);
                    console.log('++++++++++++++++++++++++++++++++++++');

                }
            }
        }
	);
}

    // var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


var getMovie = function(movieThis) {


    request('http://www.omdbapi.com/?i=tt3896198&apikey=2b051efa/?t=' + movieName + '&r=json',
	    function(error, response, body) {
	     	if (err) {
	            console.log('Error occurred: ' + err);
	            return;
	        }
	        if (movieName === "") {
	        	movieName = "Mr.Nobody"
	        }
	        console.log('error:', error); // Print the error if one occurred
	        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
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
    );
}

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
var argOne = process.argv[2];
var argTwo = process.argv[3];

//process argv 2 & 3 and now argOne and argTwo and passed to "pick"
var run = function(argOne, argTwo) {
    pick(argOne, argTwo);
};
console.log(process.argv[2]);
console.log(process.argv[3]);
// grab the inputs from position 2 & 3 of the command line

run(process.argv[2], process.argv[3]);