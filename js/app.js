'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

//SEATTLE STORE
var seattle = {
    minCustPerHr: 23,
    maxCustPerHr: 65,
    avgCookiesPerCust: 6.3,
    custPerHr: [],
    cookiesPerHr: [],
    totalDailyCookies: 0,
    
    render: function() {
        for (var i = 0; i < hours.length; i++) {
            var liEl=document.createElement('li')
            liEl.textContent = `${hours[i]} cookies: 34`
            
        }
    },

    custPerHr: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

}
console.log(seattle.custPerHr(23, 65));
console.log(Math.round(seattle.custPerHr(23, 65) * seattle.avgCookiesPerCust));
// seattle.render();


//TOKYO STORE
var tokyo = {
    minCustPerHr: 3,
    maxCustPerHr: 24,
    avgCookiesPerCust: 1.2,
    custPerHr: [],
    cookiesPerHr: [],
    totalDailyCookies: 0,

    tokyoCustPerHr: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

//DUBAI STORE
var dubai = {
    minCustPerHr: 11,
    maxCustPerHr: 38,
    avgCookiesPerCust: 3.7,
    custPerHr: [],
    cookiesPerHr: [],
    totalDailyCookies: 0,

    dubaiCustPerHr: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

//PARIS STORE
var paris = {
    minCustPerHr: 20,
    maxCustPerHr: 38,
    avgCookiesPerCust: 2.3,
    custPerHr: [],
    cookiesPerHr: [],
    totalDailyCookies: 0,

    parisCustPerHr: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

//LIMA STORE
var lima = {
    minCustPerHr: 2,
    maxCustPerHr: 16,
    avgCookiesPerCust: 4.6,
    custPerHr: [],
    cookiesPerHr: [],
    totalDailyCookies: 0,

    limaCustPerHr: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}