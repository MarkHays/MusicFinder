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


// var walmartAPI = "http://api.walmartlabs.com/v1/search?apiKey={apiKey}&query={UPC"
// var googleAPI ="https://maps.googleapis.com/maps/api/js?key=AIzaSyCqNAG9PCjtgym4szadGM-KYmiWgrVYICM&callback=initMap"
var title = "jewelry";
var etsyAPI = "https://openapi.etsy.com/v2/listings/active?limit=50&offset=0&api_key=xkvgjyiv47crd1nw11ir0ufh"

// $.ajax({
//     url: walmartAPI,
//     method: "GET"
// })

// $.ajax({
//     url: googleAPI,
//     method: "GET"
// })

$.ajax({
    url: etsyAPI,
    method: "GET"
})

    .then(function (response) {
        var results = response.data;
        console.log(response);
    });

var itemCost = $("#itemCost").val(); //this is merely a placeholder until we get the API results
var itemQuantity = "-"
var itemCalculated = itemCost * itemQuantity;
$("#itemTotal").text(itemCalculated);

var quantityCalculated = 0 ;
$("#itemQuantity").text(quantityCalculated);
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

var searchGroceriesValue = $("#searchGroceries").val()
$("#searchGroceriesButton").on("click", function () {
    event.preventDefault();
    //MULTIPLYING TOTAL FOR PRODUCT 1
    var itemQuantity1 = $("#itemQuantity1").val().trim();
    console.log("Quantity: " + itemQuantity1);
    var itemCost1 = $("#itemCost1").text();
    console.log("Cost: " + itemCost1);
    var totalCost1 = itemQuantity1 * itemCost1;
    console.log("Total: " + totalCost1);
    $("#totalCost1").text(totalCost1);
    console.log("----------");
    
    //MULTIPLYING TOTAL FOR PRODUCT 2
    var itemQuantity2 = $("#itemQuantity1").val().trim();
    console.log("Quantity: " + itemQuantity2);
    var itemCost2 = $("#itemCost2").text();
    console.log("Cost: " + itemCost2);
    var totalCost2 = itemQuantity2 * itemCost2;
    console.log("Total: " + totalCost2);
    $("#totalCost2").text(totalCost2);
    console.log("----------");
    
    //MULTIPLYING TOTAL FOR PRODUCT 3
    var itemQuantity3 = $("#itemQuantity1").val().trim();
    console.log("Quantity: " + itemQuantity3);
    var itemCost3 = $("#itemCost3").text();
    console.log("Cost: " + itemCost3);
    var totalCost3 = itemQuantity3 * itemCost3;
    console.log("Total: " + totalCost3);
    $("#totalCost3").text(totalCost3);
    console.log("----------");
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
