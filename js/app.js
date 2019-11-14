'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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

new Store('seattle', 23, 65, 6.3);
new Store('tokyo', 3, 24, 1.2);
new Store('dubai', 11, 38, 3.7);
new Store('paris', 20, 38, 2.3);
new Store('lima', 2, 16, 4.6);


Store.prototype.calcCust = function() {
    for (var i = 0; i < hours.length; i++) {
        var randomCust = this.getRandom(this.minCustPH, this.maxCustPH);    
        this.arrayCustPH.push(randomCust)
    }
};

Store.prototype.calcCookies = function() {
    for (var i = 0; i < this.arrayCustPH.length; i++) {
        var cookies = Math.round(this.arrayCustPH[i] * this.avgCookiesPC);
        this.arrayCookiesPH.push(cookies);
        this.cookiesPD += cookies;
    }
};

Store.prototype.render = function() {
    allStores.calcCust();
    allStores.calcCookies();
    for (var i = 0; i < hours.length; i++) {
        //WHAT GOES HERE???
    }
};

allStores.render();


//LAB 06 CODE - RIP
// //SEATTLE STORE
// var seattleElement = document.getElementById('seattle');

// var seattle = {
    //     storeName: 'Seattle',
    //     minCustPerHr: 23,
    //     maxCustPerHr: 65,
    //     avgCookiesPerCust: 6.3,
    //     arrayCustPH: [],
    //     cookiesPerHrArray: [],
    //     cookiesPerDay: 0,
    
    //     calcCust : function() {
    //     for (var i = 0; i < hours.length; i++) {
    //         var randomCust = this.getRandom(this.minCustPerHr, this.maxCustPerHr);    
    //         this.arrayCustPH.push(randomCust)
    //         }
    //     },
            
    //     calcCookies: function() {
    //         for (var i = 0; i < this.arrayCustPH.length; i++) {
    //             var cookies = Math.round(this.arrayCustPH[i] * this.avgCookiesPerCust);
    //             this.cookiesPerHrArray.push(cookies);
    //             this.cookiesPerDay += cookies;
    //         }
    //     },
                    
    //     getRandom: function(min, max) {
    //         return Math.floor(Math.random() * (max - min)) + min;
    //     },
                        
    // render: function() {
    //     this.calcCust();
    //     this.calcCookies();
    //     // var ulEl = document.createElement('ul');
                        
    //     for (var i = 0; i < hours.length; i++) {
    //         var liEl=document.createElement('li');
    //         liEl.textContent = `${hours[i]}: ${this.cookiesPerHrArray[i]} Cookies`;
    //         ulEl.appendChild(liEl);   
    //     }
        
//         liEl = document.createElement('li');
//         liEl.textContent = `Total: ${this.cookiesPerDay} Cookies`;
//         ulEl.appendChild(liEl);

//         seattleElement.appendChild(ulEl);
//         seattleElement.appendChild(liEl);

//     }
// };
// seattle.render();




//DOM TINGS
//creation of table & link to ID in sales.html
var table = document.getElementById('table-container');
//creation of table heading, appending table heading to table
var theadEl = document.createElement('thead');
table.appendChild(theadEl);
//creation of table heading row, appending heading row with times to the table heading
var trEl = document.createElement('tr');
theadEl.appendChild('tr');
//filling heading row with times, appending each heading row item to the heading row itself
var thEl = document.createElement('th');
thEl.textContent = '6:00am';
trEl.appendChild(thEl);
thEl.textContent = '7:00am';
trEl.appendChild(thEl);
thEl.textContent = '8:00am';
trEl.appendChild(thEl);
thEl.textContent = '9:00am';
trEl.appendChild(thEl);
thEl.textContent = '10:00am';
trEl.appendChild(thEl);
thEl.textContent = '11:00am';
trEl.appendChild(thEl);
thEl.textContent = '12:00pm';
trEl.appendChild(thEl);
thEl.textContent = '1:00pm';
trEl.appendChild(thEl);
thEl.textContent = '2:00pm';
trEl.appendChild(thEl);
thEl.textContent = '3:00pm';
trEl.appendChild(thEl);
thEl.textContent = '4:00pm';
trEl.appendChild(thEl);
thEl.textContent = '5:00pm';
trEl.appendChild(thEl);
thEl.textContent = '6:00pm';
trEl.appendChild(thEl);
thEl.textContent = '7:00pm';
trEl.appendChild(thEl);
thEl.textContent = 'Daily Location Total';
trEl.appendChild(thEl);

