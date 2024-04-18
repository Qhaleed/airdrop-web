var all = document.getElementById('all');
var nft = document.getElementById('nft');
var memeCoin = document.getElementById('memeCoin');
var newCoin = document.getElementById('new');
var trending = document.getElementById('trending');
var item = document.getElementById('airdrop-container');


setTimeout(() => {
    item.style.transition = "1000ms";
    item.style.opacity = "1";
}, 500);

function filterAirdrops(category) {
    var items = document.getElementsByClassName("airdrop-item");
    var categoryButtons = document.getElementsByClassName("category-btn");
    var buttons = document.querySelectorAll(".category-container button");
    


    // For category background color
    buttons.forEach(function(button) {
        button.style.backgroundColor = "black";
        button.style.color = "white";
    });
    // Set background color of the clicked button
    var activeButton = document.getElementById(category + "Btn");

    activeButton.style.backgroundColor = "white";
    
    activeButton.style.color = "black";
    
    

    // Reset display properties of all items and apply smooth transition
    for (var i = 0; i < items.length; i++) {
        items[i].style.transition = "opacity 0.5s";
        items[i].style.opacity = "1";
        items[i].style.display = "block";
    }

    // Apply filtering based on the selected category
    for (var i = 0; i < items.length; i++) {
        var categories = items[i].getAttribute("data-categories").split(" ");

        if (category === "all" || categories.includes(category)) {
            // Show items matching the selected category or show all items
            items[i].style.opacity = "1";
        } else {
            // Hide items not matching the selected category
            items[i].style.opacity = "0";
            items[i].style.display = "none";
        }
    }

    // Reset background color of all category buttons
    for (var i = 0; i < categoryButtons.length; i++) {
        categoryButtons[i].classList.remove("active");
    }

    // Set background color of the clicked category button
    var activeButton = document.getElementById(category + "Btn");
    activeButton.classList.add("active");
}
