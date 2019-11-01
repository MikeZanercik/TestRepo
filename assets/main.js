
// $(".btn-primary").on("click", function () {
//     event.preventDefault();
//     city = ($(":input.form-control").val()) || ($("button.Two").text()) ;

    
//     var APIKey = "166a433c57516f51dfab1f7edaed8413";
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response)
        
        
        
//     })
// })


$(".btn-primary").on("click", function () {
    event.preventDefault();
    keyWord = ($(":input.form-control").val());


    var APIKey = "AIzaSyDmFlD6zsHY-21J4zaP8YC9M5pLgMkrXxU";
    var queryURL = "https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=1&q=" + keyWord + "&type=video&videoEmbeddable=true&key=" + APIKey;

    // videoEmbeddable


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.items[0].id.videoId)
        videoId = response.items[0].id.videoId

        
        displayVideo = "https://www.youtube.com/embed/" + videoId;
        console.log(displayVideo)

        var video = $("#videoHere")
        video.attr("src", displayVideo)
               
        
        
    })
})









