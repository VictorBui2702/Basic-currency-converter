let input = document.getElementById('amount');
let btn = document.getElementById('btn');
let message = document.getElementById('message');
let radioGroup1 = document.getElementsByName('select1');
let radioGroup2 = document.getElementsByName('select2');


const allMoney = {
    vnd: {
        id: 1,
        symbol: 'VND',
        rate: 1,

    },
    usd: {
        id: 2,
        symbol: 'USD',
        rate: 22136,
    },
    eur: {
        id: 3,
        symbol: 'EUR',
        rate: 26215,
    },
    krw: {
        id: 4,
        symbol: 'KRW',
        rate: 12000,
    }
};


let selectedRadio1;
let selectedRadio2;
let currency1;
let currency2;
let rate1;
let rate2;

for (let i = 0; i < radioGroup1.length; i++) {
    
    radioGroup1[i].addEventListener('click', function () {
        selectedRadio1 = radioGroup1[i];
        currency1 = selectedRadio1.id.toUpperCase();
        rate1 = allMoney[selectedRadio1.id].rate;
       
    });
}

for (let i = 0; i < radioGroup2.length; i++) {
    radioGroup2[i].addEventListener('click', function () {
        selectedRadio2 = radioGroup2[i];
        currency2 = selectedRadio2.id.toUpperCase();
        rate2 = allMoney[selectedRadio2.id].rate;
    });
}

function doConvert(event) {
    event.preventDefault();
    let inputAmount = input.value;
    let outputAmount = inputAmount * rate1/rate2;
    
    if(isNaN(inputAmount) || inputAmount <0 || selectedRadio1 === undefined || selectedRadio2 === undefined) {
        message.innerHTML = `please correct your input`;
    }
    else {
        message.innerHTML = `${inputAmount} ${currency1} is ${outputAmount} ${currency2}`;
    }
}

  
function updateResults(response) {
    console.log(response);
  }

function callApi(currency) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://free.currencyconverterapi.com/api/v6/convert?q=' + currency + '_VND&compact=ultra&apiKey=0c14a3cb13dd45e95162');
    xhr.onload = function() {
        if (xhr.status === 200) {
            updateResults(JSON.parse(xhr.responseText));
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
  }

callApi('USD');

btn.addEventListener('click', doConvert);


