// Define the game states
var all = document.getElementById('all');
var nft = document.getElementById('nft');
var memeCoin = document.getElementById('memeCoin');
var newCoin = document.getElementById('new');
var trending = document.getElementById('trending');
var item = document.getElementById('airdrop-container');
var loading = document.getElementById('loading'); // Get the loading element

// Function to apply loading effect
function showLoading() {
    loading.style.display = "block"; // Show loading element
}

// Function to hide loading effect
function hideLoading() {
    loading.style.display = "none"; // Hide loading element
}

// Initial transition for airdrop items
setTimeout(() => {
    item.style.transition = "opacity 1000ms";
    item.style.opacity = "1";
}, 500);

// Function to filter airdrops based on category
function filterAirdrops(category) {
    var items = document.getElementsByClassName("airdrop-item");
    var buttons = document.querySelectorAll(".category-container button");

    // Hide airdrop items
    for (var i = 0; i < items.length; i++) {
        items[i].style.opacity = "0";
        items[i].style.display = "none";
    }

    showLoading(); // Show loading effect

    // Reset background color of all buttons
    buttons.forEach(function(button) {
        button.style.backgroundColor = "black";
        button.style.color = "white";
    });

    // Set background color of the clicked button
    var activeButton = document.getElementById(category + "Btn");
    activeButton.style.backgroundColor = "white";
    activeButton.style.color = "black";

    // Apply filtering based on the selected category
    setTimeout(function() {
        for (var i = 0; i < items.length; i++) {
            var categories = items[i].getAttribute("data-categories").split(" ");

            if (category === "all" || categories.includes(category)) {
                // Show items matching the selected category or show all items
                setTimeout(function(item) {
                    item.style.transition = "opacity 1s";
                    item.style.opacity = "1";
                    item.style.display = "block";
                }, i * 200, items[i]); // Delay each item's appearance by 200ms
            }
        }

        // Reset background color of all category buttons
        buttons.forEach(function(button) {
            button.classList.remove("active");
        });

        // Set background color of the clicked category button
        activeButton.classList.add("active");

        hideLoading(); // Hide loading effect after filtering (adjust delay as needed)
    }, 1000); // Adjust this delay as needed
}
