                                                                                                                                                                                                                                                                                                                        
$(document).ready(function() {
    // displaySimsonGifs is the  function renders/display the HTML content
    // Initial array
    var gifs = ['Homer', 'Bart', 'Lisa', 'Ralph', 'Flanders' ];
    var giphyKey = "QF3kFucd2hR9YF1yzfoZxQhELUh91QK2";
        function displayGiphy() {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + " simpsons&limit=10&rating&api_key="+giphyKey;
    // Creating an AJAX call for the specific Simson button being clicked

    // This ajax call is similar working-movie lesson
            $.ajax({
                url: queryURL,
                method: "GET",
            }).done(function(response) {

            console.log(response);
                    //Creating a loop to open the data within the JSON object
                    for (var i = 0; i < response.data.length; i++) {
                    //Creating a new div to hold the Simson image
                        var gifDiv = $('<div>');
                        gifDiv.attr('class', 'gif-div');
                    //Create image tage to hold gif Append Gif and rating
                    //attact the src to the image tage See cat-button lesson    
                        var gifImg = $('<img>');
                        gifImg.attr('class', 'gifImg img-fluid');
                        gifImg.attr('data-state', 'still');
                        gifImg.attr('data-still', response.data[i].images.fixed_height_still.url);
                        gifImg.attr('data-animate', response.data[i].images.fixed_height.url);
                        imageUrl = response.data[i].images.downsized_still.url;
                        console.log('still: ' + imageUrl);
                        gifImg.attr('src', imageUrl);
                    //Find the Rating position within the object
                    // Within the new div we append a paragraph for the rating
                        var rating = $('<p>').html('Rating: ' + response.data[i].rating);
                        rating.attr('class', 'rating');
                        gifDiv.append(gifImg);
                        gifDiv.append(rating);
                        $('#giffy-area').prepend(gifDiv);
                    }
            });

        } 
          //Function for displaying Charter gifs
          // empty deletes previous items displayed
    
            function createButtons() {

                $('#button-area').empty();

                for (var ii = 0; ii < gifs.length; ii++) {
                    var gifButton = $('<button>');
                    gifButton.addClass('gif btn-group btn-group-sm');
                    gifButton.attr('data-name', gifs[ii]);
                    gifButton.text(gifs[ii]);
                    $('#button-area').append(gifButton);
                }
                
            }
             // Create buttons
             // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
             // The value is you input and the trim removes white space from the ends
            $('#search-btn').on('click', function(event) {
                event.preventDefault();       
                gif = $('#giffy-search').val().trim(); 
                gifs.push(gif);
                $('#giphy-search').val('');
                createButtons();
            });

            $(document).on('click', '.gif', function(e) {
                e.preventDefault;  
                $('#giffy-area').empty();                            
                gif = $(this).attr('data-name');
                console.log('gif: ' + gif);
                displayGiphy();
            });

            // Data State Still,Animate and an event listener function for cliclk animation
            $(document).on('click', '.gifImg', function(e) {
                e.preventDefault;  
                
                var state = $(this).attr('data-state');
                console.log(state);

                if (state === 'still') {
                    $(this).attr('data-state', 'animate');
                    $(this).attr('src', $(this).attr('data-animate'));
                } else  {
                    $(this).attr('data-state', 'still');
                    $(this).attr('src', $(this).attr('data-still'));
            }

            }); 


            createButtons();

}); // document Ready





