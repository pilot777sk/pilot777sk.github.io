var keys = require('./keys.js');

var Twitter = require('twitter');

var client = new Twitter(keys);

var getTweets = function() {

    var params = {
        screen_name: 'pilot777sk'
    };

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            //console.log(tweets);
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log(' ');
                console.log(tweets[i].text);
            }
        }
    });
}

var pick = function(caseData, functionData){
	switch(caseData){
		case 'my-tweets':
			getTweets();
			break;
		default:
		console.log("Liri does not know that");
	}
}
var run = function(argOne, argTwo){
	pick(argOne, argTwo);
};
run(process.argv[2], process.argv[3]);