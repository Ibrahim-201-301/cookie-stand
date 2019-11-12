'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

//SEATTLE STORE
var seattleElement = document.getElementById('seattle');

var seattle = {
    minCustPerHr: 23,
    maxCustPerHr: 65,
    avgCookiesPerCust: 6.3,
    custPerHrArray: [],
    cookiesPerHrArray: [],
    cookiesPerDay: 0,

    calcCust : function() {
    for (var i = 0; i < hours.length; i++) {
        var randomCust = this.getRandom(this.minCustPerHr, this.maxCustPerHr);    
        this.custPerHrArray.push(randomCust)
        }
    },

    calcCookies: function() {
        for (var i = 0; i < hours.length; i++) {
            var cookies = Math.round(this.custPerHrArray[i] * this.avgCookiesPerCust);
            this.cookiesPerHrArray.push(cookies);
        }
    },

    getRandom: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },

    render: function() {
        this.calcCust();
        this.calcCookies();
        for (var i = 0; i < hours.length; i++) {
            var liEl=document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.cookiesPerHrArray[i]} Cookies `
            seattleElement.appendChild(liEl);   
        }
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.cookiesPerDay} Cookies`
        seattleElement.appendChild(liEl);

    }
};
seattle.render();

//TOKYO STORE
var tokyoElement = document.getElementById('tokyo');

var tokyo = {
    minCustPerHr: 3,
    maxCustPerHr: 24,
    avgCookiesPerCust: 1.2,
    custPerHrArray: [],
    cookiesPerHrArray: [],
    cookiesPerDay: 0,

    calcCust : function() {
    for (var i = 0; i < hours.length; i++) {
        var randomCust = this.getRandom(this.minCustPerHr, this.maxCustPerHr);    
        this.custPerHrArray.push(randomCust)
        }
    },

    calcCookies: function() {
        for (var i = 0; i < hours.length; i++) {
            var cookies = Math.round(this.custPerHrArray[i] * this.avgCookiesPerCust);
            this.cookiesPerHrArray.push(cookies);
        }
    },

    getRandom: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },

    render: function() {
        this.calcCust();
        this.calcCookies();
        for (var i = 0; i < hours.length; i++) {
            var liEl=document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.cookiesPerHrArray[i]} Cookies `
            tokyoElement.appendChild(liEl);   
        }
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.cookiesPerDay} Cookies`
        tokyoElement.appendChild(liEl);

    }
};
tokyo.render();


//DUBAI STORE
var dubaiElement = document.getElementById('dubai');

var dubai = {
    minCustPerHr: 11,
    maxCustPerHr: 38,
    avgCookiesPerCust: 3.7,
    custPerHrArray: [],
    cookiesPerHrArray: [],
    cookiesPerDay: 0,

    calcCust : function() {
    for (var i = 0; i < hours.length; i++) {
        var randomCust = this.getRandom(this.minCustPerHr, this.maxCustPerHr);    
        this.custPerHrArray.push(randomCust)
        }
    },

    calcCookies: function() {
        for (var i = 0; i < hours.length; i++) {
            var cookies = Math.round(this.custPerHrArray[i] * this.avgCookiesPerCust);
            this.cookiesPerHrArray.push(cookies);
        }
    },

    getRandom: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },

    render: function() {
        this.calcCust();
        this.calcCookies();
        for (var i = 0; i < hours.length; i++) {
            var liEl=document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.cookiesPerHrArray[i]} Cookies `
            dubaiElement.appendChild(liEl);   
        }
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.cookiesPerDay} Cookies`
        dubaiElement.appendChild(liEl);

    }
};
dubai.render();


//PARIS STORE
var parisElement = document.getElementById('paris');

var paris = {
    minCustPerHr: 20,
    maxCustPerHr: 38,
    avgCookiesPerCust: 2.3,
    custPerHrArray: [],
    cookiesPerHrArray: [],
    cookiesPerDay: 0,

    calcCust : function() {
    for (var i = 0; i < hours.length; i++) {
        var randomCust = this.getRandom(this.minCustPerHr, this.maxCustPerHr);    
        this.custPerHrArray.push(randomCust)
        }
    },

    calcCookies: function() {
        for (var i = 0; i < hours.length; i++) {
            var cookies = Math.round(this.custPerHrArray[i] * this.avgCookiesPerCust);
            this.cookiesPerHrArray.push(cookies);
        }
    },

    getRandom: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },

    render: function() {
        this.calcCust();
        this.calcCookies();
        for (var i = 0; i < hours.length; i++) {
            var liEl=document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.cookiesPerHrArray[i]} Cookies `
            parisElement.appendChild(liEl);   
        }
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.cookiesPerDay} Cookies`
        parisElement.appendChild(liEl);

    }
};
paris.render();


//LIMA STORE
var limaElement = document.getElementById('lima');

var lima = {
    minCustPerHr: 2,
    maxCustPerHr: 16,
    avgCookiesPerCust: 4.6,
    custPerHrArray: [],
    cookiesPerHrArray: [],
    cookiesPerDay: 0,

    calcCust : function() {
    for (var i = 0; i < hours.length; i++) {
        var randomCust = this.getRandom(this.minCustPerHr, this.maxCustPerHr);    
        this.custPerHrArray.push(randomCust)
        }
    },

    calcCookies: function() {
        for (var i = 0; i < hours.length; i++) {
            var cookies = Math.round(this.custPerHrArray[i] * this.avgCookiesPerCust);
            this.cookiesPerHrArray.push(cookies);
        }
    },

    getRandom: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },

    render: function() {
        this.calcCust();
        this.calcCookies();
        for (var i = 0; i < hours.length; i++) {
            var liEl=document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.cookiesPerHrArray[i]} Cookies `
            limaElement.appendChild(liEl);   
        }
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.cookiesPerDay} Cookies`
        limaElement.appendChild(liEl);

    }
};
lima.render();