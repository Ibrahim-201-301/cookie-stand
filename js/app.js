'use strict';

var table = document.getElementById('table-container');

//OBJECT CONSTRUCTOR BEGINS

var hours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals'];

// Return a random number between min and max
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

//PH= Per Hour
//PC= Per Customer
//PD= Per Day

var allStores = [];

function Store(name, minCustPH, maxCustPH, avgCookiesPC) {
    this.name = name;
    this.minCustPH = minCustPH;
    this.maxCustPH = maxCustPH;
    this.avgCookiesPC = avgCookiesPC;
    this.arrayCustPH = [];
    this.arrayCookiesPH = [];
    this.cookiesPD = 0;

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

// Calculates cookies per hour and adds all cookies per day
Store.prototype.calcCookies = function() {
    for (var i = 0; i < this.arrayCustPH.length; i++) {
        var cookies = Math.round(this.arrayCustPH[i] * this.avgCookiesPC);
        // console.log('Cookies: ', cookies);
        this.arrayCookiesPH.push(cookies);
        this.cookiesPD += cookies;
    }
};

//Render table body
var render = function() {
    var tbodyEl = document.createElement('tbody');
    
    for (var i = 0; i < allStores.length; i++) {
        var trEl = document.createElement('tr');
        var tdEl = document.createElement('td');
        tdEl.textContent = allStores[i].name;
        trEl.appendChild(tdEl);
        
        
        for (var j = 0; j < allStores[i].arrayCookiesPH.length; j++) {
            var tdEl2 = document.createElement('td');
            tdEl2.textContent = allStores[i].arrayCookiesPH[j];
            trEl.appendChild(tdEl2);
        }
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
    for (let i = 0; i < allStores.length; i++) {
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
    
    var tdEl = document.createElement('td')
    tdEl.textContent = 'Totals';
    trEl.appendChild(tdEl);

    for (var i = 0; i < hours.length; i++) {
        var tdEl4 = document.createElement('td');
        tdEl4.textContent = 'test';
    }

    tfootEl.appendChild(trEl);
    table.appendChild(tfootEl);
}
renderFooter();