var all = document.getElementById('all');
var nft = document.getElementById('nft');
var memeCoin = document.getElementById('memeCoin');
var newCoin = document.getElementById('new');
var trending = document.getElementById('trending');

var airdrops = [
    {name: 'Airdrop 1', category: "NFT"},
    {name: 'Airdrop 2', category: "MemeCoins"},
    {name: 'Airdrop 3', category: "Trending"},
];

// Now we create the filter function

function filterAirdrops(category) {
    var filterAirdrops;
    if (category === 'all') {
        filterAirdrops = airdrops;
    } else {
        filterAirdrops = airdrops.filter(function(airdrop) {
            return airdrop.category.toLowerCase() === category.toLowerCase();
        });
    }
    airdrops.forEach(element => {
        
    });
}
