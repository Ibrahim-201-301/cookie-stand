'use strict';

var hours = ['Store', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', ' Totals '];

//Connects table constructed in JS to anchor within sales.html
var table = document.getElementById('table-container');

// Return a random number between min and max
var getRandom = function(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
};

//OBJECT CONSTRUCTOR BEGINS

//PH = Per Hour
//PC = Per Customer
//PD = Per Day

var allStores = [];

function Store(name, minCustPH, maxCustPH, avgCookiesPC) {
    this.name = name;
    this.minCustPH = minCustPH;
    this.maxCustPH = maxCustPH;
    this.avgCookiesPC = avgCookiesPC;
    this.arrayCustPH = [];
    this.arrayCookiesPH = [];
    this.cookiesPD = 0;
    // this.genCookiesPH = [];

    allStores.push(this);
}

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

// Calculate the customers per hour
Store.prototype.calcCust = function() {
    for (var i = 0; i < hours.length - 2; i++) {
        var randomCust = getRandom(this.minCustPH, this.maxCustPH);    
        this.arrayCustPH.push(randomCust);
    }
};

// Calculates cookies per hour and increments total cookies sold per day
Store.prototype.calcCookies = function() {
    for (var i = 0; i < this.arrayCustPH.length; i++) {
        var cookies = Math.round(this.arrayCustPH[i] * this.avgCookiesPC);
        this.arrayCookiesPH.push(cookies);
        this.cookiesPD += cookies;
    }
};

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
//End of Constructor

//Call Prototype Helper methods
var calc = function(){
    for (var i = 0; i < allStores.length; i++) {
        allStores[i].calcCust();
        allStores[i].calcCookies();
    }
    render();
}
calc();

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
renderHeader();

//Render table footer
var renderFooter =function() {
    var tfootEl = document.createElement('tfoot');
    var trEl = document.createElement('tr');

    var tdEl = document.createElement('td');
    tdEl.textContent = 'Hourly Totals';
    trEl.appendChild(tdEl);
    
    //Populates hourly totals to footer
    for (var i = 0; i < hours.length - 2; i++) {
        var tdEl4 = document.createElement('td');
        //FIX LINE BELOW & MAKE THIS FUNCTIONAL
        tdEl4.textContent = 'test';
        trEl.appendChild(tdEl4);
    }

    var tdEl5 = document.createElement('td');
    //FIX LINE BELOW & MAKE THIS FUNCTIONAL
    tdEl5.textContent = 'test2';
    trEl.appendChild(tdEl5);
    tfootEl.appendChild(trEl);
    table.appendChild(tfootEl);
}
renderFooter();

// //testing how to populate hourly totals for footer
// Store.prototype.genCookiesPH = function() {
//  for (var i = 0; i < hours.length; i++) {
//     var footerCookies = Math.ceil(this.avgCookiesPC * getRandom(this.minCustPH, this.maxCustPH));
//     this.genCookiesPH.push(footerCookies);
//     this.cookiesPD += footerCookies;
//     Store.allStoresTotal += footerCookies;
//     }
//     allStores[i].genGookiesPH();
// };