$(function () {
	$('#shorten').on('click', function(){
		var login = "o_5urbqp2n67";
		var apiKey = "R_27a6150b573244c287da62488ffdbf56";
		var url1 = $('#field1').val();
		var url2 = $('#field2').val();
		var longUrl;
		var shortUrl = "short";
		if(url1 === "" || url2 === ""){
			$('#shortLink').html("Please enter appstore links");
		}else{
			longUrl = encodeURIComponent("https://manuelroth.github.io/route?"+"ios="+url1+"&android="+url2);
			getShortUrl(longUrl, login, apiKey, function(shortUrl, status) {
				console.log(status);
				console.log(shortUrl);
			});
			$('#shortLink').html(shortUrl);
		}
	});

	function getShortUrl(longUrl, login, apiKey, func){
		$.getJSON(
        "http://api.bitly.com/v3/shorten?callback=?", 
        { 
            "format": "json",
            "apiKey": apiKey,
            "login": login,
            "longUrl": longUrl
        },
        function(response)
        {
            func(response.data.url, response.status_txt);
        }
    );
	}
});