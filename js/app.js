'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

//SEATTLE STORE
var seattleElement = document.getElementById('seattle');

var seattle = {
    minCustPerHr: 23,
    maxCustPerHr: 65,
    avgCookiesPerCust: 6.3,
    
    custPerHr: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    
    cookiesPerHr: function(numcustomers, avgcookies) {
        return Math.round(seattle.custPerHr(23, 65) * seattle.avgCookiesPerCust)
    },
    
    totalDailyCookies: function() {
        return Math.round(seattle.cookiesPerHr(seattle.custPerHr,seattle.avgCookiesPerCust) * seattle.custPerHr(seattle.minCustPerHr,seattle.maxCustPerHr))
    },

    render: function() {
        for (var i = 0; i < hours.length; i++) {
            var liEl=document.createElement('li')
            liEl.textContent = `${hours[i]} cookies: 1 million`
            seattleElement.appendChild(liEl);   
        }
    }
}
seattle.render();
//test random number
console.log(seattle.custPerHr(23, 65));
//test random number * average cookies per customer (rounded)
console.log(Math.round(seattle.custPerHr(23, 65) * seattle.avgCookiesPerCust));
//test total daily cookies
console.log(Math.round(seattle.cookiesPerHr(seattle.custPerHr,seattle.avgCookiesPerCust) * seattle.custPerHr(seattle.minCustPerHr,seattle.maxCustPerHr)));


//TOKYO STORE
var tokyoElement = document.getElementById('tokyo');

var tokyo = {
    minCustPerHr: 3,
    maxCustPerHr: 24,
    avgCookiesPerCust: 1.2,

    custPerHr: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    
    cookiesPerHr: function(numcustomers, avgcookies) {
        return Math.round(tokyo.custPerHr(23, 65) * tokyo.avgCookiesPerCust)
    },
    
    totalDailyCookies: function() {
        return Math.round(tokyo.cookiesPerHr(tokyo.custPerHr,tokyo.avgCookiesPerCust) * tokyo.custPerHr(tokyo.minCustPerHr,tokyo.maxCustPerHr))
    },

    render: function() {
        for (var i = 0; i < hours.length; i++) {
            var liEl=document.createElement('li')
            liEl.textContent = `${hours[i]} cookies: 1 million`
            tokyoElement.appendChild(liEl);   
        }
    }
}
tokyo.render();


//DUBAI STORE
var dubaiElement = document.getElementById('lima');

var lima = {
    minCustPerHr: 11,
    maxCustPerHr: 38,
    avgCookiesPerCust: 3.7,

    custPerHr: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    
    cookiesPerHr: function(numcustomers, avgcookies) {
        return Math.round(lima.custPerHr(23, 65) * lima.avgCookiesPerCust)
    },
    
    totalDailyCookies: function() {
        return Math.round(lima.cookiesPerHr(lima.custPerHr,lima.avgCookiesPerCust) * lima.custPerHr(lima.minCustPerHr,lima.maxCustPerHr))
    },

    render: function() {
        for (var i = 0; i < hours.length; i++) {
            var liEl=document.createElement('li')
            liEl.textContent = `${hours[i]} cookies: 1 million`
            dubaiElement.appendChild(liEl);   
        }
    }
}
lima.render();


//PARIS STORE
var parisElement = document.getElementById('paris');

var paris = {
    minCustPerHr: 20,
    maxCustPerHr: 38,
    avgCookiesPerCust: 2.3,

    custPerHr: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    
    cookiesPerHr: function(numcustomers, avgcookies) {
        return Math.round(paris.custPerHr(23, 65) * paris.avgCookiesPerCust)
    },
    
    totalDailyCookies: function() {
        return Math.round(paris.cookiesPerHr(paris.custPerHr, paris.avgCookiesPerCust) * paris.custPerHr(paris.minCustPerHr,paris.maxCustPerHr))
    },

    render: function() {
        for (var i = 0; i < hours.length; i++) {
            var liEl=document.createElement('li')
            liEl.textContent = `${hours[i]} cookies: 1 million`
            parisElement.appendChild(liEl);   
        }
    }
}
paris.render();


//LIMA STORE
var limaElement = document.getElementById('lima');

var lima = {
    minCustPerHr: 2,
    maxCustPerHr: 16,
    avgCookiesPerCust: 4.6,

    custPerHr: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    
    cookiesPerHr: function(numcustomers, avgcookies) {
        return Math.round(lima.custPerHr(23, 65) * lima.avgCookiesPerCust)
    },
    
    totalDailyCookies: function() {
        return Math.round(lima.cookiesPerHr(lima.custPerHr,lima.avgCookiesPerCust) * lima.custPerHr(lima.minCustPerHr,lima.maxCustPerHr))
    },

    render: function() {
        for (var i = 0; i < hours.length; i++) {
            var liEl=document.createElement('li')
            liEl.textContent = `${hours[i]} cookies: 1 million`
            limaElement.appendChild(liEl);   
        }
    }
}
lima.render();