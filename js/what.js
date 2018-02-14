what()
function what() {
	$.getJSON("https://api.coinmarketcap.com/v1/ticker/bitcoin/", function(data) {
		data = Math.round(data[0].price_usd);
		document.getElementById("btc").innerHTML = data;
	});
};
