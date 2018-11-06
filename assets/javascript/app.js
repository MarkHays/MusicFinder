// var config = {
//     apiKey: "AIzaSyD_HWz0DyW70i9wsEyKU0j8U-MEkzb0WCA",
//     authDomain: "walmart-list.firebaseapp.com",
//     databaseURL: "https://walmart-list.firebaseio.com",
//     projectId: "walmart-list",
//     storageBucket: "gs://walmart-list.appspot.com",
//     messagingSenderId: "49914300938",
// };

// var database = firebase.database();

// var musicEntry = database.ref().push({
//     "placeholder": "placeholder"
// });

// //https://console.firebase.google.com/u/0/project/walmart-list/database/walmart-list/data

$("#searchMusixMatchButton").on("click", function() {
    event.preventDefault();
    var musixAPIKey = "649aebb6c93238abb42f188056ea802a";
    var youTubeAPIKey = "AIzaSyCqNAG9PCjtgym4szadGM-KYmiWgrVYICM"
    var searchMusixMatch = $("#searchMusixMatchValue").val().trim();
    var MusixMatchURL = "http://api.musixmatch.com/ws/1.1/search?q=" + searchMusixMatch + "&apikey=" + musixAPIKey;
    var youTubeURL =  "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + youTubeAPIKey + "&q=" + searchMusixMatch;

    $.ajax({
        url: MusixMatchURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            console.log(response);
        });

    $.ajax({
        url: youTubeURL ,
        method: "GET"
    })
      .then(function(){
          var ytResults = response.data;
          console.log(response)
          console.log(ytResults)
      })
});

//============
//GIT COMMANDS
//============

// git checkout -B [branch-name] :: to make a new branch
// git checkout [branch name] :: to switch branches
// git merge [branch name] :: to merge [branch name] into the current branch you're on from "git checkout"
// git status :: shows what needs to be done
// git add -A :: to add your new content
// git commit -m "placeholder" :: to commit your new content
// git push origin [branch-name] :: to push changes to a/your branch
// git branch :: to show in (in green) what branch you are currently on

//============================
//OTHER SHORTCUTS AND COMMANDS
//============================

// code . in order to open up in vs code
// cmd+k is to clear out terminal
// lgtm "looks good to me"; used sometimes in pull requests
// mvp: "minimum viable product"
