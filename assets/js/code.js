var submit = $("#submit");
var userInputCoin = $("#appendMe");
var submit2 = $("#submit2");
var results1 = [];
var results2 = [];
var clear = $("#remove");
var displaySearch = $("#dispy");
var userInputPriceCo = $("");
var userInputPriceCurr = $("");
var userInputCoinGr = $("#user-choice1");
var userInputCurr = $("#user-choice");


//--VAN,GECKO DIFFERS API EX FOR EXCHANGE COINS FOR COINS+ID
var geckoEx = "https://api.coingecko.com/api/v3/exchange_rates";

var vanEXS =
  "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=OMI2ERRUQEZP3AQO";

var vanEX =
  "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=OMI2ERRUQEZP3AQO";

//NEXT 2 BELOW ARE FOR FUNCTION TO SEARCH FOR SPECIFIC EXCHANGE RATE--ONCE THAT WORKS:/
//FUNCTION IS CURR AT LINE 51
var vanEx1 =
  "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=";

var vanEx2 = "&to_currency=";
var vanEx3 = "&apikey=OMI2ERRUQEZP3AQO";

//BASES FOR GECKO ....
var geckoBase = "https://api.coingecko.com/api/v3/";

var BlockChList = geckoBase + "asset_platforms";

var CoinStatus = geckoCoins + userInputCoin + "status_updates";

var geckoSearchBase = geckoBase + "search/";

var geckoCoins = geckoBase + "coins/";

var geckoCoinSearch = geckoCoins + userInputCoin;

var geckoBit = geckoBase + "coins/bitcoin";

var geckoETH = geckoBase + "coins/ethereum";

var geckoEx = geckoBase + "exchange_rates";

var geckoMarkGraphBase =
  geckoCoins +
  "markets?vs_currency=" +
  userInputCurr +
  "&ids=" +
  userInputCoinGr +
  "&order=market_cap_desc&per_page=100&page=1&sparkline=true";

var geckoMarkToUs =
  geckoBase +
  "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

var geckoCateg = geckoBase + "coins/categories";

var geckoCoinPriceBase = geckoBase + "simple/price?";

var geckoCoinPriceSearch1 =
  geckoCoinPriceBase +
  "ids=" +
  userInputPriceCo +
  "&vscurrencies=" +
  userInputPriceCurr;

//GOOD FOR THE MAIN PAGE SHOWS GENERAL INFORMATION RELATIVE GLOBALLY
//'https://api.coingecko.com/api/v3/global'

var geckoUrSimpleP =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,shiba-inu&vs_currencies=uah,usd";