//creation of table body, appending table body to table
var tbodyEl = document.createElement('tbody');
table.appendChild(tbodyEl);
//creation of first table row & appending first table row to table body
trEl = document.createElement('tr');
tbodyEl.appendChild(trEl);
//Data Row 1: Seattle --- creating table data & appending table data to Data Row 1
var tdEl = document.createElement('td');
tdEl.textContent = 'Seattle';
trEl.appendChild(tdEl);
tdEl.textContent = 'placeholder for 6am';
trEl.appendChild(tdEl);
tdEl.textContent = 'placeholder for 7am';
trEl.appendChild(tdEl);
tdEl.textContent = 'placeholder for 8am';
trEl.appendChild(tdEl);
tdEl.textContent = 'placeholder for 9am';
trEl.appendChild(tdEl);
tdEl.textContent = 'placeholder for 10am';
trEl.appendChild(tdEl);
tdEl.textContent = 'placeholder for 11am';
trEl.appendChild(tdEl);
tdEl.textContent = 'placeholder for 12pm';
trEl.appendChild(tdEl);
tdEl.textContent = 'placeholder for 1pm';
trEl.appendChild(tdEl);
tdEl.textContent = 'placeholder for 2pm';
trEl.appendChild(tdEl);
tdEl.textContent = 'placeholder for 3pm';
trEl.appendChild(tdEl);
tdEl.textContent = 'placeholder for 4pm';
trEl.appendChild(tdEl);
tdEl.textContent = 'placeholder for 5pm';
trEl.appendChild(tdEl);
tdEl.textContent = 'placeholder for 6pm';
trEl.appendChild(tdEl);
tdEl.textContent = 'placeholder for 7pm';
trEl.appendChild(tdEl);
//Data Row 2: Tokyo
//Data Row 3: Dubai
//Data Row 4: Paris
//Data Row 5: Lima


//creation of table footer, appending table footer to table
var tfootEl = document.createElement('tfoot');
table.appendChild(tfootEl);
trEl = document.createElement('tr');
tfootEl.appendChild(trEl);
tdEl = document.createElement('td');
tdEl.textContent = 'Totals';
trEl.appendChild(tdEl);


// //TOKYO STORE
// var tokyoElement = document.getElementById('tokyo');

// var tokyo = {
//     minCustPerHr: 3,
//     maxCustPerHr: 24,
//     avgCookiesPerCust: 1.2,
//     arrayCustPH: [],
//     cookiesPerHrArray: [],
//     cookiesPerDay: 0,

//     calcCust : function() {
//     for (var i = 0; i < hours.length; i++) {
//         var randomCust = this.getRandom(this.minCustPerHr, this.maxCustPerHr);    
//         this.arrayCustPH.push(randomCust)
//         }
//     },

//     calcCookies: function() {
//         for (var i = 0; i < this.arrayCustPH.length; i++) {
//             var cookies = Math.round(this.arrayCustPH[i] * this.avgCookiesPerCust);
//             this.cookiesPerHrArray.push(cookies);
//             this.cookiesPerDay += cookies;
//         }
//     },

//     getRandom: function(min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//     },

//     render: function() {
//         this.calcCust();
//         this.calcCookies();
//         var ulEl = document.createElement('ul');
//         // var h2El = document.createElement('h2');
//         // h2El.textContent = this.storeName;
//         // seattleElement.appendChild(h2El);

//         for (var i = 0; i < hours.length; i++) {
//             var liEl=document.createElement('li');
//             liEl.textContent = `${hours[i]}: ${this.cookiesPerHrArray[i]} Cookies`;
//             ulEl.appendChild(liEl);   
//         }
        
//         liEl = document.createElement('li');
//         liEl.textContent = `Total: ${this.cookiesPerDay} Cookies`;
//         ulEl.appendChild(liEl);

//         tokyoElement.appendChild(ulEl);
//         tokyoElement.appendChild(liEl);

//     }
// };
// tokyo.render();

// //DUBAI STORE
// var dubaiElement = document.getElementById('dubai');

// var dubai = {
//     minCustPerHr: 2,
//     maxCustPerHr: 16,
//     avgCookiesPerCust: 4.6,
//     arrayCustPH: [],
//     cookiesPerHrArray: [],
//     cookiesPerDay: 0,

//     calcCust : function() {
//     for (var i = 0; i < hours.length; i++) {
//         var randomCust = this.getRandom(this.minCustPerHr, this.maxCustPerHr);    
//         this.arrayCustPH.push(randomCust)
//         }
//     },

