var config = {
    apiKey: "AIzaSyD_HWz0DyW70i9wsEyKU0j8U-MEkzb0WCA",
    authDomain: "walmart-list.firebaseapp.com",
    databaseURL: "https://walmart-list.firebaseio.com",
    projectId: "walmart-list",
    storageBucket: "gs://walmart-list.appspot.com",
    messagingSenderId: "49914300938",
};

var database = firebase.database();

var trainEntry = database.ref().push({
    "placeholder": "placeholder"
});

// https://console.firebase.google.com/u/0/project/walmart-list/database/walmart-list/data


$("searchPetsButton").on("click", function() {
    // var walmartAPI = "http://api.walmartlabs.com/v1/search?apiKey={apiKey}&query={UPC"
    // var googleAPI ="https://maps.googleapis.com/maps/api/js?key=AIzaSyCqNAG9PCjtgym4szadGM-KYmiWgrVYICM&callback=initMap"
    // var etsyAPI = "https://openapi.etsy.com/v2/listings/active?limit=50&offset=0&api_key=xkvgjyiv47crd1nw11ir0ufh"
    
    var APIKey = "4e8fa80a72539154b5bb5ed8f86127ab";
    var searchPetsValue = $("#searchPetsValue");
    var petfinderAPI = "http://api.petfinder.com/my.method?key=" + APIKey + "&animal=" + searchPetsValue;

    // $.ajax({
    //     url: walmartAPI,
    //     method: "GET"
    // })
    
    // $.ajax({
    //     url: googleAPI,
    //     method: "GET"
    // })
    
    // $.ajax({
    //     url: etsyAPI,
    //     method: "GET"
    // })
    
    $.ajax({
        url: petfinderAPI,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            console.log(response);
        });
});

var itemCost = $("#itemCost").val(); //this is merely a placeholder until we get the API results
var itemCalculated = itemCost * itemQuantity;
$("#itemTotal").text(itemCalculated);

var quantityCalculated = 0;
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
$("#searchGroceriesButton").on("click", function () {
    alert("This is a placeholder for the API");
});


$("#calculateGroceriesButton").on("click", function () {
    event.preventDefault();
    //MULTIPLYING TOTAL FOR PRODUCT 1
    var itemQuantity1 = $("#itemQuantity1").val().trim();
    console.log("Quantity: " + itemQuantity1);
    var itemCost1 = $("#itemCost1").text();
    console.log("Cost: " + itemCost1);
    var totalCost1 = itemQuantity1 * itemCost1;
    var totalCostConverted1 = totalCost1.toFixed(2);
    console.log("Total: " + totalCostConverted1);
    $("#totalCost1").text(totalCostConverted1);
    console.log("----------");

    //MULTIPLYING TOTAL FOR PRODUCT 2
    var itemQuantity2 = $("#itemQuantity2").val().trim();
    console.log("Quantity: " + itemQuantity2);
    var itemCost2 = $("#itemCost2").text();
    console.log("Cost: " + itemCost2);
    var totalCost2 = itemQuantity2 * itemCost2;
    var totalCostConverted2 = totalCost2.toFixed(2);
    console.log("Total: " + totalCostConverted2);
    $("#totalCost2").text(totalCostConverted2);
    console.log("----------");

    //MULTIPLYING TOTAL FOR PRODUCT 3
    var itemQuantity3 = $("#itemQuantity3").val().trim();
    console.log("Quantity: " + itemQuantity3);
    var itemCost3 = $("#itemCost3").text();
    console.log("Cost: " + itemCost3);
    var totalCost3 = itemQuantity3 * itemCost3;
    var totalCostConverted3 = totalCost3.toFixed(2);
    console.log("Total: " + totalCostConverted3);
    $("#totalCost3").text(totalCostConverted3);
    console.log("----------");

    //ADDING TOTAL GROCERY COST BASED ON ALL PRODUCTS
    totalGroceryCost = +totalCostConverted1 + +totalCostConverted2 + +totalCostConverted3;
    $("#totalGroceryCost").text(totalGroceryCost).toFixed(2);
});

//============
//GIT COMMANDS
//============
// git checkout -B [branch-name] :: to make a new branch
// git checkout [branch name] :: to switch branches
// git merge [branch name] :: to merge [branch name] into the current branch you're on from "git checkout"
// git status :: shows what needs to be done
//git add -A :: to add your new content
//git commit -m "placeholder" :: to commit your new content
// git push origin [branch-name] :: to push changes to a/your branch

//============================
//OTHER SHORTCUTS AND COMMANDS
//============================
// code . in order to open up in vs code
// cmd+k is to clear out terminal
//lgtm "looks good to me"; used sometimes in pull requests
//MVP: "minimum viable product"


//HERE'S MY CHANGE... AGAIN