var getLocSearch = function (userInputCoinGr) {
  var coinGr = userInputCoinGr.val();

  var locApiUrl =
    geckoCoins +
    "markets?vs_currency=usd&ids=" +
    coinGr +
    "&order=market_cap_desc&per_page=100&page=1&sparkline=true";
  console.log(userInputCoinGr);
  fetch(locApiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayResults(data, coinGr);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Can't connect to the Lords Prayer");
      console.log(error);
    });
};
var displayResults = function (data, query) {
  if (data.length === 0) {
    displaySearch.textContent = "No Data Found...";
    return;
  } else {
    var sp1 = data[0];
    var sp2 = sp1.sparkline_in_7d;
    var sp3 = sp2.price;
    console.log(sp3);

    console.log(query);
    console.log(data);
    x = $("#results1");
    x.append(sp3);
    const labels = [
      "monday",
      "Tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];

    var data = {
      labels: labels,
      datasets: [
        {
          label: "Market Chart vs USD",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: sp3,
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {},
    };
    var myChart = new Chart(document.getElementById("cryptoChart"), config);
  }
  return;
};
submit.on("click", function (event) {
  event.preventDefault();
  getLocSearch(userInputCoinGr);
});

var topTrend = [];


var topTrendPic = [];


var coins = [];

/*
 SEARCH FUNCTION FOR ALL COINS HERE
 */

var sparkline = [];


var sparkLineE = [];
var sparkLineS = [];

var sparkLineL = [];

var sparkLineUfo = [];

var sparkLineUnM = [];

var sparkLineAxie = [];

var sparkLineBi = [];

var sparkLineWall = [];

//THIS FOR SOME REASON IS VS PRICE OF BITCOIN POSSIBLE ERROR REQUEST IS VS USD
var exchangeRates = [];

var exchangeRatesVan = [];

//https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1

$.ajax({
  url: "https://api.coingecko.com/api/v3/search/trending",
  method: "GET",
}).then(function (response) {
  var rp1 = response.coins;

  for (let i = 0; i < response.length; i++) {
    let resData = response[i].item;

    let resDataImg=response[i].thumb;
    topTrendPic.push(resDataImg);
    topTrend.push(resData);
  }
});

/*
submit.on('click',search())
function search(){
   var userInputCurr= $('#user-choice').text()
   console.log(userInputCurr)
   var userInputCoinGr= $('#user-choice1').val()
   console.log(userInputCoinGr)
}(function(){
 var a=$.ajax({
    url: geckoCoins + 'markets?vs_currency='+ userInputCurr +'&ids='+ userInputCoinGr +'&order=market_cap_desc&per_page=100&page=1&sparkline=true'
    ,
    method: 'GET',
//}).then(function (response) {
    //console.log('EXCHANGE RATES \n-------------');
   // var rp1 = response.rates
   //exchangeRates.push(rp1)
   //console.log(search)
})}
)
*/
$.ajax({
  url: geckoEx,
  method: "GET",
}).then(function (response) {
  const resDataRates = response.rates;
  exchangeRates.push(resDataRates);
});

$.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=true",
  method: "GET",
}).then(function (response) {
  //console.log(response)
  const resData = response[0];
  const resDataSpark = resData.sparkline_in_7d;
  const prices = resDataSpark.price;
  //console.log(prices)
  sparkLineBi.push(prices);
  const labels = [
    "monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  var data = {
    labels: labels,
    datasets: [
      {
        label: "Binance Market Chart",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: prices,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };
  var myChart = new Chart(document.getElementById("myChartBi"), config);
});

$.ajax({
  url: geckoCoins + "list",
  method: "GET",
}).then(function (response) {
  coins.push(response);
});

// $.ajax({
//   url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=true",
//   method: "GET",
// }).then(function (response) {
//   var sp1 = response[0];
//   var sp2 = sp1.sparkline_in_7d;
//   var sp3 = sp2.price;
//   sparkLineE.push(sp3);
//   const labels = [
//         'monday',
//         'Tuesday',
//         'wednesday',
//         'thursday',
//         'friday',
//         'saturday',
//         'sunday',
//         /* '1:00am',
//         '2:00am',
//         '3:00am',
//         '4:00am',
//         '5:00am',
//         '6:00am',
//         '7:00am',
//         '8:00am',
//         '9:00am',
//         '10:00am',
//         '11:00am',
//         '12:00pm',
//         '1:00pm',
//         '2:00pm',
//         '3:00pm',
//         '4:00pm',
//         '5:00pm',
//         '6:00pm,
//         '7:00pm',
//         '8:00pm',
//         '9:00pm',
//         '10:00pm',
//         '11:00pm',
//         '12:00am',*/
//       ];

//       var data = {
//         labels: labels,
//         datasets: [{
//           label: 'Ethereum Market Chart',
//           backgroundColor: 'rgb(255, 99, 132)',
//           borderColor: 'rgb(255, 99, 132)',
//           data: sp3
//         }]
//       };

//     const config = {
//         type: 'line',
//         data: data,
//         options: {}
//       };
//       var myChart = new Chart(
//         document.getElementById('myChartEth'),
//         config)
// });

$.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=shiba-inu&order=market_cap_desc&per_page=100&page=1&sparkline=true",
  method: "GET",
}).then(function (response) {
  //console.log(response)
  var sp1 = response[0];
  var sp2 = sp1.sparkline_in_7d;
  var sp3 = sp2.price;
  //console.log(sp3)
  sparkLineS.push(sp3);
  const labels = [
    "monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
    /*'1:00am',
        '2:00am',
        '3:00am',
        '4:00am',
        '5:00am',
        '6:00am',
        '7:00am',
        '8:00am',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm,
        '7:00pm',
        '8:00pm',
        '9:00pm',
        '10:00pm',
        '11:00pm',
        '12:00pm',*/
  ];

  var data = {
    labels: labels,
    datasets: [
      {
        label: "Shiba-Inu Market Chart",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: sp3,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };
  var myChart = new Chart(document.getElementById("myChartShib"), config);
});

$.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=wall-street-games&order=market_cap_desc&per_page=100&page=1&sparkline=true",
  method: "GET",
}).then(function (response) {
  //console.log(response)
  var sp1 = response[0];
  var sp2 = sp1.sparkline_in_7d;
  var sp3 = sp2.price;
  //console.log(sp3)
  sparkLineWall.push(sp3);
  const labels = [
    "monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
    ////////
    /* '1:00am',
        '2:00am',
        '3:00am',
        '4:00am',
        '5:00am',
        '6:00am',
        '7:00am',
        '8:00am',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm,
        '7:00pm',
        '8:00pm',
        '9:00pm',
        '10:00pm',
        '11:00pm',
        '12:00am',*/
  ];

  var data = {
    labels: labels,
    datasets: [
      {
        label: "Wall-Street-Games Market Cap",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: sp3,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };
  var myChart = new Chart(document.getElementById("myChartWall"), config);
});

$.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=unmarshal&order=market_cap_desc&per_page=100&page=1&sparkline=true",
  method: "GET",
}).then(function (response) {
  //console.log(response)
  var sp1 = response[0];
  var sp2 = sp1.sparkline_in_7d;
  var sp3 = sp2.price;
  //console.log(sp3)
  //sparkLineUnM.push(sp3);
  const labels = [
    "monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
    /* '1:00am',
        '2:00am',
        '3:00am',
        '4:00am',
        '5:00am',
        '6:00am',
        '7:00am',
        '8:00am',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm,
        '7:00pm',
        '8:00pm',
        '9:00pm',
        '10:00pm',
        '11:00pm',
        '12:00am',*/
  ];

  var data = {
    labels: labels,
    datasets: [
      {
        label: "UnMarshal Market Cap Chart",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: sp3,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };
  var myChart = new Chart(document.getElementById("myChartUnMar"), config);
});

$.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids= axie-infinity&order=market_cap_desc&per_page=100&page=1&sparkline=true",
  method: "GET",
}).then(function (response) {
  //console.log(response)
  var sp1 = response[0];
  var sp2 = sp1.sparkline_in_7d;
  var sp3 = sp2.price;
  //console.log(sp3)
  //sparkLineAxie.push(sp3);
  const labels = [
    "monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
    /*'1:00am',
        '2:00am',
        '3:00am',
        '4:00am',
        '5:00am',
        '6:00am',
        '7:00am',
        '8:00am',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm,
        '7:00pm',
        '8:00pm',
        '9:00pm',
        '10:00pm',
        '11:00pm',
        '12:00am',*/
  ];

  var data = {
    labels: labels,
    datasets: [
      {
        label: "Axie Market Cap Chart",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: sp3,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };
  var myChart = new Chart(document.getElementById("myChartAx"), config);
});
$.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=smooth-love-potion&order=market_cap_desc&per_page=100&page=1&sparkline=true",
  method: "GET",
}).then(function (response) {
  //console.log(response)
  var sp1 = response[0];
  var sp2 = sp1.sparkline_in_7d;
  var sp3 = sp2.price;
  //console.log(sp3)
  //sparkLineL.push(sp3)
  const labels = [
    "monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
    /*'1:00am',
        '2:00am',
       
        '4:00pm',
        '5:00pm',
        '6:00pm,
        '7:00pm',
        '8:00pm',
        '9:00pm',
        '10:00pm',
        '11:00pm',
        '12:00am',*/
  ];

  var data = {
    labels: labels,
    datasets: [
      {
        label: "Smooth-Love-Potion Market Cap Chart",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: sp3,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };
  var myChart = new Chart(document.getElementById("myChartSmo"), config);
});

$.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ufo-gaming&order=market_cap_desc&per_page=100&page=1&sparkline=true",
  method: "GET",
}).then(function (response) {
  //console.log(response)
  var sp1 = response[0];
  var sp2 = sp1.sparkline_in_7d;
  var sp3 = sp2.price;
  //console.log(sp3)
  //sparkLineUfo.push(sp3);
  const labels = [
    "monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
    /*'1:00am',
        '2:00am',
        '3:00am',
        '4:00am',
        '5:00am',
        '6:00am',
        '7:00am',
        '8:00am',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm,
        '7:00pm',
        '8:00pm',
        '9:00pm',
        '10:00pm',
        '11:00pm',
        '12:00am',*/
  ];

  var data = {
    labels: labels,
    datasets: [
      {
        label: "Ufo-Gaming-Market Cap Chart",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: sp3,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };
  var myChart = new Chart(document.getElementById("myChartUfo"), config);
});
$.ajax({
  url: vanEXS,
  method: "GET",
}).then(function (response) {
  //console.log(response)
  //console.log('EXCHANGE RATES \n-------------');
  //var rp1 = response[0]
  //console.log(response)
  exchangeRatesVan.push(response);
});

var getLocSearch1 = function (userInputCurr) {
  var coinGr = userInputCurr.val();

  var locApiUrl =
    "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=" +
    coinGr +
    "&to_currency=USD&apikey=OMI2ERRUQEZP3AQO";
  console.log(userInputCoinGr);
  fetch(locApiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayResults1(data, coinGr);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Can't connect to the Lords Prayer");
      console.log(error);
    });
};
var displayResults1 = function (data, query) {
  if (data.length === 0) {
    displaySearch.textContent = "No Data Found...";
    return;
  } else {
    console.log(query);
    var sp1 = data;
    var sp2 = JSON.stringify(sp1);
    console.log(sp2);

    //var sp2 = sp1.sparkline_in_7d;
    //var sp3 = sp2.price;
    //console.log(sp3)
    //var sp2=sp1

    //results2.push(sp1)
    console.log(sp2);
    console.log(query);
    console.log(data);

    //
    //var x = sp2;
    //console.log(x)
    x = $("#results2");

    x.append(sp2);
    localStorage.setItem("2ndchoice", sp2);
  }
  return;
};
submit2.on("click", function (event) {
  event.preventDefault();
  getLocSearch1(userInputCurr);
  //console.log()
});
console.log(userInputCurr);

$(document).on("ready", function saverStorer() {
  var why = localStorage.getItem("2ndchoice");
  userInputCoin.append(why);
  console.log(userInputCoin);

  //console.log(why)
});

clear.on("click", function () {
  localStorage.clear("2ndchoice");
  userInputCoin.hide();
  clear.hide();
});

// $.ajax({
//   url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=true",
//   method: "GET",
// }).then(function (response) {
//   console.log(
//     "BITCOIN MARKET CAP////WITH THE SPARKLINE THIS IS GONNA THROW ERRORS BC OF CHART IGNORE \n-------------"
//   );
//   var sp1 = response[0];
//   var sp2 = sp1.sparkline_in_7d;
//   //console.log(sp2)
//   sparkline.push(sp2);
//   var sp3 = sp2.price;
//   console.log(sp3)
//   //data.datasets.push(sp3)
//  const labels = [
//     "monday",
//     "Tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//     "saturday",
//     "sunday",
//   ];

//   var data = {
//     labels: labels,
//     datasets: [
//       {
//         label: "Bitcoin Market Cap Chart",
//         backgroundColor: "rgb(255, 99, 132)",
//         borderColor: "rgb(255, 99, 132)",
//         data: sp3,
//       },
//     ],
//   };

//   const config = {
//     type: "line",
//     data: data,
//     options: {},
//   };

//   var myChart = new Chart(
//     document.getElementById('myChart'),
//     config)
// });