//     calcCookies: function() {
//         for (var i = 0; i < this.arrayCustPH.length; i++) {
//             var cookies = Math.round(this.arrayCustPH[i] * this.avgCookiesPerCust);
//             this.cookiesPerHrArray.push(cookies);
//             this.cookiesPerDay += cookies;
//         }
//     },

//     getRandom: function(min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//     },

//     render: function() {
//         this.calcCust();
//         this.calcCookies();
//         var ulEl = document.createElement('ul');
//         // var h2El = document.createElement('h2');
//         // h2El.textContent = this.storeName;
//         // seattleElement.appendChild(h2El);

//         for (var i = 0; i < hours.length; i++) {
//             var liEl=document.createElement('li');
//             liEl.textContent = `${hours[i]}: ${this.cookiesPerHrArray[i]} Cookies`;
//             ulEl.appendChild(liEl);   
//         }
        
//         liEl = document.createElement('li');
//         liEl.textContent = `Total: ${this.cookiesPerDay} Cookies`;
//         ulEl.appendChild(liEl);

//         dubaiElement.appendChild(ulEl);
//         dubaiElement.appendChild(liEl);

//     }
// };
// dubai.render();

// //PARIS STORE
// var parisElement = document.getElementById('paris');

// var paris = {
//     minCustPerHr: 20,
//     maxCustPerHr: 38,
//     avgCookiesPerCust: 2.3,
//     arrayCustPH: [],
//     cookiesPerHrArray: [],
//     cookiesPerDay: 0,

//     calcCust : function() {
//     for (var i = 0; i < hours.length; i++) {
//         var randomCust = this.getRandom(this.minCustPerHr, this.maxCustPerHr);    
//         this.arrayCustPH.push(randomCust)
//         }
//     },

//     calcCookies: function() {
//         for (var i = 0; i < this.arrayCustPH.length; i++) {
//             var cookies = Math.round(this.arrayCustPH[i] * this.avgCookiesPerCust);
//             this.cookiesPerHrArray.push(cookies);
//             this.cookiesPerDay += cookies;
//         }
//     },

//     getRandom: function(min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//     },

//     render: function() {
//         this.calcCust();
//         this.calcCookies();
//         var ulEl = document.createElement('ul');
//         // var h2El = document.createElement('h2');
//         // h2El.textContent = this.storeName;
//         // seattleElement.appendChild(h2El);

//         for (var i = 0; i < hours.length; i++) {
//             var liEl=document.createElement('li');
//             liEl.textContent = `${hours[i]}: ${this.cookiesPerHrArray[i]} Cookies`;
//             ulEl.appendChild(liEl);   
//         }
        
//         liEl = document.createElement('li');
//         liEl.textContent = `Total: ${this.cookiesPerDay} Cookies`;
//         ulEl.appendChild(liEl);

//         parisElement.appendChild(ulEl);
//         parisElement.appendChild(liEl);

//     }
// };
// paris.render();


// //LIMA STORE
// var limaElement = document.getElementById('lima');

// var lima = {
//     minCustPerHr: 2,
//     maxCustPerHr: 16,
//     avgCookiesPerCust: 4.6,
//     arrayCustPH: [],
//     cookiesPerHrArray: [],
//     cookiesPerDay: 0,

//     calcCust : function() {
//     for (var i = 0; i < hours.length; i++) {
//         var randomCust = this.getRandom(this.minCustPerHr, this.maxCustPerHr);    
//         this.arrayCustPH.push(randomCust)
//         }
//     },

//     calcCookies: function() {
//         for (var i = 0; i < this.arrayCustPH.length; i++) {
//             var cookies = Math.round(this.arrayCustPH[i] * this.avgCookiesPerCust);
//             this.cookiesPerHrArray.push(cookies);
//             this.cookiesPerDay += cookies;
//         }
//     },

//     getRandom: function(min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//     },

//     render: function() {
//         this.calcCust();
//         this.calcCookies();
//         var ulEl = document.createElement('ul');
//         // var h2El = document.createElement('h2');
//         // h2El.textContent = this.storeName;
//         // seattleElement.appendChild(h2El);

//         for (var i = 0; i < hours.length; i++) {
//             var liEl=document.createElement('li');
//             liEl.textContent = `${hours[i]}: ${this.cookiesPerHrArray[i]} Cookies`;
//             ulEl.appendChild(liEl);   
//         }
        
//         liEl = document.createElement('li');
//         liEl.textContent = `Total: ${this.cookiesPerDay} Cookies`;
//         ulEl.appendChild(liEl);

//         limaElement.appendChild(ulEl);
//         limaElement.appendChild(liEl);

//     }
// };
// lima.render();