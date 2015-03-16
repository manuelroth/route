'use strict';

$(function() {
    function getUrlVar(key) {
        var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search);
        return result && unescape(result[1]) || "";
    }

    var android = getUrlVar('android');
    var ios = getUrlVar('ios');
    var bla = getUrlVar('bka');
    console.log(android);
    console.log(bla);
    if (android !== '' && navigator.userAgent.match(/(Android)/)) {
        window.location.href = android;
    }

    if (ios !== '' && navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        window.location.href = ios;
    }

    $('#shorten').on('click', function() {
        var url1 = $('#field1').val();
        var url2 = $('#field2').val();
        var longUrl;
        var shortUrl;
        if (url1 === '' || url2 === '') {
            $('#shortLink').html('Please enter appstore links');
        } else {
            longUrl = 'http://manuelroth.me/route/?' + 'ios=' + url1 + '&android=' + url2;

            var request = gapi.client.urlshortener.url.insert({
                'resource': {
                    'longUrl': longUrl
                }
            });
            request.then(function(response) {
                $('#shortLink').html(response.result.id);
            }, function(reason) {
                console.log('Error: ' + reason.result.error.message);
            });
        }
    });
});