var config = {
    apiKey: "AIzaSyD_HWz0DyW70i9wsEyKU0j8U-MEkzb0WCA",
    authDomain: "walmart-list.firebaseapp.com",
    databaseURL: "https://walmart-list.firebaseio.com",
    projectId: "walmart-list",
    storageBucket: "gs://walmart-list.appspot.com",
    messagingSenderId: "49914300938",
  };
  firebase.initializeApp(config);

var database = firebase.database();

var trainEntry = database.ref().push({
    "placeholder": "placeholder"
});

// https://console.firebase.google.com/u/0/project/walmart-list/database/walmart-list/data


var walmartAPI = "http://api.walmartlabs.com/v1/search?apiKey={apiKey}&query={UPC"
var googleAPI ="https://maps.googleapis.com/maps/api/js?key=AIzaSyCqNAG9PCjtgym4szadGM-KYmiWgrVYICM&callback=initMap"

$.ajax({
    url: walmartAPI,
    method: "GET"
})

$.ajax({
    url: googleAPI,
    method: "GET"
})



/* <th scope="row">1</th>
    <td id="itemProduct">Milk</td>
    <td id="itemBrand">Praire Farms</td>
    <td id="itemCost">$4.03</td>
    <td id="itemQuantity">2</td>
    <td id="itemAvailability">Yes/No</td>
    <td id="itemTotal">$$$</td> */

var itemCost = $("#itemCost").val().trim(); //this is merely a placeholder until we get the API results
var itemQuantity = "-"
var itemCalculated = itemCost * itemQuantity;
$("#itemTotal").text(itemCalculated);

var quantityCalculated = 0
$("#quantityButtonPlus").on("click", function () {
    quantityCalculated++;
    $("#itemQuantity").text(quantityCalculated);
})
$("#quantityButtonMinus").on("click", function () {
    if (quantityCalculated === 0) {
        //DO NOTHING
    } else {
        quantityCalculated--;
        $("#itemQuantity").text(quantityCalculated);
    }
})

console.log("HI!");


//=================

var searchGroceriesValue = $("#searchGroceries").val().trim();
$("#searchGroceriesButton").on("click", function() {

});



// git checkout -B [branch-name] :: to make a new branch
// git checkout [branch name] :: to switch branches
// git merge [branch name] :: to merge [branch name] into the current branch you're on from "git checkout"
// git status [shows what needs to be done]
// git push origin [branch-name] :: to 

// code . in order to open up in vs code
// cmd+k is to clear out terminal
//lgtm "looks good to me"; used sometimes in pull requests
//MVP: "minimum viable product"
//