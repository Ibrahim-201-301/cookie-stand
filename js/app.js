'use strict';

var hours = ['Store', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', ' Totals '];
var allStores = [];

//Connects table constructed in JS to anchor within sales.html
var table = document.getElementById('table-container');

//OBJECT CONSTRUCTOR BEGINS
//PH = Per Hour
//PC = Per Customer
//PD = Per Day

function Store(name, minCustPH, maxCustPH, avgCookiesPC) {
    this.name = name;
    this.minCustPH = minCustPH;
    this.maxCustPH = maxCustPH;
    this.avgCookiesPC = avgCookiesPC;
    this.arrayCustPH = [];
    this.arrayCookiesPH = [];
    this.cookiesPD = 0;
    //
    this.calcCust();
    // 
    this.calcCookies();
    
    allStores.push(this);
}
//End of Constructor

// Calculate the customers per hour
Store.prototype.calcCust = function() {
    for (var i = 0; i < hours.length - 2; i++) {
        var randomCust = getRandom(this.minCustPH, this.maxCustPH);    
        this.arrayCustPH.push(randomCust);
    }
};

// Return a random number between min and max
var getRandom = function(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
};

// Calculates cookies per hour and increments total cookies sold per day
Store.prototype.calcCookies = function() {
    for (var i = 0; i < this.arrayCustPH.length; i++) {
        var cookies = Math.ceil(this.arrayCustPH[i] * this.avgCookiesPC);
        this.arrayCookiesPH.push(cookies);
        this.cookiesPD += cookies;
    }
};

//Render table head
var renderHeader = function() {
    var theadEl = document.createElement('thead');
    var trEl = document.createElement('tr');

    for (var i = 0; i < hours.length; i++) {
        var thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    }

    theadEl.appendChild(trEl);
    table.appendChild(theadEl);
}

//Render table body --- change to prototype?
var render = function() {
    var tbodyEl = document.createElement('tbody');
    //Populates first column with store names
    for (var i = 0; i < allStores.length; i++) {
        var trEl = document.createElement('tr');
        var tdEl = document.createElement('td');
        tdEl.textContent = allStores[i].name;
        trEl.appendChild(tdEl);
        //Populates each column for total sales per hour
        for (var j = 0; j < allStores[i].arrayCookiesPH.length; j++) {
            var tdEl2 = document.createElement('td');
            tdEl2.textContent = allStores[i].arrayCookiesPH[j];
            trEl.appendChild(tdEl2);
        }
        //Populates store totals in final column
        var tdEl3 = document.createElement('td');
        tdEl3.textContent = allStores[i].cookiesPD;
        trEl.appendChild(tdEl3);
        tbodyEl.appendChild(trEl);
    }
    table.appendChild(tbodyEl);
};

//Render table footer
var renderFooter =function() {
    var tfootEl = document.createElement('tfoot');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');

    tdEl.textContent = 'Hourly Totals';
    trEl.appendChild(tdEl);
    
    //Populates hourly totals to footer
    for (var i = 0; i < hours.length - 2; i++) {
        var hourlyTotals = 0;
        var tdEl4 = document.createElement('td');

        for (var j = 0; j < allStores.length; j++) {
            hourlyTotals += allStores[j].arrayCookiesPH[i];
        }
        tdEl4.textContent = hourlyTotals;
        trEl.appendChild(tdEl4);
    }

    var tdEl5 = document.createElement('td');

    var allCooks = 0
    for (var j = 0; j < allStores.length; j++) {
        allCooks += allStores[j].cookiesPD;
    }
    tdEl5.textContent = allCooks;

    trEl.appendChild(tdEl5);
    tfootEl.appendChild(trEl);
    table.appendChild(tfootEl);
}

//Add Form Input to Sales Table
var newStoreForm = document.getElementById('new-store-form');
newStoreForm.addEventListener('submit', handleSubmit);

//Button Push
function handleSubmit(event) {
    event.preventDefault();
    console.log("allstores", allStores);
    var name = event.target.inputNameElement.value;
    var min = event.target.inputMinCustPH.value;
    var max = event.target.inputMaxCustPH.value;
    var avg = event.target.inputAvgCookiesPC.value;
    //create new instance upon button push
    new Store(name, min, max, avg);
    //clear table data before repopulating to include values from "New Store Data"
    table.innerHTML = "";
    //re-render table upon button push
    renderHeader();
    render();
    renderFooter();
};

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

// function calls to maintain table's appearance on page
renderHeader();
render();
renderFooter();
