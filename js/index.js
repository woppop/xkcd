$(function() {

		var comics = ['612','246','387','202','236','262','325','385','243','233'],
			counter = 0,
			comicNumber = comics[counter];
		// loops through comics and calls the function to get comics
		/*for (var i = 0; i < comics.length; i++) {
			var comicNumber = comics[i];
			getComic(comicNumber);
		}*/
		
		getComic(comicNumber);
		
    // takes a comic number and calls the data for it
		function getComic(comicNumber) {
		  $.ajax({
		        url: 'http://xkcd.com/' + comicNumber + '/info.0.json',
		        dataType: 'json',
		        beforeSend: function(xhr) {
					xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://students.philau.edu');
				},
		        type: 'GET',
		        success: function (data) {
		            displayComic(data);
		        }
		    }); // end ajax call
		    
		    // displays comic data on page
		    function displayComic(data) {
		    	$('.title').text(data.title);
				$('.month').text(data.month);
				$('.day').text(data.day);
				$('.year').text(data.year);
				$('.image').html('<img src="' + data.img + '"/>');
				$('.alt').text(data.alt);
			} // end displayComic function
			
			$('#next').on('click', function () {
	        	counter = (counter + 1) % comics.length;
	        	comicNumber = comics[counter];
				$('.title').text();
				$('.month').text();
				$('.day').text();
				$('.year').text();
				$('.image').html();
				$('.alt').text();
	        	getComic(comicNumber);
			}); // end comicNumber function
		} // end getComic function
    
}); // end doc