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
            console.log(results);
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




// // var itemCost = $("#itemCost").val(); //this is merely a placeholder until we get the API results
// // var itemCalculated = itemCost * itemQuantity;
// // $("#itemTotal").text(itemCalculated);

// var quantityCalculated = 0;
// $("#itemQuantity").text(quantityCalculated);
// $("#quantityButtonPlus").on("click", function () {
//     quantityCalculated++;
//     $("#itemQuantity").text(quantityCalculated);
// })
// $("#quantityButtonMinus").on("click", function () {
//     if (quantityCalculated === 0) {
//         //DO NOTHING
//     } else {
//         quantityCalculated--;
//         $("#itemQuantity").text(quantityCalculated);
//     }
// })

// //=================
// $("#searchGroceriesButton").on("click", function () {
//     event.preventDefault();
//     alert("This is a placeholder for the API");
// });


// $("#calculateGroceriesButton").on("click", function () {
//     event.preventDefault();
//     //MULTIPLYING TOTAL FOR PRODUCT 1
//     var itemQuantity1 = $("#itemQuantity1").val().trim();
//     console.log("Quantity: " + itemQuantity1);
//     var itemCost1 = $("#itemCost1").text();
//     console.log("Cost: " + itemCost1);
//     var totalCost1 = itemQuantity1 * itemCost1;
//     var totalCostConverted1 = totalCost1.toFixed(2);
//     console.log("Total: " + totalCostConverted1);
//     $("#totalCost1").text(totalCostConverted1);
//     console.log("----------");

//     //MULTIPLYING TOTAL FOR PRODUCT 2
//     var itemQuantity2 = $("#itemQuantity2").val().trim();
//     console.log("Quantity: " + itemQuantity2);
//     var itemCost2 = $("#itemCost2").text();
//     console.log("Cost: " + itemCost2);
//     var totalCost2 = itemQuantity2 * itemCost2;
//     var totalCostConverted2 = totalCost2.toFixed(2);
//     console.log("Total: " + totalCostConverted2);
//     $("#totalCost2").text(totalCostConverted2);
//     console.log("----------");

//     //MULTIPLYING TOTAL FOR PRODUCT 3
//     var itemQuantity3 = $("#itemQuantity3").val().trim();
//     console.log("Quantity: " + itemQuantity3);
//     var itemCost3 = $("#itemCost3").text();
//     console.log("Cost: " + itemCost3);
//     var totalCost3 = itemQuantity3 * itemCost3;
//     var totalCostConverted3 = totalCost3.toFixed(2);
//     console.log("Total: " + totalCostConverted3);
//     $("#totalCost3").text(totalCostConverted3);
//     console.log("----------");

//     //ADDING TOTAL GROCERY COST BASED ON ALL PRODUCTS
//     totalGroceryCost = (+totalCostConverted1 + +totalCostConverted2 + +totalCostConverted3).toFixed(2);
//     $("#totalGroceryCost").text(totalGroceryCost);
// });

// //============
// //GIT COMMANDS
// //============
// // git checkout -B [branch-name] :: to make a new branch
// // git checkout [branch name] :: to switch branches
// // git merge [branch name] :: to merge [branch name] into the current branch you're on from "git checkout"
// // git status :: shows what needs to be done
// // git add -A :: to add your new content
// // git commit -m "placeholder" :: to commit your new content
// // git push origin [branch-name] :: to push changes to a/your branch
// // git branch :: to show in (in green) what branch you are currently on

// //============================
// //OTHER SHORTCUTS AND COMMANDS
// //============================
// // code . in order to open up in vs code
// // cmd+k is to clear out terminal
// //lgtm "looks good to me"; used sometimes in pull requests
// //MVP: "minimum viable product"


// //HERE'S MY CHANGE... AGAIN
